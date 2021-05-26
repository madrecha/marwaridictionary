<template>
  <section class="">
    <word-child-helper
      name="Synonym"
      :children="synonymsComputed"
      :tag="tag"
      :close="close"
    ></word-child-helper>
  </section>
</template>

<script>
import WordChildHelper from "~/components/word/WordChildHelper";

export default {
  components: {
    WordChildHelper
  },
  props: {
    synonyms: { type: Array },
    syns: { type: Array },
    tag: { type: String, default: "h3" },
    close: { type: Boolean, default: false }
  },
  computed: {
    synonymsComputed() {
      if (this.synonyms && !this.syns) {
        return this.synonyms;
      }
      if (!this.synonyms && this.syns) {
        return this.syns;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
</style>