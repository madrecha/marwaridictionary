<template>
  <div>
    <ul>
      <li v-for="word in words" :key="word">
        {{ word.title }}
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
      .where({ grammar: { $contains: "noun" } })
      .fetch();
  },
};
</script>

<style lang="scss" scoped>
</style>