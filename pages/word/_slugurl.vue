<template>
  <div class="tw-mt-3">
    <div v-if="$fetchState.pending" class="tw-my-20">
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
    <div v-else>
      <article v-for="word in words" :key="word.slugurl">
        <div class="tw-text-center">
          <h1 class="tw-text-3xl tw-text-pink-800 tw-font-medium">
            {{ word.title }}
            <span class="tw-capitalize">{{ word.transliteration }}</span>
            meaning in Marwari
          </h1>
          <p
            class="tw-max-w-2xl tw-mx-auto tw-text-sm tw-text-gray-500 tw-lowercase"
          >
            {{ word.title }} का मारवाड़ी अर्थ, {{ word.transliteration }} Marwari
            meaning, {{ word.transliteration }} ka Marwari arth, meaning of
            {{ word.transliteration }} in Marwari, {{ word.title }} का मारवाड़ी
            भाषा में अर्थ, {{ word.title }} का मेवाड़ी अर्थ, {{ word.title }} का
            मेवाड़ी भाषा में अर्थ, {{ word.transliteration }} ka Mewari arth,
            {{ word.title }} ka Mewari bhasha mein arth,
            {{ word.transliteration }} का मेवाड़ी अर्थ
          </p>
        </div>
        <NuxtContent :document="word"></NuxtContent>
        <MaintenanceCategories :word="word"></MaintenanceCategories>
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
    };
  },
  async fetch() {
    this.words = await this.$content("words")
      .where({ title: this.$route.params.slugurl })
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

<style src="@/assets/css/nuxtcontent.postcss" lang="postcss">
</style>