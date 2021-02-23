<template>
  <div>
    <p v-if="url">Synonyms of {{ url.transliteration }} in Marwari</p>
    <ol>
      <li v-for="each_syn in syn" :key="each_syn.syn">
        <span v-if="each_syn.context" class="tw-text-sm"
          >({{ each_syn.context }})</span
        >
        <nuxt-link
          :to="
            each_syn.slugurl
              ? `/word/${each_syn.slugurl}`
              : `/word/${each_syn.syn}`
          "
        >
          {{ each_syn.syn }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: { syn: Array, url: Object },
};
</script>
