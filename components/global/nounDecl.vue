<template>
  <div
    v-if="grammar.noun.term"
    class="tw-max-w-xs tw-overflow-x-scroll sm:tw-overflow-x-auto sm:tw-max-w-full"
  >
    <NounDeclEndingOGenderM
      v-if="grammar.noun.ending === 'o' && grammar.noun.gender === 'm'"
      :term="grammar.noun.term"
      :trans="grammar.noun.trans"
    ></NounDeclEndingOGenderM>
    <NounDeclEndingAGenderM
      v-if="grammar.noun.ending === 'a' && grammar.noun.gender === 'm'"
      :term="grammar.noun.term"
      :trans="grammar.noun.trans"
    ></NounDeclEndingAGenderM>
    <NounDeclEndingIiGenderF
      v-if="
        (grammar.noun.ending === 'ii' || grammar.noun.ending === 'ii-vowel') &&
        grammar.noun.gender === 'f'
      "
      :term="grammar.noun.term"
      :trans="grammar.noun.trans"
      :grammar="grammar"
    ></NounDeclEndingIiGenderF>
    <NounDeclEndingAGenderF
      v-if="grammar.noun.ending === 'a' && grammar.noun.gender === 'f'"
      :term="grammar.noun.term"
      :trans="grammar.noun.trans"
    ></NounDeclEndingAGenderF>
  </div>
</template>

<script>
import NounDeclEndingOGenderM from "../grammar/NounDeclEndingOGenderM.vue";
import NounDeclEndingAGenderM from "../grammar/NounDeclEndingAGenderM";
import NounDeclEndingIiGenderF from "../grammar/NounDeclEndingIiGenderF.vue";
import NounDeclEndingAGenderF from "../grammar/NounDeclEndingAGenderF.vue";

export default {
  props: {
    grammar: { type: Object, required: true },
    url: { type: Object, required: false }
  },
  components: {
    NounDeclEndingOGenderM,
    NounDeclEndingIiGenderF,
    NounDeclEndingAGenderM,
    NounDeclEndingAGenderF
  },
  data() {
    return {
      term: "",
      trans: ""
    };
  }
};
</script>