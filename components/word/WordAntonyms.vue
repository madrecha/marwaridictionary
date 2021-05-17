<template>
  <div
    v-if="antonymsComputed"
    class="tw-mt-2"
  >
    <p
      v-if="head"
      class="tw-text-base tw-text-gray-500"
    >Marwari Antonyms of
      <span lang="mwr">{{$route.params.slugurl}}</span>
    </p>
    <p
      class="tw-p-2 tw-border tw-border-gray-200"
      :class="{'tw-bg-red-50': color}"
    >
      <span
        v-for="antonym in antonymsComputed"
        :key="antonym"
        lang="mwr-Deva"
      >
        <nuxt-link :to="`/${$i18n.locale}/dictionary/word/${antonym}/`">
          {{ antonym }}
        </nuxt-link>
        <span lang="mwr-Latn">({{
          require("@sanskrit-coders/sanscript").t(
            antonym,
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
    antonyms: { type: Array },
    ants: { type: Array },
    color: { type: Boolean, default: true },
    head: { type: Boolean, default: true }
  },
  data() {
    return {};
  },
  computed: {
    antonymsComputed() {
      if (this.antonyms && !this.ants) {
        return this.antonyms;
      }
      if (!this.antonyms && this.ants) {
        return this.ants;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
</style>