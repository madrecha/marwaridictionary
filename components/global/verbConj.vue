<template>
  <section class="grammar-component verb-conj-section">
    <header class="grammar-component-header verb-conj-header">
      <h3 class="grammar-component-heading verb-conj-heading">Conjugation</h3>
    </header>
    <component
      :is="componentPicker"
      :term="grammar.verb.term"
      :trans="grammar.verb.trans"
      :term2="grammar.verb.term2 ? grammar.verb.term2 : null"
      :trans2="grammar.verb.trans2 ? grammar.verb.trans2 : null"
      :verbCategories="verbCategories"
    ></component>
    <!-- <VerbConjEndingA
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
    ></VerbConjEndingAe> -->
  </section>
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
    },
    // verbIndex would have been used if "grammar" was an Array, but it will disadvantages like unable to query using $content `where`. So, keep the grammar as an Object.
    // verbIndex() {
    //   return this.grammar.findIndex(el => {
    //     return Object.keys(el)[0] === "verb";
    //   });
    // },
    componentPicker() {
      // let ending = this.grammar[this.verbIndex].verb.ending;
      let ending = this.grammar.verb.ending;

      if (ending === "a") {
        return `VerbConjEndingA`;
      }
      if (ending === "aa") {
        return `VerbConjEndingAa`;
      }
      if (ending === "ae") {
        return `VerbConjEndingAe`;
      }
    }
  }
};
</script>
