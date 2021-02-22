<template>
  <div
    class="tw-max-w-xs tw-overflow-x-scroll sm:tw-overflow-x-auto sm:tw-max-w-full"
  >
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
import VerbConjEndingA from "../grammar/VerbConjEndingA.vue";
import VerbConjEndingAa from "../grammar/VerbConjEndingAa.vue";
import VerbConjEndingAe from "../grammar/VerbConjEndingAe.vue";

export default {
  props: { grammar: Object },
  components: {
    VerbConjEndingA,
    VerbConjEndingAa,
    VerbConjEndingAe,
  },
  data() {
    return {};
  },
};
</script>
