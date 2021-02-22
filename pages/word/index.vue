<template>
  <div class="tw-mt-3">
    <div v-if="$fetchState.pending" class="tw-my-20">
      <p
        class="tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium"
      >
        Fetching words...💖 Wait for a few seconds 😊
      </p>
    </div>
    <div v-else>
      <h1 class="tw-text-center tw-text-2xl">
        {{ words.length }} Marwari words added till now
      </h1>
      <div class="tw-mt-3">
        <ul class="tw-flex tw-flex-wrap">
          <li
            v-for="word in words"
            :key="word.slugurl"
            class="tw-m-2 hover:tw-bg-blue-50 tw-text-center"
          >
            <nuxt-link
              :to="`/word/${word.title}`"
              class="tw-py-2 tw-text-lg tw-text-center"
            >
              {{ word.title }}<br /><span class="tw-text-sm">
                {{ word.transliteration }}
              </span>
            </nuxt-link>
          </li>
        </ul>
      </div>
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
      .sortBy("title")
      .fetch();
  },
  activated() {
    // Call fetch again if last fetch more than 15 min ago
    if (this.$fetchState.timestamp <= Date.now() - 1500000) {
      this.$fetch();
    }
  },
};
</script>

