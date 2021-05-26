<template>
  <article class="article-post">
    <header class="article-post_header">
      <h1 class="article-post_header--h1">Marwari words categorized by Label (usage)</h1>
    </header>
    <p>Labels are used to categorize Marwari words by the manner and context in which they are used by speakers.</p>
    <div class="tags-list-div-wrapper">
      <ol class="tags-list tags-list__ol">
        <li
          v-for="label in uniquelabels"
          :key="label"
          class="tags-list__li"
        >
          <nuxt-link
            :to="`/${$i18n.locale}/label/${label}/`"
            class="tags-list__li--link nuxt-link"
          >Marwari {{label}} words</nuxt-link>
        </li>
      </ol>
    </div>
    <word-example>
      <template #mwr>
        test
      </template>a
    </word-example>
  </article>
</template>

<script>
import WordExample from "~/components/word/WordExample.vue";
export default {
  name: "LabelIndexPage",
  components: { WordExample },
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

<style lang="sass" src="~/assets/css/layout/article-heading.sass" scoped>
</style>

<style lang="sass" src="~/assets/css/layout/article-tags-list.sass" scoped>
</style>