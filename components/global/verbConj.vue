<template>
  <div>
    <VerbConjEndingA
      v-if="grammar.verb.ending === 'a'"
      :term="grammar.verb.term"
      :trans="grammar.verb.trans"
      :verbCategories="verbCategories"
    ></VerbConjEndingA>
    <VerbConjEndingAa
      v-if="grammar.verb.ending === 'aa'"
      :term="grammar.verb.term"
      :trans="grammar.verb.trans"
      :verbCategories="verbCategories"
    ></VerbConjEndingAa>
    <VerbConjEndingAe
      v-if="grammar.verb.ending === 'ae'"
      :term="grammar.verb.term"
      :trans="grammar.verb.trans"
      :term2="grammar.verb.term2"
      :trans2="grammar.verb.trans2"
      :verbCategories="verbCategories"
    ></VerbConjEndingAe>
  </div>
</template>

<script>
import VerbConjEndingA from "~/components/grammar/VerbConjEndingA.vue";
import VerbConjEndingAa from "~/components/grammar/VerbConjEndingAa.vue";
import VerbConjEndingAe from "~/components/grammar/VerbConjEndingAe.vue";

export default {
  props: {
    grammar: { type: Object, required: true },
    perfective: { type: Boolean, default: true },
    imperfective: { type: Boolean, default: true },
    continuous: { type: Boolean, default: true },
    nonaspectual: { type: Boolean, default: true }
  },
  components: {
    VerbConjEndingA,
    VerbConjEndingAa,
    VerbConjEndingAe
  },
  data() {
    return {};
  },
  computed: {
    verbCategories() {
      return {
        showPerfective: this.perfective,
        showImperfective: this.imperfective,
        showContinuous: this.continuous,
        showNonaspectual: this.nonaspectual
      };
    }
  }
};
</script>
