<template>
  <div>
    <verb-conj-ending-a
      v-if="grammar.verb.ending === 'a'"
      :word="grammar.verb.term"
      :worden="grammar.verb.trans"
    ></verb-conj-ending-a>
    <verb-conj-ending-aa
      v-if="grammar.verb.ending === 'aa'"
      :word="grammar.verb.term"
      :worden="grammar.verb.trans"
    ></verb-conj-ending-aa>
  </div>
</template>

<script>
import verbConjEndingA from "./grammar/verbConjEndingA.vue";
import verbConjEndingAa from "./grammar/verbConjEndingAa.vue";

export default {
  props: { grammar: Object },
  components: { verbConjEndingA, verbConjEndingAa },
  data() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
</style>