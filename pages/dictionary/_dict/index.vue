<template>
  <div>
    <article
      v-if="post"
      class="article-post nuxt-content"
    >
      <header class="article-post_header">
        <h1 class="article-post_header--h1">{{post.title}}</h1>
        <p class="article-post_header--description">{{post.description}}</p>
      </header>
      <div class="tw-max-w-screen-lg tw-mx-auto">

        <nuxt-content :document="post"></nuxt-content>
        <section>
          <h2>Browse Marwari words</h2>
          <p>Showing only 10 recent most updated Marwari words</p>
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
          <!-- <SearchWordsFull :width="'tw-w-2/3 md:tw-w-full'"></SearchWordsFull> -->
        </section>
      </div>

    </article>
  </div>
</template>

<script>
import SearchWordsFull from "~/components/organisms/SearchWordsFull";

export default {
  name: "DictIndexPage",
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

<style lang="sass" src="~/assets/css/layout/article-heading.sass" scoped>
</style>

<style lang="sass" src="~/assets/css/all.sass" scoped>
</style>