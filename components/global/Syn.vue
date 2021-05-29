<template>
  <div>
    <p v-if="url">Synonyms of {{ url.transliteration }} in Marwari</p>
    <ol>
      <li
        v-for="s in syn"
        :key="s.syn"
      >
        <span
          v-if="s.context"
          class="tw-text-sm"
        >({{ s.context }})</span>
        <nuxt-link :to="
            s.slugurl
              ? localePath(`/dictionary/${$route.params.dict}/${s.slugurl}`)
              : localePath(`/dictionary/${$route.params.dict}/${s.syn}`)
          ">
          {{ s.syn }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: { syn: Array, url: Object }
};
</script>
