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
      <template #title>Marwari {{labelTitle}} words</template>
      <template #description>List of {{labelTitle}} words in Marwari language</template>
      <div class="tags-list-div-wrapper nuxt-content">
        <ol class="tags-list tags-list__ol">
          <li
            v-for="word in words"
            :key="word.slug"
            class="tags-list__li"
          >
            <nuxt-link
              :to="localePath(`/dictionary/marwari-english/${word.slugurl}/`)"
              class="tags-list__li--link"
            >
              {{word.slugurl}} <span class="tw-text-sm">{{word.transliteration}}</span>
            </nuxt-link>
          </li>
        </ol>
      </div>
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "~/components/templates/ArticleLayout.vue";

export default {
  name: "LabelPage",
  components: { ArticleLayout },
  data() {
    return {
      labels: [],
      words: []
    };
  },
  async fetch() {
    this.labels = await this.$content(`${this.$i18n.locale}/labels`)
      .where({ slug: this.labelParam })
      .fetch();

    this.words = await this.$content(`dictionary/marwari-english`)
      .where({ ["labels"]: { $contains: this.labelParam } })
      .fetch();
  },
  computed: {
    labelParam() {
      return this.$route.params.label;
    },
    label() {
      return this.labels.length > 0 ? this.labels[0] : this.labelParam;
    },
    labelTitle() {
      if (typeof this.label === "object") {
        return this.label.title ? this.label.title : this.label.slug;
      } else {
        return this.label;
      }
    },
    labelSlugurl() {
      if (typeof this.label === "object") {
        return this.label.slugurl ? this.label.slugurl : this.label.slug;
      } else {
        return this.label;
      }
    }
  }
};
</script>

<style lang="sass" src="~/assets/css/layout/article-tags-list.sass" scoped>
</style>