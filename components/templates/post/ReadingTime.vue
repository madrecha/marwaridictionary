<template>
  <p
    class="tw-rounded-full tw-bg-gradient-to-br tw-from-white tw-to-green-50 tw-w-64 tw-mt-2 tw-p-2 lg:tw-pt-0 lg:tw-mt-0 tw-inline-block tw-text-center tw-shadow-md"
  >
    <span class="tw-font-bold tw-text-green-800">{{
      ((word.readingTime / 60 / 1000) * 1.2).toFixed(1)
    }}</span>
    min read -
    <span class="tw-font-bold tw-text-green-800">{{
      ((word.readingTime / 60 / 1000) * 200).toFixed(0)
    }}</span>
    words
  </p>
</template>

<script>
export default {
  props: { word: Object },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>