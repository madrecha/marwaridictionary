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
      <template #title>Marwari-English Dictionary</template>
      <template #description>Browse Marwari-English Dictionary with {{ words.length }} Marwari words</template>

      <p class="tw-text-center tw-mt-3 md:tw-mt-5 tw-text-gray-800 tw-text-sm">
        {{ nouns.length }} nouns, {{ verbs.length }} verbs,
        {{ words.length - nouns.length - verbs.length }} others =
        {{ words.length }} words
      </p>

      <div class="tw-mt-1 tw-text-center">
        <div class="tw-flex tw-flex-wrap tw-justify-center tw-mx-auto tw-gap-4 md:tw-gap-8">
          <button
            @click="getWordsType('nouns')"
            v-ripple
            class="fos-button"
          >
            Nouns
          </button>
          <button
            @click="getWordsType('verbs')"
            v-ripple
            class="fos-button"
          >
            Verbs
          </button>
          <button
            @click="getWordsType('words')"
            v-ripple
            class="fos-button"
          >
            All words
          </button>
        </div>
        <p class="tw-text-center tw-mt-3 tw-text-sm tw-text-gray-800">
          showing {{ wordsToIterate.length }} {{ fosType }} of
          {{ words.length }} words
        </p>
      </div>
      <!-- <div class="tw-mx-auto tw-sticky tw-top-12" style="max-width: 15rem">
        <SearchWordsFull
          width="tw-w-full"
          class="tw-mt-3 tw-text-left"
        ></SearchWordsFull>
      </div> -->
      <section class="tw-mt-6 md:tw-mx-0 tw-p-1.5 tw-border-t tw-border-b tw-border-blue-300">
        <p class="tw-mt-1 tw-text-center">
          Sorted by <span class="tw-font-medium">{{ sortByItemText }}</span>
        </p>
        <div class="tw-my-2 tw-flex tw-justify-center tw-items-center tw-mx-auto tw-text-xs md:tw-text-sm tw-gap-4 md:tw-gap-8">
          <button
            @click.prevent="sortWordsBy('title')"
            class="sort-button"
          >
            मारवाड़ी ⇅
          </button>
          <button
            @click.prevent="sortWordsBy('transliteration')"
            class="sort-button"
          >
            english ⇅
          </button>
          <button
            @click.prevent="sortWordsBy('date')"
            class="sort-button"
          >
            date added ⇅
          </button>
          <button
            @click.prevent="sortWordsBy('updated')"
            class="sort-button"
          >
            updated ⇅
          </button>
        </div>
      </section>
      <ul class="!tw-pl-0 tw-list-none tw-mt-3 md:tw-py-3 tw-grid tw-grid-cols-3 md:tw-grid-cols-4 tw-mx-auto tw-max-w-screen-lg tw-gap-4 md:tw-gap-8">
        <li
          v-for="word in wordsToIterate"
          :key="word.slug"
          class="tw-border tw-rounded-xl tw-border-pink-800 tw-bg-gradient-to-br hover:tw-from-white tw-text-center tw-shadow-md hover:tw-shadow-2xl tw-transform hover:tw-scale-110 tw-transition-all"
          :class="
            word.grammar && word.grammar.noun
              ? 'hover:tw-to-pink-100'
              : word.grammar && word.grammar.verb
              ? 'hover:tw-to-green-100'
              : 'hover:tw-to-gray-100'
          "
        >
          <nuxt-link
            v-if="word.slugurl"
            :to="localePath(`/dictionary/marwari-english/${word.slugurl}`)"
            class="tw-inline-block sm:tw-flex tw-items-center tw-justify-center tw-text-lg tw-text-center"
          >
            <div class="sm:tw-w-1/2 tw-p-2 sm:tw-p-4 tw-rounded-xl tw-bg-gradient-to-br tw-from-white tw-to-pink-50 tw-text-blue-900 md:tw-text-xl tw-break-words md:tw-break-normal">
              {{ word.title ? word.title : word.slugurl }}
            </div>
            <div class="sm:tw-w-1/2">
              <div class="tw-text-sm tw-text-gray-500">
                {{word.transliteration }}
              </div>
              <!-- <div class="tw-text-sm">
                {{
                  require("@sanskrit-coders/sanscript").t(
                    word.url.title,
                    "devanagari",
                    "iast",
                    { skip_sgml: false, syncope: true }
                  )
                }}
              </div> -->
              <div
                v-if="word.grammar"
                :class="
                  word.grammar.noun
                    ? 'tw-text-pink-500'
                    : word.grammar.verb
                    ? 'tw-text-green-600'
                    : 'tw-text-gray-600'
                "
              >
                {{
                  word.grammar.noun
                    ? "noun"
                    : word.grammar.verb
                    ? "verb"
                    : "others"
                }}
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </article-layout>
  </div>

