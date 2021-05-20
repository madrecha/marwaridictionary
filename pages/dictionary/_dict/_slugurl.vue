<template>
  <div class="">
    <div
      v-if="$fetchState.pending"
      class="tw-min-h-screen tw-my-48"
    >
      <p class="tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium">
        Fetching word...💖 Wait for a few seconds 😊
      </p>
    </div>
    <div
      v-else-if="$fetchState.error"
      class="tw-my-20"
    >
      <p class="tw-text-3xl tw-font-medium tw-p-4 tw-text-center">
        Error in Fetching
      </p>
    </div>
    <div v-else>
      <!-- <aside class="tw-hidden md:tw-block md:tw-w-1/6 md:tw-bg-gray-50">
        <div class="tw-sticky tw-top-12">hello</div>
      </aside> -->
      <article class="article-post">
        <div class="tw-text-center">
          <header class="article-post_header">
            <h1 class="article-post_header--h1">
              Marwari meaning of {{ word.title ? word.title :  word.slugurl }}
              {{ word.transliteration }}
            </h1>
            <p class="article-post_header--description !tw-text-base tw-text-gray-500 tw-lowercase">
              {{seoKeywords}}
            </p>
          </header>
          <div>
            <wordDate :word="word"></wordDate>
          </div>
          <div class="tw-text-sm tw-mt-2">
            by <a
              :href="word.author && word.author.url ? word.author.url : `https://instagram.com/ManasMadrecha`"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-border-b tw-py-1 tw-border-pink-500"
            >
              {{word.author ? word.author : `CA ${$t("default_author")} 😊`}}
            </a>
          </div>
        </div>
        <wordTOC
          :word="word"
          class="tw-mt-5 tw-max-w-xs tw-mx-auto"
        ></wordTOC>
        <div class="tw-mt-4 tw-mx-0.5 lg:tw-mx-4 lg:tw-px-6 lg:tw-py-3 tw-border-t tw-border-b tw-border-pink-300">
          <!-- <div class="tw-mx-auto tw-text-center">
            <ReadingTime :word="word"></ReadingTime>
          </div> -->

          <NuxtContent :document="word"></NuxtContent>
          <MaintenanceCategories :word="word"></MaintenanceCategories>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import wordDate from "~/components/templates/post/wordDate.vue";
import wordTOC from "~/components/templates/post/wordTOC.vue";
import MaintenanceCategories from "~/components/templates/post/MaintenanceCategories.vue";

import WordMeanings from "~/components/word/WordMeanings";
import WordExample from "~/components/word/WordExample";
import WordAntonyms from "~/components/word/WordAntonyms";
import WordSynonyms from "~/components/word/WordSynonyms";

// import noun from "~/components/grammar/noun.vue";

export default {
  components: {
    wordDate,
    wordTOC,
    MaintenanceCategories,
    "word-meanings": WordMeanings,
    // Word Examples
    "word-eg": WordExample,
    "word-ex": WordExample,
    "word-example": WordExample,
    // Shortcuts
    "w-eg": WordExample,
    "w-ex": WordExample,
    "w-example": WordExample,
    "word-antonyms": WordAntonyms,
    "word-ants": WordAntonyms,
    "w-ants": WordAntonyms,
    "word-synonyms": WordSynonyms,
    "word-syns": WordSynonyms,
    "w-syns": WordSynonyms
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
    // let frontYaml = {
    //   slugurl: this.word.url.slugurl ?? this.word.slugurl,
    //   title: this.word.url.title ?? this.word.title,
    //   transliteration:
    //     this.word.url.transliteration ?? this.word.transliteration
    // };

    // this.word = { ...this.word, frontYaml };

    // let currentword = this.words[0];

    // const readingTime = require("reading-time");
    // return (this.words_in_post = readingTime(currentword.meanings[0].meaning));
  },

  activated() {
    // Call fetch again if last fetch more than 9 min ago
    if (this.$fetchState.timestamp <= Date.now() - 1500000) {
      this.$fetch();
    }
  },
  computed: {
    seoKeywords() {
      if (this.word) {
        return `${
          this.word.title ? this.word.title : this.word.slugurl
        } का मारवाड़ी अर्थ,
            ${this.word.transliteration} Marwari meaning,
            ${this.word.transliteration} ka Marwari arth, meaning of
            ${this.word.transliteration} in Marwari, ${
          this.word.title ? this.word.title : this.word.slugurl
        } का
            मारवाड़ी भाषा में अर्थ, ${
              this.word.title ? this.word.title : this.word.slugurl
            } का मेवाड़ी अर्थ,
            ${
              this.word.title ? this.word.title : this.word.slugurl
            } का मेवाड़ी भाषा में अर्थ,
            ${this.word.transliteration} ka Mewari arth,
            ${
              this.word.title ? this.word.title : this.word.slugurl
            } ka Mewari bhasha mein arth,
            ${this.word.transliteration} का मेवाड़ी अर्थ`;
      }
    }
  },
  head() {
    const website = "https://marwari.info";
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
        ],
        link: [
          {
            hid: "canonical",
            rel: "canonical",
            href: this.$route.path.endsWith("/")
              ? `${website}/${this.$route.path}`
              : `${website}/${this.$route.path}/`
          }
        ]
      };
    }
  }
};
</script>