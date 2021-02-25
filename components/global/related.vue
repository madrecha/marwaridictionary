<template>
  <ol>
    <li v-for="each_related in related" :key="each_related.rel">
      <span v-if="each_related.context" class="tw-text-sm"
        >({{ each_related.context }})</span
      >
      <nuxt-link
        :to="
          each_related.slugurl
            ? `/word/${each_related.slugurl}`
            : `/word/${each_related.rel}`
        "
      >
        {{ each_related.rel }}
      </nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    related: { type: Array, required: true },
    url: { type: Object, required: false },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>