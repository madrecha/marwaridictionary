<template>
  <div class="word-qualifier-root-div">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
.word-qualifier-root-div
  @apply tw-inline tw-text-sm tw-text-gray-500
  &::before
    content: "("
  &::after
    content: ")"
.word-qualifier-root-div *
  @apply tw-inline tw-text-sm tw-text-gray-500
</style>
