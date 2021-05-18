<template>
  <section class="word-meanings">
    <p class="tw-text-sm tw-text-gray-500">Marwari <span class="tw-text-sm tw-text-green-800 tw-font-medium">Meaning</span> of <span
        lang="mwr"
        class="tw-text-sm"
      >{{$route.params.slugurl}}</span>
    </p>
    <slot></slot>
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
      countAuto: null
    };
  },
  async fetch() {
    // fetch(
    //   `http://aksharamukha-plugin.appspot.com/api/public?source=Devanagari&target=RomanReadable&text=${this.$route.params.slugurl}`
    // ).then();
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
        return this.count; // if specified, then consider it
      } else {
        // else, count it automatically based on "li" items
        const wordMeaningsList =
          document.querySelector(".word-meanings > ol") ||
          document.querySelector(".word-meanings > ul");
        return wordMeaningsList.children ? wordMeaningsList.children.length : 0;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.word-meanings
  & > ol > li
    @apply tw-text-lg md:tw-text-xl
    & > p:first-child
      @apply tw-bg-gradient-to-b tw-from-white tw-to-white tw-shadow tw-px-2 tw-py-1
  & > ul > li
    @apply tw-text-lg md:tw-text-xl
</style>