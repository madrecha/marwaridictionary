<template>
  <article class="article-post">
    <header class="article-post_header">
      <h1 class="article-post_header--h1">About Marwari Dictionary</h1>
    </header>
    <div class="tw-max-w-screen-lg tw-mx-auto">

      <NuxtContent :document="page"></NuxtContent>
    </div>
  </article>
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

<style lang="sass" src="~/assets/css/layout/article-heading.sass" scoped>
</style>

<style lang="sass" src="~/assets/css/all.sass" scoped>
</style>
