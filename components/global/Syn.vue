<template>
  <div>
    <ol>
      <li v-for="s in syn" :key="s">
        <nuxt-link :to="`/word/${s}`">
          {{ s }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: { syn: Array },
};
</script>
