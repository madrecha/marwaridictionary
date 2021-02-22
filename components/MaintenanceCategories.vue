<template>
  <div>
    <div v-if="word.grammar" class="tw-mt-8">
      <h2
        class="tw-text-pink-800 tw-text-xl sm:tw-text-3xl tw-mt-4 tw-bg-gradient-to-r tw-from-white tw-to-red-50 tw-rounded-md tw-py-1 lg:tw--ml-2 tw-pl-3 tw-shadow-md"
      >
        Meta categories
      </h2>
      <div v-if="word.grammar.noun">
        Noun,
        {{
          word.grammar.noun.gender === "m" ? "Masculine Noun" : "Feminine Noun"
        }},
        {{ word.grammar.noun.number === "s" ? "Singular Noun" : "Plural Noun" }}
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
    <div v-if="word.examples">Words with Examples</div>
  </div>
</template>

<script>
export default {
  props: { word: Object },
  data() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
</style>