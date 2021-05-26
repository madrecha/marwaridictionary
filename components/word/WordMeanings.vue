<template>
  <section class="word-component word-meanings-section">
    <header class="word-component-header word-meanings-header">
      <h3 class="word-component-heading word-meanings-heading">Marwari <span class="tw-capitalize">{{$tc("word.meaning", 2)}}</span> of <span lang="mwr-Deva">{{$route.params.slugurl}}</span> <span
          lang="mwr-Latn"
          v-if="wordFetched"
        >({{
          wordFetched.transliteration ? wordFetched.transliteration : require("@sanskrit-coders/sanscript").t(wordFetched.slugurl, "devanagari", "iast")
        }})</span> in English</h3>
    </header>
    <div class="word-meanings-slot-wrapper">
      <slot></slot>
    </div>
  </section>
</template>
   

<script>
export default {
  name: "WordMeanings",
  props: {
    count: { type: Number } // Number of meanings
  },
  data() {
    return {
      countAuto: null,
      wordFetched: null
    };
  },
  async fetch() {
    // fetch(
    //   `http://aksharamukha-plugin.appspot.com/api/public?source=Devanagari&target=RomanReadable&text=${this.$route.params.slugurl}`
    // ).then();

    this.wordFetched = await this.$content(
      `dictionary/${this.$route.params.dict}`
    )
      .where({ slugurl: this.word })
      .only(["slug", "slugurl", "title", "transliteration"])
      .fetch();
    this.wordFetched = this.wordFetched[0];
  },
  computed: {
    word() {
      return this.$route.params.slugurl;
    }
  },
  mounted() {
    this.countAuto = this.countMeaningsAuto();

    this.$emit("countMeanings", () => {
      return this.countAuto;
    });
  },
  methods: {
    countMeaningsAuto() {
      if (this.count) {
        return this.count;
      } else {
        // else, count it automatically based on "li" items
        const wordMeaningsList =
          document.querySelector(".word-meanings-slot-wrapper > ol") ||
          document.querySelector(".word-meanings-slot-wrapper > ul");
        return wordMeaningsList.children ? wordMeaningsList.children.length : 0;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.word-meanings-section
  border-style: dashed
  @apply tw-my-3 tw-px-2 tw-pt-2
.word-meanings-header
  width: fit-content
  @apply tw-mb-1 tw-border-b tw-border-gray-300 tw-py-1
.word-meanings-heading
  @apply tw-text-sm tw-text-pink-900
.word-meanings-slot-wrapper
  &> ol, ul
    @apply tw-list-outside tw-list-decimal tw-px-4
    & > li
      @apply tw-p-0.5 tw-my-0.5 sm:tw-my-1
      @apply tw-text-lg sm:tw-text-xl
      &::marker
        @apply tw-text-red-500 tw-text-base
      & b, strong
        @apply tw-font-medium
      & > ol, ul
        @apply tw-list-outside tw-list-disc tw-px-2 sm:tw-px-4
        & > li
          @apply tw-p-0.5 tw-my-0.5
          &::marker
            @apply tw-text-gray-300 tw-text-base
</style>