</template>

<script>
import ArticleLayout from "~/components/templates/ArticleLayout.vue";

export default {
  name: "BrowseIndexPage",
  components: { ArticleLayout },
  data() {
    return {
      words: [],
      wordsToIterate: [],
      nouns: [],
      verbs: [],
      fosType: "",
      sortByItemText: "updated (newest)",
      sortWordsByAsc: true
    };
  },
  async fetch() {
    this.words = await this.$content(`dictionary`, {
      deep: true
    })
      .where({
        $and: [
          { slug: { $ne: "AAA" } },
          { dir: `/dictionary/marwari-english` } // { dir: `/dictionary/${this.$route.params.dict}` }
        ]
      })
      .without(["body", "toc", "categories"])
      .sortBy("updatedAt", "desc")
      .fetch();

    this.wordsToIterate = this.words;

    this.nouns = this.words.filter(word => {
      if (word.grammar && word.grammar.noun) {
        for (let key in word.grammar) {
          return (key = "noun");
        }
      }
    });

    this.verbs = this.words.filter(word => {
      if (word.grammar && word.grammar.verb) {
        for (let key in word.grammar) {
          return (key = "verb");
        }
      }
    });
  },
  activated() {
    // Call fetch again if last fetch more than 15 min ago
    if (this.$fetchState.timestamp <= Date.now() - 1500000) {
      this.$fetch();
    }
  },
  methods: {
    getWordsType(fos) {
      this.wordsToIterate = this[fos];
      this.sortByItemText = "updated (newest)";
      this.fosType = fos;
    },

    sortWordsBy(item) {
      const _ = require("lodash");

      if (item === "title") {
        if (this.sortWordsByAsc === true) {
          this.wordsToIterate = _.sortBy(this.wordsToIterate, [
            word => {
              return word.title ? word.title : word.slugurl;
            }
          ]);
          this.sortByItemText = "Marwari (ज्ञ → अ)";
        }

        if (this.sortWordsByAsc === false) {
          this.wordsToIterate = _.reverse(
            _.sortBy(this.wordsToIterate, [
              word => {
                return word.title ? word.title : word.slugurl;
              }
            ])
          );
          this.sortByItemText = "Marwari (अ → ज्ञ)";
        }

        this.sortWordsByAsc = !this.sortWordsByAsc;
      }

      if (item === "transliteration") {
        if (this.sortWordsByAsc === true) {
          this.wordsToIterate = _.sortBy(this.wordsToIterate, [
            word => {
              return word.transliteration;
            }
          ]);
          this.sortByItemText = "transliteration (a → z)";
        }

        if (this.sortWordsByAsc === false) {
          this.wordsToIterate = _.reverse(
            _.sortBy(this.wordsToIterate, [
              word => {
                return word.transliteration;
              }
            ])
          );
          this.sortByItemText = "transliteration (z → a)";
        }
        this.sortWordsByAsc = !this.sortWordsByAsc;
      }

      if (item === "date") {
        if (this.sortWordsByAsc === true) {
          this.wordsToIterate = _.sortBy(this.wordsToIterate, [
            word => {
              return word.createdAt;
            }
          ]);
          this.sortByItemText = "date added (oldest)";
        }

        if (this.sortWordsByAsc === false) {
          this.wordsToIterate = _.reverse(
            _.sortBy(this.wordsToIterate, [
              word => {
                return word.createdAt;
              }
            ])
          );
          this.sortByItemText = "date added (newest)";
        }
        this.sortWordsByAsc = !this.sortWordsByAsc;
      }

      if (item === "updated") {
        if (this.sortWordsByAsc === true) {
          this.wordsToIterate = _.sortBy(this.wordsToIterate, [
            word => {
              return word.updatedAt;
            }
          ]);
          this.sortByItemText = "updated (oldest)";
        }

        if (this.sortWordsByAsc === false) {
          this.wordsToIterate = _.reverse(
            _.sortBy(this.wordsToIterate, [
              word => {
                return word.updatedAt;
              }
            ])
          );
          this.sortByItemText = "updated (newest)";
        }
        this.sortWordsByAsc = !this.sortWordsByAsc;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.fos-button
  @apply tw-p-2 tw-rounded tw-shadow-md tw-bg-pink-50 focus:tw-outline-none focus:tw-ring-1 hover:tw-bg-pink-500 hover:tw-text-white focus:tw-bg-pink-500 focus:tw-text-white

.sort-button
  @apply tw-p-1 md:tw-p-2 tw-text-sm md:tw-text-lg tw-rounded tw-shadow-md tw-bg-yellow-50 focus:tw-outline-none focus:tw-ring-1 hover:tw-bg-yellow-500 hover:tw-text-white focus:tw-bg-yellow-500 focus:tw-text-white
</style>
