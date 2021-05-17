<template>
  <section class="word-meanings">
    <p class="tw-text-base tw-text-gray-500">Marwari meaning of
      <span lang="mwr">{{$route.params.slugurl}}</span>
    </p>
    {{msg}}
    <slot></slot>
  </section>
</template>
   

<script>
export default {
  name: "WordMeanings",
  props: {
    count: { type: Number }, // Number of meanings
    msg: undefined
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
  & > ul > li
    @apply tw-text-lg md:tw-text-xl
</style>