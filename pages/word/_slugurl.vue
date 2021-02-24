<template>
  <div class="tw--my-4">
    <div v-if="$fetchState.pending" class="tw-min-h-screen tw-my-48">
      <p
        class="tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium"
      >
        Fetching word...💖 Wait for a few seconds 😊
      </p>
    </div>
    <div v-else-if="$fetchState.error" class="tw-my-20">
      <p class="tw-text-3xl tw-font-medium tw-p-4 tw-text-center">
        Error in Fetching
      </p>
    </div>
    <div v-else class="">
      <!-- <aside class="tw-hidden md:tw-block md:tw-w-1/6 md:tw-bg-gray-50">
        <div class="tw-sticky tw-top-12"></div>
      </aside> -->
      <article v-for="(word, i) in words" :key="i" class="tw-mt-3">
        <div class="tw-text-center">
          <h1 class="tw-text-3xl tw-text-pink-800 tw-font-medium">
            {{ word.url.title }}
            <span class="tw-capitalize">{{ word.url.transliteration }}</span>
            meaning in Marwari
          </h1>
          <p
            class="tw-mt-3 tw-max-w-3xl tw-mx-auto tw-text-xs tw-text-gray-500 tw-lowercase"
          >
            {{ word.url.title }} का मारवाड़ी अर्थ,
            {{ word.url.transliteration }} Marwari meaning,
            {{ word.url.transliteration }} ka Marwari arth, meaning of
            {{ word.url.transliteration }} in Marwari, {{ word.url.title }} का
            मारवाड़ी भाषा में अर्थ, {{ word.url.title }} का मेवाड़ी अर्थ,
            {{ word.url.title }} का मेवाड़ी भाषा में अर्थ,
            {{ word.url.transliteration }} ka Mewari arth,
            {{ word.url.title }} ka Mewari bhasha mein arth,
            {{ word.url.transliteration }} का मेवाड़ी अर्थ
          </p>
        </div>
        <wordTOC :word="word" class="tw-mt-5 tw-max-w-xs tw-mx-auto"></wordTOC>
        <div
          class="tw-mt-4 tw-mx-0.5 lg:tw-mx-4 lg:tw-px-6 lg:tw-py-3 tw-border-t tw-border-b tw-border-pink-300"
        >
          <!-- <div class="tw-mx-auto tw-text-center">
            <ReadingTime :word="word"></ReadingTime>
          </div> -->

          <NuxtContent :document="word" class="tw-pt--1"></NuxtContent>
          <MaintenanceCategories :word="word"></MaintenanceCategories>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// import MarwariVerbConjugation from "~/components/MarwariVerbConjugation.vue";
// import Ant from "~/components/word/Ant.vue";
// import Syn from "~/components/word/Syn.vue";

// import noun from "~/components/grammar/noun.vue";

export default {
  // components: { MarwariVerbConjugation, Syn, Ant, noun },
  data() {
    return {
      words: [],
      // words_in_post: "abc",
    };
  },
  async fetch() {
    this.words = await this.$content("words")
      .where({ "url.slugurl": { $eq: this.$route.params.slugurl } })
      // .where({ grammar: { $contains: "verb" } })
      .fetch();

    // let currentword = this.words[0];

    // const readingTime = require("reading-time");
    // return (this.words_in_post = readingTime(currentword.meanings[0].meaning));
  },

  activated() {
    // Call fetch again if last fetch more than 9 min ago
    if (this.$fetchState.timestamp <= Date.now() - 1500000) {
      this.$fetch();
    }
  },
};
</script>

<style src="@/assets/css/nuxtcontent.postcss" lang="postcss">
</style>