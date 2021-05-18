<template>
  <div>
    <VerbConjEndingA
      v-if="grammar.verb.ending === 'a'"
      :term="grammar.verb.term"
      :trans="grammar.verb.trans"
    ></VerbConjEndingA>
    <VerbConjEndingAa
      v-if="grammar.verb.ending === 'aa'"
      :term="grammar.verb.term"
      :trans="grammar.verb.trans"
    ></VerbConjEndingAa>
    <VerbConjEndingAe
      v-if="grammar.verb.ending === 'ae'"
      :term="grammar.verb.term"
      :trans="grammar.verb.trans"
      :term2="grammar.verb.term2"
      :trans2="grammar.verb.trans2"
    ></VerbConjEndingAe>
  </div>
</template>

<script>
import VerbConjEndingA from "~/components/grammar/VerbConjEndingA.vue";
import VerbConjEndingAa from "~/components/grammar/VerbConjEndingAa.vue";
import VerbConjEndingAe from "~/components/grammar/VerbConjEndingAe.vue";

export default {
  props: { grammar: Object },
  components: {
    VerbConjEndingA,
    VerbConjEndingAa,
    VerbConjEndingAe
  },
  data() {
    return {};
  }
};
</script>
