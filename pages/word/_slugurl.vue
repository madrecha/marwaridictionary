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
        <h1 class="tw-text-3xl tw-text-pink-800 tw-text-center tw-font-medium">
          {{ word.title }} ({{ word.transliteration }}) meaning in Marwari
        </h1>
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
};
</script>

<style src="@/assets/css/nuxtcontent.postcss" lang="postcss">
</style>