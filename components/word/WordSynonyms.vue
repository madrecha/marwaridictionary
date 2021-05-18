<template>
  <div
    v-if="synonymsComputed"
    class="tw-mt-2 tw-ml-3"
  >
    <p
      v-if="head"
      class="tw-text-sm tw-text-gray-500"
    >Marwari <span class="tw-text-green-800 tw-text-sm tw-font-medium">Synonyms</span> of
      <span
        lang="mwr"
        class="tw-text-sm"
      >{{$route.params.slugurl}}</span>
    </p>
    <p
      class="tw-p-1.5  tw-border tw-border-gray-200"
      :class="{'tw-bg-green-50': color}"
    >
      <span
        v-for="synonym in synonymsComputed"
        :key="synonym"
        lang="mwr-Deva"
      >
        <nuxt-link :to="`/${$i18n.locale}/dictionary/word/${synonym}/`">
          {{ synonym }}
        </nuxt-link>
        <span lang="mwr-Latn">({{
          require("@sanskrit-coders/sanscript").t(
            synonym,
            "devanagari",
            "iast"
          )
        }})</span>, &nbsp;
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    synonyms: { type: Array },
    syns: { type: Array },
    color: { type: Boolean, default: false },
    head: { type: Boolean, default: true }
  },
  data() {
    return {};
  },
  computed: {
    synonymsComputed() {
      if (this.synonyms && !this.syns) {
        return this.synonyms;
      }
      if (!this.synonyms && this.syns) {
        return this.syns;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
span[lang="mwr-Latn"]
  @apply tw-text-gray-500 tw-italic tw-text-base
</style>