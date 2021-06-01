<template>
  <div>
    <div
      v-if="$fetchState.pending"
      class="tw-my-48 tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium"
    >
      Fetching... 💖 Wait for a few seconds 😊

    </div>
    <div
      v-else-if="$fetchState.error"
      class="tw-my-48 tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium"
    >
      Error in Fetching... 👀
    </div>
    <article-layout v-else>
      <template #title>{{post.title}}</template>
      <template #description>{{post.description}}</template>

      <nuxt-content :document="post"></nuxt-content>
      <section class="nuxt-content">
        <p>Showing only 10 recent most updated Marwari words out of hundreds.</p>
        <p class="tw-border tw-border-gray-400 tw-shadow tw-bg-white tw-p-2">
          <nuxt-link :to="localePath(`/browse`)">Browse <strong>all Marwari words here</strong></nuxt-link> with better filtering and sorting.
        </p>
        <ol class="tw-grid tw-grid-cols-3 md:tw-grid-cols-4 tw-gap-2">
          <li
            v-for="word in words"
            :key="word.slug"
          >
            <nuxt-link :to="localePath(`/dictionary/${$route.params.dict}/${word.slugurl}`)"><span lang="mwr-Deva">{{word.slugurl}}</span></nuxt-link> <span lang="mwr-Latn">{{word.transliteration}}</span>
          </li>
        </ol>
      </section>
    </article-layout>
  </div>

</template>

<script>
import ArticleLayout from "~/components/templates/ArticleLayout";

export default {
  name: "DictIndexPage",
  components: { ArticleLayout },
  data() {
    return {
      post: null,
      posts: [],
      words: []
    };
  },
  async fetch() {
    const locale = this.$i18n.locale;

    this.posts = await this.$content(locale, { deep: true })
      .where({
        path: `/${locale}/dictionary/${this.$route.params.dict}`
      })
      .fetch();

    this.post = this.posts[0];

    this.words = await this.$content("dictionary", { deep: true })
      .where({
        $and: [
          { slug: { $ne: "AAA" } },
          { dir: `/dictionary/${this.$route.params.dict}` }
        ]
      })
      .sortBy("updatedAt", "desc")
      .limit(10)
      .fetch();
  }
};
</script>
