<template>
  <div class="tw-mt-4">
    <h2
      class="tw-text-green-800 tw-border-b-4 tw-border-double tw-border-green-800 tw-text-xl tw-font-medium tw-mt-4 tw-py-1"
    >
      Categories
    </h2>
    <div v-if="word.grammar" class="tw-mt-2">
      <div v-if="word.grammar.adjective">
        <span class="fos">Adjective</span> →
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

      <div v-if="word.grammar.noun">
        <span class="fos">Noun</span> →
        <ul>
          <li>
            {{
              word.grammar.noun.gender === "m"
                ? "Masculine noun"
                : "Feminine noun"
            }}
          </li>
          <li>
            {{
              word.grammar.noun.number === "s" ? "Singular noun" : "Plural noun"
            }}
          </li>
          <li>
            <span v-if="word.grammar.noun.gender_f"
              >Male nouns having female counterparts</span
            >
            <span v-if="word.grammar.noun.gender_m"
              >Female nouns having male counterparts</span
            >
          </li>
        </ul>
      </div>
      <div v-if="word.grammar.pronoun"><span class="fos">Pronoun</span></div>
      <div v-if="word.grammar.preposition">
        <span class="fos">Preposition</span>
      </div>
      <div v-if="word.grammar.conjunction">
        <span class="fos">Conjunction</span>
      </div>

      <div v-if="word.grammar.verb">
        <span class="fos">Verb</span> →
        {{
          word.grammar.verb.ending === "a"
            ? "Verbs ending with 'a'"
            : word.grammar.verb.ending === "aa"
            ? "Verbs ending with 'aa'"
            : ""
        }}
      </div>
    </div>
    <div v-if="word.examples" class="tw-mt-2 tw-border-t tw-border-green-800">
      Words with examples, Words with {{ word.examples.length }} example{{
        word.examples.length > 1 ? "s" : ""
      }}
    </div>
    <div v-if="word.ant || word.syn">
      <span v-if="word.ant">Words with Antonyms</span>,
      <span v-if="word.syn">Words with Synonyms</span>
    </div>
    <div
      v-if="word.categories && word.categories.length > 0"
      class="tw-mt-2 tw-border-t tw-border-green-800"
    >
      Words with Topics assigned
    </div>
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
ul {
  @apply tw-list-disc tw-mt-2;
}

li {
  list-style-type: disc;
}
.fos {
  @apply tw-text-green-700 tw-bg-green-50 tw-p-1 tw-font-medium;
}
</style>