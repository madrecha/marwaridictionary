<template>
  <div>
    <p v-if="url">Antonyms of {{ url.transliteration }} in Marwari</p>
    <ol>
      <li
        v-for="a in ant"
        :key="a.ant"
      >
        <span
          v-if="a.context"
          class="tw-text-sm"
        >({{ a.context }})</span>
        <nuxt-link :to="
            a.slugurl
              ? localePath(`/dictionary/word/${a.slugurl}`)
              : localePath(`/dictionary/word/${a.ant}`)
          ">
          {{ a.ant }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: { ant: Array, url: Object }
};
</script>
