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

      <ol v-if="word.grammar.noun" class="">
        <li class="fos">Noun</li>
        <ol style="list-style-type: lower-roman">
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
          <li v-if="word.grammar.noun.gender_f">
            Male nouns having female counterparts
          </li>
          <li v-if="word.grammar.noun.gender_m">
            Female nouns having male counterparts
          </li>
        </ol>
      </ol>
      <ol v-if="word.grammar.pronoun">
        <span class="fos"><li>Pronoun</li></span>
      </ol>
      <ol v-if="word.grammar.preposition">
        <li class="fos">Preposition</li>
      </ol>
      <ol v-if="word.grammar.conjunction">
        <li class="fos">Conjunction</li>
      </ol>

      <ol v-if="word.grammar.verb" class="">
        <li class="fos">Verb</li>
        <ol style="list-style-type: lower-roman">
          <li>
            {{
              word.grammar.verb.ending === "a"
                ? "Verbs ending with 'a'"
                : word.grammar.verb.ending === "aa"
                ? "Verbs ending with 'aa'"
                : word.grammar.verb.ending === "ae"
                ? "Verbs ending with 'ae'"
                : ""
            }}
          </li>

          <li v-if="word.grammar.verb.causative">
            Verbs with causative forms → Verbs of
            <span v-if="word.grammar.verb.causative.self === 1"
              >1<sup>st</sup>
            </span>
            <span v-if="word.grammar.verb.causative.self === 2"
              >2<sup>nd</sup></span
            >
            <span v-if="word.grammar.verb.causative.self === 3"
              >3<sup>rd</sup></span
            >
            causative form
          </li>
        </ol>
      </ol>
    </div>
    <ol v-if="word.meanings" class="tw-mt-2 tw-border-t tw-border-green-800">
      <li>Words with meanings in Frontmatter</li>
      <li v-if="word.meanings.length === 1">Words with single meaning</li>
      <li v-else>Words with multiple meanings</li>
    </ol>
    <ol
      v-if="word.examples || word.egs"
      class="tw-mt-2 tw-border-t tw-border-green-800"
    >
      <li>Words with examples</li>
      <li v-if="word.examples">
        Words with {{ word.examples.length }} example{{
          word.examples.length > 1 ? "s" : ""
        }}
      </li>
      <li v-if="word.egs">
        Words with {{ word.egs.length }} example{{
          word.egs.length > 1 ? "s" : ""
        }}
      </li>
      <li>Words with examples outside the Meaning component</li>
    </ol>
    <ol class="tw-mt-2 tw-border-t tw-border-green-800">
      <li v-if="word.antonyms || word.ants || word.ant">Words with Antonyms</li>
      <li v-if="word.synonyms || word.syns || word.syn">Words with Synonyms</li>
    </ol>
    <ol v-if="word.related" class="tw-mt-2 tw-border-t tw-border-green-800">
      <li>Words with related terms</li>
      <li>Words with related terms outside Meaning</li>
    </ol>
    <ol v-if="word.rels" class="tw-mt-2 tw-border-t tw-border-green-800">
      <li>Words with related terms</li>
      <li>Words with related terms outside Meaning</li>
    </ol>

    <ol
      v-if="word.categories && word.categories.length > 0"
      class="tw-mt-2 tw-border-t tw-border-green-800"
    >
      <li>Words with {{ word.categories.length }} Topics assigned</li>
    </ol>
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

ol {
  @apply tw-list-decimal tw-mt-2;
}

.fos {
  @apply tw-text-green-700 tw-bg-green-50 tw-p-1 tw-font-medium;
}
</style>