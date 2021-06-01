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
      <!-- <aside class="tw-hidden md:tw-block md:tw-w-1/6 md:tw-bg-gray-50">
        <div class="tw-sticky tw-top-12">hello</div>
      </aside> -->
      <template #title>
        {{$t('word.h1', {word: wordWithTransliteration})}}
      </template>
      <!-- Marwari meaning of {{ word.title ? word.title :  word.slugurl }}
              {{ word.transliteration }} -->

      <p class="tw-max-w-max tw-mx-auto !tw-text-xs md:!tw-text-sm tw-text-gray-500 tw-lowercase !tw-leading-relaxed md:!tw-leading-relaxed">
        {{seoKeywords}}
      </p>
      <div>
        <wordDate :word="word"></wordDate>
        <!-- <div class="tw-text-sm tw-mt-2">
            by <a
              :href="word.author && word.author.url ? word.author.url : `https://instagram.com/ManasMadrecha`"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-border-b tw-py-1 tw-border-pink-500"
            >
              {{word.author ? word.author : `CA ${$t("default_author")} 😊`}}
            </a>
          </div> -->
        <!-- <wordTOC
          :word="word"
          class="tw-mt-5 tw-max-w-xs tw-mx-auto"
        ></wordTOC> -->
        <!-- <div class="tw-mx-auto tw-text-center">
            <ReadingTime :word="word"></ReadingTime>
          </div> -->
      </div>
      <main>
        <nuxt-content
          :document="word"
          class="nuxt-content--word tw-max-w-screen-lg tw-mx-auto"
        ></nuxt-content>
      </main>
      <footer class="tw-max-w-screen-lg tw-mx-auto">
        <MaintenanceCategories :word="word"></MaintenanceCategories>
      </footer>
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "~/components/templates/ArticleLayout";

import wordDate from "~/components/templates/post/wordDate.vue";
import wordTOC from "~/components/templates/post/wordTOC.vue";
import MaintenanceCategories from "~/components/templates/post/MaintenanceCategories.vue";

import WordMeanings from "~/components/word/WordMeanings";
import WordExamples from "~/components/word/WordExamples";
import WordExample from "~/components/word/WordExample";
import WordAntonyms from "~/components/word/WordAntonyms";
import WordSynonyms from "~/components/word/WordSynonyms";
import WordPos from "~/components/word/WordPos";
import WordLabels from "~/components/word/WordLabels";
import WordQualifier from "~/components/word/WordQualifier";

// import noun from "~/components/grammar/noun.vue";

export default {
  name: "DictSlugurlPage",
  components: {
    ArticleLayout,
    // Words related:
    wordDate,
    wordTOC,
    MaintenanceCategories,
    // Word Pos, e.g. lemma, non-lemma forms
    "word-pos": WordPos,
    "w-pos": WordPos,
    "word-meanings": WordMeanings,
    "w-meanings": WordMeanings,
    // Word Examples
    "word-examples": WordExamples,
    "word-egs": WordExamples,
    "word-exs": WordExamples,
    "w-examples": WordExamples,
    "w-egs": WordExamples,
    "w-exs": WordExamples,
    // Word Example
    "word-example": WordExample,
    "word-eg": WordExample,
    "word-ex": WordExample,
    "w-eg": WordExample,
    "w-ex": WordExample,
    "w-example": WordExample,
    // Word Antnonyms and Word Synonyms
    "word-antonyms": WordAntonyms,
    "word-ants": WordAntonyms,
    "w-ants": WordAntonyms,
    "word-synonyms": WordSynonyms,
    "word-syns": WordSynonyms,
    "w-syns": WordSynonyms,
    // Word Labels
    "word-labels": WordLabels,
    "word-label": WordLabels,
    "w-label": WordLabels,
    "w-labels": WordLabels,
    "w-l": WordLabels,
    // Word Qualifier
    "word-qualifer": WordQualifier,
    "w-qualifier": WordQualifier,
    "w-q": WordQualifier
  },
  data() {
    return {
      words: [],
      word: null
    };
  },
  async fetch() {
    this.words = await this.$content(`dictionary`, {
      deep: true
    })
      .where({
        $and: [
          { slug: { $ne: "AAA" } },
          { slugurl: this.$route.params.slugurl },
          { dir: `/dictionary/${this.$route.params.dict}` }
        ]
      })
      .fetch();

    this.word = this.words[0];

    // https://github.com/nuxt/content/issues/381
    // let frontYaml = {
    //   slugurl: this.word.url.slugurl ?? this.word.slugurl,
    //   title: this.word.url.title ?? this.word.title,
    //   transliteration:
    //     this.word.url.transliteration ?? this.word.transliteration
    // };

    // let currentword = this.words[0];

    // const readingTime = require("reading-time");
    // return (this.words_in_post = readingTime(currentword.meanings[0].meaning));
  },

  activated() {
    // Call fetch again if last fetch more than 9 min ago
    if (this.$fetchState.timestamp <= Date.now() - 900000) {
      this.$fetch();
    }
  },
  computed: {
    wordWithTransliteration() {
      if (this.word) {
        let w = this.word.title ? this.word.title : this.word.slugurl;
        let t = this.word.transliteration;
        return w + " " + t;
      }
    },
    seoKeywords() {
      if (this.word) {
        let title = this.word.title ? this.word.title : this.word.slugurl;
        let trans = this.word?.transliteration ?? null;
        return `${title} का मारवाड़ी अर्थ, ${trans} Marwari meaning, define ${trans} in Marwari, ${trans} ka Marwari arth, meaning of ${trans} in Marwari, ${title} का मारवाड़ी भाषा में अर्थ, ${title} का मेवाड़ी अर्थ, ${title} का मेवाड़ी भाषा में अर्थ, ${trans} ka Mewari arth, ${title} ka Mewari bhasha mein arth, ${trans} का मेवाड़ी अर्थ`;
      }
    }
  },
  head() {
    if (this.word && this.$route) {
      return {
        title: `Marwari meaning of ${
          this.word.title
            ? `${this.word.title} ${this.word.transliteration}`
            : `${this.word.slugurl} ${this.word.transliteration}`
        }`,
        titleTemplate: "%s - Marwari Dictionary",
        htmlAttrs: {
          lang: this.$i18n.locale
        },
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.word.description ?? this.seoKeywords
          },
          // Open Graph
          { hid: "og:title", property: "og:title", content: this.word.title },
          {
            hid: "og:description",
            property: "og:description",
            content: this.word.description ?? this.seoKeywords
          },
          // Twitter Card
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: this.word.title
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: this.word.description ?? this.seoKeywords
          }
        ]
      };
    }
  }
};
</script>

<style lang="sass">
.word-component-collapse-icon
  @apply tw-text-2xl
// Note: This applies globally, because scoped style will not get passed to the word components.
// TODO: So, later shift this to individual word components
</style>