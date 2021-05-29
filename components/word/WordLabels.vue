<template>
  <div
    class="word-lables-root-div tw-inline"
    v-if="labels"
  >
    <div
      class="tw-inline"
      v-if="labels && labels.length > 0"
    >
      <span
        v-for="(label, i) in labels"
        :key="label"
        class="word-label"
      >
        <nuxt-link
          :to="localePath(`/label/${label}`)"
          class="nuxt-link word-label-link"
        >{{label}}</nuxt-link>{{i === labels.length - 1 ? null : `,`}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: { labels: { type: Array } }
};
</script>

<style lang="sass" scoped>
.word-label
  @apply tw-italic tw-text-sm
  .word-label-link
    @apply tw-text-indigo-800 hover:tw-text-indigo-600 hover:tw-underline
</style>