<template>
  <div>
    <p v-if="url">Antonyms of {{ url.transliteration }} in Marwari</p>
    <ol>
      <li v-for="each_ant in ant" :key="each_ant.ant">
        <span v-if="each_ant.context" class="tw-text-sm"
          >({{ each_ant.context }})</span
        >
        <nuxt-link
          :to="
            each_ant.slugurl
              ? `/word/${each_ant.slugurl}`
              : `/word/${each_ant.ant}`
          "
        >
          {{ each_ant.ant }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: { ant: Array, url: Object },
};
</script>
