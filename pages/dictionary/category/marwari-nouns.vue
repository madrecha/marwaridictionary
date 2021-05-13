<template>
  <div>
    <ul>
      <li
        v-for="word in words"
        :key="word.title"
      >
        <nuxt-link :to="`/dictionary/word/${word.title}`">
          {{ word.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: []
    };
  },
  async fetch() {
    this.words = await this.$content("words")
      .where({ grammar: { $contains: "noun" } })
      .fetch();
  }
};
</script>