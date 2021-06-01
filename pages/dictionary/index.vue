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
      <template
        #title
        v-if="post"
      >
        {{post.title}}
      </template>
      <template
        #description
        v-if="post"
      >
        {{post.description}}
      </template>
      <nuxt-content
        :document="post"
        v-if="post"
      ></nuxt-content>
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "~/components/templates/ArticleLayout.vue";

export default {
  name: "DictionaryIndexPage",
  components: { ArticleLayout },
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