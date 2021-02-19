<template>
  <div>
    <div v-for="word in words" :key="word.slugurl">
      <h1 class="tw-text-3xl tw-text-pink-800 tw-text-center tw-font-medium">
        Marwari word: {{ word.title }}
      </h1>
      <NuxtContent :document="word"></NuxtContent>
      <!-- <div v-if="word.conjugation && !word.conjugation.category">
        <h2
          class="tw-text-pink-800 tw-text-xl sm:tw-text-3xl tw-mt-4 tw-bg-gradient-to-r tw-from-white tw-to-red-50 tw-rounded-md tw-py-1 lg:tw--ml-2 tw-pl-3 tw-shadow-md"
        >
          Conjugation
        </h2>
        <div
          class="tw-mt-3 tw-max-w-xs tw-overflow-x-scroll sm:tw-overflow-x-auto sm:tw-max-w-full"
        >
          <MarwariVerbConjugation
            :word="word.conjugation.term"
            :worden="word.conjugation.en"
            :wordcat="word.conjugation.category"
          ></MarwariVerbConjugation>
        </div> 
      </div> -->
    </div>
  </div>
</template>

<script>
import MarwariVerbConjugation from "~/components/MarwariVerbConjugation.vue";

export default {
  components: { MarwariVerbConjugation },
  data() {
    return {
      words: [],
    };
  },
  async fetch() {
    this.words = await this.$content("words")
      .where({ slugurl: this.$route.params.slugurl })
      .fetch();
  },
};
</script>

<style src="@/assets/css/nuxtcontent.postcss" lang="postcss">
</style>