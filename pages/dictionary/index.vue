<template>
  <div class="nuxt-content tw-max-w-screen-lg tw-mx-auto">
    <h1 class="tw-text-center tw-text-2xl tw-text-pink-900 tw-font-medium">Marwari Dictionary</h1>
    <section class="tw-flex tw-justify-evenly tw-items-center">

      <b-button
        class="tw-w-48 tw-h-48 tw-rounded-lg tw-border tw-border-gray-200 tw-bg-yellow-50 tw-flex tw-justify-center tw-items-center"
        :to="`/${$i18n.locale}/dictionary/word/`"
        tag="nuxt-link"
      >
        Words
      </b-button>
      <b-button
        class="tw-w-48 tw-h-48 tw-rounded-lg tw-border tw-border-gray-200 tw-bg-yellow-50 tw-flex tw-justify-center tw-items-center"
        :to="`/${$i18n.locale}/dictionary/topic/`"
        tag="nuxt-link"
      >
        Topics
      </b-button>
    </section>
    <article>
      <nuxt-content :document="post"></nuxt-content>
    </article>

  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: null,
      post: null
    };
  },
  async fetch() {
    this.posts = await this.$content(this.$i18n.locale)
      .where({
        slug: "dictionary"
      })
      .fetch();

    this.post = this.posts[0];
  }
};
</script>