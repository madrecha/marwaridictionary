<template>
  <div
    v-if="antonymsComputed"
    class="tw-mt-2  tw-ml-3"
  >
    <p
      v-if="head"
      class="tw-text-sm tw-text-gray-500"
    >Marwari <span class="tw-text-green-800 tw-text-sm tw-font-medium">Antonyms</span> of
      <span
        lang="mwr"
        class="tw-text-sm"
      >{{$route.params.slugurl}}</span>
    </p>
    <p
      class="tw-p-1.5 tw-border tw-border-gray-200"
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
    color: { type: Boolean, default: false },
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
span[lang="mwr-Latn"]
  @apply tw-text-gray-500 tw-italic tw-text-base
</style>