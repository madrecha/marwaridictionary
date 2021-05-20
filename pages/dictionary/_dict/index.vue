<template>
  <div>
    <article
      v-if="post"
      class="article-post nuxt-content"
    >
      <h1 class="article-post_h1">{{post.title}}</h1>
      <p class="article-post_description">{{post.description}}</p>
      <nuxt-content :document="post"></nuxt-content>
      <section>
        <h2>Browse Marwari words</h2>
        <p>Showing only 10 recent most updated Marwari words</p>
        <p class="tw-border tw-border-gray-400 tw-shadow tw-bg-white tw-p-2">
          <nuxt-link :to="`/${$i18n.locale}/browse`">Browse <strong>all Marwari words here</strong></nuxt-link> with better filtering and sorting.
        </p>
        <ol class="tw-grid tw-grid-cols-3 md:tw-grid-cols-4 tw-gap-2">
          <li
            v-for="word in words"
            :key="word.slug"
          >
            <nuxt-link :to="`/${$i18n.locale}/dictionary/${$route.params.dict}/${word.slugurl}/`"><span lang="mwr-Deva">{{word.slugurl}}</span></nuxt-link> <span lang="mwr-Latn">{{word.transliteration}}</span>
          </li>
        </ol>
        <!-- <SearchWordsFull :width="'tw-w-2/3 md:tw-w-full'"></SearchWordsFull> -->
      </section>
    </article>
  </div>
</template>

<script>
import SearchWordsFull from "~/components/organisms/SearchWordsFull";

export default {
  name: "DictionaryName",
  components: { SearchWordsFull },
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

<style lang="sass" scoped>
.article-post_description
  @apply tw-text-center tw-bg-white tw-shadow tw-text-gray-600 tw-p-2 tw-border tw-border-gray-200 tw-max-w-screen-md tw-mx-auto
</style>
