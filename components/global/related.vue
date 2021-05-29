<template>
  <ol>
    <li
      v-for="r in related"
      :key="r.rel"
    >
      <span
        v-if="r.context"
        class="tw-text-sm"
      >({{ r.context }})</span>
      <nuxt-link :to="
          r.slugurl
            ? localePath(`/dictionary/${$route.params.dict}/${r.slugurl}`)
            : localePath(`/dictionary/${$route.params.dict}/${r.rel}`)
        ">
        {{ r.rel }}
      </nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    related: { type: Array, required: true },
    url: { type: Object, required: false }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>