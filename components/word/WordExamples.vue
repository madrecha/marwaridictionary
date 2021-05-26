<template>
  <section class="word-component word-examples-section">
    <header
      class="word-component-header word-examples-header"
      @click="toggleExamples = !toggleExamples"
      v-if="head"
    >
      <component
        :is="tag"
        class="word-component-heading word-examples-heading"
      >
        Marwari Examples of <span lang="mwr-Deva">{{word}}</span> <span
          lang="mwr-Latn"
          v-if="wordFetched"
        >({{
          wordFetched.transliteration ? wordFetched.transliteration : require("@sanskrit-coders/sanscript").t(wordFetched.slugurl, "devanagari", "iast")
        }})</span>
      </component>
      <span class="word-component-collapse-icon word-examples-collapse-icon">{{toggleExamples ? `+` : `-`}}</span>
    </header>
    <main
      class="word-component-slot-wrapper word-examples-slot-wrapper"
      v-show="!toggleExamples"
    >
      <slot></slot>
    </main>
  </section>
</template>

<script>
export default {
  props: {
    head: { type: Boolean, default: true },
    tag: { type: String, default: "h3" },
    close: { type: Boolean, default: false }
  },
  data() {
    return {
      wordFetched: null,
      toggleExamples: this.close
    };
  },
  async fetch() {
    this.wordFetched = await this.$content(
      `dictionary/${this.$route.params.dict}`,
      { deep: true }
    )
      .where({ slugurl: this.word })
      .without(["body", "toc"])
      .fetch();
    this.wordFetched = this.wordFetched[0];
  },
  computed: {
    word() {
      return this.$route.params.slugurl;
    }
  }
};
</script>

<style lang="sass" scoped>
.word-examples-section
  @apply tw-my-3 sm:tw-my-4 tw-mx-0.5 sm:tw-mx-3 tw-border tw-border-indigo-200 tw-rounded
.word-examples-header
  @apply tw-bg-gradient-to-b tw-from-white tw-via-gray-50 tw-to-indigo-50 tw-text-indigo-900 hover:tw-from-indigo-50 hover:tw-to-white
  @apply tw-p-2 tw-cursor-pointer tw-flex tw-justify-between tw-items-center
.word-examples-heading
  @apply tw-text-sm
  & span[lang="mwr-Latn"]
    @apply tw-text-xs
</style>