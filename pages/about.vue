<template>
  <div>
    <h1
      class="tw-text-3xl tw-text-center tw-bg-blue-50 tw-text-pink-900 tw-p-3"
    >
      About Marwari Dictionary
    </h1>
    <NuxtContent :document="page"></NuxtContent>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: null,
    };
  },
  async fetch() {
    this.page = await this.$content("about").fetch();
  },
};
</script>
