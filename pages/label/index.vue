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
      <template #title>Marwari words categorized by Label (usage)</template>
      <template #description>Labels are used to categorize Marwari words by the manner and context in which they are used by speakers.</template>
      <div class="tags-list-div-wrapper nuxt-content">
        <ol class="tags-list tags-list__ol">
          <li
            v-for="label in uniquelabels"
            :key="label"
            class="tags-list__li"
          >
            <nuxt-link
              :to="localePath(`/label/${label}/`)"
              class="tags-list__li--link nuxt-link"
            >Marwari {{label}} words</nuxt-link>
          </li>
        </ol>
      </div>
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "~/components/templates/ArticleLayout.vue";

export default {
  name: "LabelIndexPage",
  components: { ArticleLayout },
  data() {
    return {
      labels: [],
      alllabels: [],
      uniquelabels: [],
      words: []
    };
  },
  async fetch() {
    // this.labels = await this.$content(this.$i18n.locale, { deep: true })
    //   .where({ dir: `/${this.$i18n.locale}/labels` })
    //   .fetch();

    // TODO: Now, only those labels are being fetched and displayed which have been mentioned in at least some word. So, currently, labels are NOT being fetched from /content/<locale>/labels folder. In future, when there are sufficient md files created of labels and sufficient words have been tagged with those labels, then change the code to fetch folder's labels instead of words' labels.

    this.words = await this.$content("dictionary/marwari-english") // currently, marwari-english dictionary has more words, so fetching it from there.
      .where({ slug: { $ne: "AAA" } })
      .without(["body", "toc"])
      .sortBy(["slug"])
      .fetch();

    for (const word of this.words) {
      if (word.labels && word.labels.length > 0) {
        for (const label of word.labels) {
          if (label !== null) {
            this.alllabels.push(label);
          }
        }
      }
    }

    this.uniquelabels = [...new Set(this.alllabels)];
    this.uniquelabels = this.uniquelabels.sort();
  }
};
</script>
