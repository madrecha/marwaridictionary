<template>
  <div>
    main word file ka index hoon
    <div v-for="word in words" :key="word.slugurl">
      <nuxt-link :to="`/word/${word.slugurl}`">
        {{ word.title }}
      </nuxt-link>
    </div>
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
      //   .where({ slugurl: this.$route.params.slugurl })
      .fetch();
  },
};
</script>

<style lang="postcss" scoped>
</style>