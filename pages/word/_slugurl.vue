<template>
  <div class="tw-mt-3">
    <div v-for="word in words" :key="word.slugurl">
      <h1 class="tw-text-3xl tw-text-pink-800 tw-text-center tw-font-medium">
        {{ word.title }} ({{ word.transliteration }})
      </h1>
      <NuxtContent :document="word"></NuxtContent>
      <div v-if="word.grammar" class="tw-mt-8">
        <h2
          class="tw-text-pink-800 tw-text-xl sm:tw-text-3xl tw-mt-4 tw-bg-gradient-to-r tw-from-white tw-to-red-50 tw-rounded-md tw-py-1 lg:tw--ml-2 tw-pl-3 tw-shadow-md"
        >
          Grammar categories
        </h2>
        <div v-if="word.grammar.noun">
          Noun,
          {{
            word.grammar.noun.gender === "m"
              ? "Masculine Noun"
              : "Feminine Noun"
          }},
          {{
            word.grammar.noun.number === "s" ? "Singular Noun" : "Plural Noun"
          }}
        </div>
        <div v-if="word.grammar.adjective">
          Adjective,
          {{
            word.grammar.adjective.gender === "m"
              ? "Masculine adjective"
              : "Feminine adjective"
          }},
          {{
            word.grammar.adjective.number === "s"
              ? "Singular adjective"
              : "Plural adjective"
          }}
        </div>
        <div v-if="word.grammar.verb">Verb</div>
        <div v-if="word.grammar.pronoun">Pronoun</div>
      </div>
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