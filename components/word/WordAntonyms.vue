<template>
  <section class="">
    <word-child-helper
      name="Antonym"
      :children="antonymsComputed"
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
    antonyms: { type: Array },
    ants: { type: Array },
    tag: { type: String, default: "h3" },
    close: { type: Boolean, default: false }
  },
  computed: {
    antonymsComputed() {
      if (this.antonyms && !this.ants) {
        return this.antonyms;
      }
      if (!this.antonyms && this.ants) {
        return this.ants;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
</style>