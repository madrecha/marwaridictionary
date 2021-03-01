<template>
  <div>
    <!-- This page is to generate Link of the words based on their file name which is denoted by "slug" -->
    <ul v-for="word in words" :key="word.title">
      <li>
        <nuxt-link :to="`/dictionary/word/${word.slug}`">{{
          word.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: [],
    };
  },
  async fetch() {
    this.words = await this.$content("words")
      .where({ slug: { $ne: "README" } })
      .without(["body", "toc"])
      .sortBy("transliteration")
      .fetch();
  },
};
</script>