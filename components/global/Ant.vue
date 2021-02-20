<template>
  <div>
    <ol>
      <li v-for="a in ant" :key="a">
        <nuxt-link :to="`/word/${a}`">
          {{ a }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: { ant: Array },
};
</script>

<style lang="postcss" scoped>
</style>