<template>
  <div class="tw-mt-3">
    <div v-for="word in words" :key="word.slugurl">
      <h1 class="tw-text-3xl tw-text-pink-800 tw-text-center tw-font-medium">
        {{ word.title }} ({{ word.transliteration }}) meaning in Marwari
      </h1>
      <NuxtContent :document="word"></NuxtContent>
      <MaintenanceCategories :word="word"></MaintenanceCategories>
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