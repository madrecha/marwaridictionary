<template>
  <div
    class="tw-max-w-xs tw-overflow-x-scroll sm:tw-overflow-x-auto sm:tw-max-w-full"
  >
    <verb-conj-ending-a
      v-if="grammar.verb.ending === 'a'"
      :term="grammar.verb.term"
      :trans="grammar.verb.trans"
    ></verb-conj-ending-a>
    <verb-conj-ending-aa
      v-if="grammar.verb.ending === 'aa'"
      :term="grammar.verb.term"
      :trans="grammar.verb.trans"
    ></verb-conj-ending-aa>
    <verb-conj-ending-ae
      v-if="grammar.verb.ending === 'ae'"
      :term="grammar.verb.term"
      :trans="grammar.verb.trans"
      :term2="grammar.verb.term2"
      :trans2="grammar.verb.trans2"
    ></verb-conj-ending-ae>
  </div>
</template>

<script>
import verbConjEndingA from "./grammar/verbConjEndingA.vue";
import verbConjEndingAa from "./grammar/verbConjEndingAa.vue";
import verbConjEndingAe from "./grammar/verbConjEndingAe.vue";

export default {
  props: { grammar: Object },
  components: { verbConjEndingA, verbConjEndingAa, verbConjEndingAe },
  data() {
    return {};
  },
};
</script>
