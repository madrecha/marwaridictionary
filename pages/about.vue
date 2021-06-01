<template>
  <div>
    <div
      v-if="$fetchState.pending"
      class="tw-my-48 tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium"
    >
      Fetching... 💖 Wait for a few seconds 😊

    </div>
    <div
      v-else-if="$fetchState.error"
      class="tw-my-48 tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium"
    >
      Error in Fetching... 👀
    </div>
    <article-layout v-else>
      <template #title>About Marwari Dictionary</template>

      <nuxt-content :document="page"></nuxt-content>
    </article-layout>
  </div>

</template>

<script>
export default {
  data() {
    return {
      page: null
    };
  },
  async fetch() {
    this.page = await this.$content(`${this.$i18n.locale}/about`).fetch();
  }
};
</script>
