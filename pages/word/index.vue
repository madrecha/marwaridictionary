<template>
  <div class="tw-mt-3">
    <div class="tw-text-center tw-text-2xl">
      {{ words.length }} words added till now
    </div>
    <div class="tw-mt-3">
      <ul class="tw-flex tw-flex-wrap">
        <li
          v-for="word in words"
          :key="word.slugurl"
          class="tw-p-3 hover:tw-bg-blue-50 tw-text-lg tw-text-center"
        >
          <nuxt-link :to="`/word/${word.title}`">
            {{ word.title }}<br /><span class="tw-text-sm">
              {{ word.transliteration }}
            </span>
          </nuxt-link>
        </li>
      </ul>
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
      .sortBy("transliteration")
      .fetch();
  },
};
</script>

<style lang="postcss" scoped>
</style>