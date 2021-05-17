<template>
  <div
    v-if="synonymsComputed"
    class="tw-mt-2"
  >
    <p
      v-if="head"
      class="tw-text-base tw-text-gray-500"
    >Marwari Synonyms of
      <span lang="mwr">{{$route.params.slugurl}}</span>
    </p>
    <p
      class="tw-p-2  tw-border tw-border-gray-200"
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
    color: { type: Boolean, default: true },
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
</style>