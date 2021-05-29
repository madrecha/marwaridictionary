<template>
  <dl class="word-example-dl-top">
    <dt
      lang="mwr-Deva"
      class="word-example--mwr"
      v-if="$scopedSlots.mwr"
    >
      <slot name="mwr"></slot>
    </dt>
    <dd
      lang="mwr-Latn"
      class="word-example--mwr-Latn"
      v-if="$scopedSlots.mwrlatn"
    >
      <slot name="mwrlatn"></slot>
    </dd>
    <dd
      :lang="locale"
      class="word-example--locale"
      v-if="$scopedSlots[locale]"
    >
      <slot :name="locale"></slot>
    </dd>
  </dl>
</template>

<script>
export default {
  data() {
    return {
      locale: this.$i18n.locale
    };
  }
};
</script>

<style lang="sass" scoped>
.word-example-dl-top
  counter-increment: example
  @apply tw-p-2 sm:tw-ml-2 tw-my-0.5
  &:not(:first-child)
    @apply tw-mt-1
  &:not(:last-child)
    @apply tw-mb-1
  &::before
    content: counter(example) " "
    @apply tw-text-sm tw-rounded-full tw-p-1 tw-mr-2 tw-text-indigo-800
    @apply tw-bg-gradient-to-br tw-from-white tw-to-indigo-50 tw-border tw-border-indigo-200
.word-example--mwr
  @apply tw-inline tw-text-gray-800 tw-text-base tw-leading-7
  & b, strong
    @apply tw-bg-yellow-50
  & a
    @apply tw-inline-block tw-border-b tw-border-indigo-200 tw-text-indigo-800 hover:tw-text-indigo-500
.word-example--mwr-Latn
  @apply tw-py-1 tw-text-gray-500 tw-italic tw-text-sm tw-ml-12
  &:empty
    @apply tw-hidden
    // $slots not showing slotname in markdown components https://github.com/nuxt/content/issues/899
.word-example--locale
  @apply tw-text-gray-700 tw-text-base tw-ml-12
</style>