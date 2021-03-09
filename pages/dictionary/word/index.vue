<template>
  <div>
    <article v-if="$fetchState.pending" class="tw-min-h-screen tw-my-48">
      <p
        class="tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium"
      >
        Fetching words...💖 Wait for a few seconds 😊
      </p>
    </article>
    <article>
      <section class="tw-text-center">
        <h1 class="tw-text-2xl tw-text-pink-900 tw-font-medium">
          <span
            class="tw-rounded-full tw-border tw-border-pink-800 tw-p-2 tw-shadow-md"
          >
            {{ words.length }}</span
          >
          Marwari words added till now
        </h1>
        <p class="tw-mt-1 tw-text-gray-800 tw-text-sm">
          {{ nouns.length }} nouns, {{ verbs.length }} verbs,
          {{ words.length - nouns.length - verbs.length }} others =
          {{ words.length }} words
        </p>

        <!-- <p class="tw-mt-3 tw-text-gray-700">Ctrl + F to search the word</p> -->
        <div class="tw-mt-2">
          <div class="tw-flex tw-flex-wrap tw-justify-center tw-mx-auto">
            <button @click.prevent="getWordsType('nouns')" class="fos-button">
              Nouns
            </button>
            <button @click.prevent="getWordsType('verbs')" class="fos-button">
              Verbs
            </button>
            <button @click.prevent="getWordsType('words')" class="fos-button">
              All words
            </button>
          </div>
          <p class="tw-text-sm tw-text-gray-800">
            showing {{ wordsToIterate.length }} {{ fosType }} of
            {{ words.length }} words
          </p>
        </div>
      </section>
      <!-- <div class="tw-mx-auto tw-sticky tw-top-12" style="max-width: 15rem">
        <SearchWordsFull
          width="tw-w-full"
          class="tw-mt-3 tw-text-left"
        ></SearchWordsFull>
      </div> -->
      <section
        class="tw-mt-3 tw-p-2 tw-border-t tw-border-b tw-border-blue-300"
      >
        <p class="tw-text-center">
          Sorted by <span class="tw-font-medium">{{ sortByItemText }}</span>
        </p>
        <div
          class="tw-flex tw-flex-wrap tw-justify-center tw-mx-auto tw-text-sm"
        >
          <button @click.prevent="sortWordsBy('title')" class="sort-button">
            मारवाड़ी ⇅
          </button>
          <button
            @click.prevent="sortWordsBy('transliteration')"
            class="sort-button"
          >
            english ⇅
          </button>
          <button @click.prevent="sortWordsBy('date')" class="sort-button">
            date ⇅
          </button>
          <button @click.prevent="sortWordsBy('updated')" class="sort-button">
            updated ⇅
          </button>
        </div>
      </section>
      <ul
        class="tw-list-none tw-m-2 md:tw-py-3 tw-grid tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-3"
      >
        <li
          v-for="word in wordsToIterate"
          :key="word.slug"
          class="tw-m-2 tw-border tw-rounded-xl tw-border-pink-800 tw-bg-gradient-to-br hover:tw-from-white tw-text-center"
          :class="
            word.grammar && word.grammar.noun
              ? 'hover:tw-to-pink-100'
              : word.grammar && word.grammar.verb
              ? 'hover:tw-to-blue-100'
              : 'hover:tw-to-gray-100'
          "
        >
          <nuxt-link
            v-if="word.url && word.url.slugurl"
            :to="`/dictionary/word/${word.url.slugurl}`"
            class="sm:tw-flex tw-items-center tw-justify-center tw-text-lg tw-text-center"
          >
            <div
              class="sm:tw-w-1/2 tw-p-2 sm:tw-p-4 tw-rounded-xl tw-bg-gradient-to-br tw-from-white tw-to-pink-50 tw-text-blue-900 md:tw-text-xl"
            >
              {{ word.url.title }}
            </div>
            <div class="sm:tw-w-1/2">
              <div class="tw-text-sm">
                {{ word.url.transliteration }}
              </div>
              <!-- <div class="tw-text-sm">
                {{
                  require("@sanskrit-coders/sanscript").t(
                    word.url.title,
                    "devanagari",
                    "velthuis",
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
                    ? 'tw-text-blue-500'
                    : 'tw-text-gray-500'
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
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: [],
      wordsToIterate: [],
      nouns: [],
      verbs: [],
      fosType: "",
      sortByItemText: "updated (newest)",
      sortWordsByAsc: true,
    };
  },
  async fetch() {
    this.words = await this.$content("words")
      .where({ slug: { $ne: "AAA" } })
      .without(["body", "toc", "categories"])
      .sortBy("updatedAt", "desc")
      .fetch();

    this.wordsToIterate = this.words;

    this.nouns = this.words.filter((word) => {
      if (word.grammar && word.grammar.noun) {
        for (let key in word.grammar) {
          return (key = "noun");
        }
      }
    });

    this.verbs = this.words.filter((word) => {
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
            (word) => {
              return word.url.title;
            },
          ]);
          this.sortByItemText = "Marwari (ज्ञ → अ)";
        }

        if (this.sortWordsByAsc === false) {
          this.wordsToIterate = _.reverse(
            _.sortBy(this.wordsToIterate, [
              (word) => {
                return word.url.title;
              },
            ])
          );
          this.sortByItemText = "Marwari (अ → ज्ञ)";
        }

        this.sortWordsByAsc = !this.sortWordsByAsc;
      }

      if (item === "transliteration") {
        if (this.sortWordsByAsc === true) {
          this.wordsToIterate = _.sortBy(this.wordsToIterate, [
            (word) => {
              return word.url.transliteration;
            },
          ]);
          this.sortByItemText = "transliteration (a → z)";
        }

        if (this.sortWordsByAsc === false) {
          this.wordsToIterate = _.reverse(
            _.sortBy(this.wordsToIterate, [
              (word) => {
                return word.url.transliteration;
              },
            ])
          );
          this.sortByItemText = "transliteration (z → a)";
        }
        this.sortWordsByAsc = !this.sortWordsByAsc;
      }

      if (item === "date") {
        if (this.sortWordsByAsc === true) {
          this.wordsToIterate = _.sortBy(this.wordsToIterate, [
            (word) => {
              return word.createdAt;
            },
          ]);
          this.sortByItemText = "date added (oldest)";
        }

        if (this.sortWordsByAsc === false) {
          this.wordsToIterate = _.reverse(
            _.sortBy(this.wordsToIterate, [
              (word) => {
                return word.createdAt;
              },
            ])
          );
          this.sortByItemText = "date added (newest)";
        }
        this.sortWordsByAsc = !this.sortWordsByAsc;
      }

      if (item === "updated") {
        if (this.sortWordsByAsc === true) {
          this.wordsToIterate = _.sortBy(this.wordsToIterate, [
            (word) => {
              return word.updatedAt;
            },
          ]);
          this.sortByItemText = "updated (oldest)";
        }

        if (this.sortWordsByAsc === false) {
          this.wordsToIterate = _.reverse(
            _.sortBy(this.wordsToIterate, [
              (word) => {
                return word.updatedAt;
              },
            ])
          );
          this.sortByItemText = "updated (newest)";
        }
        this.sortWordsByAsc = !this.sortWordsByAsc;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.fos-button {
  @apply tw-p-2 tw-m-2 tw-rounded-md tw-bg-blue-50 hover:tw-bg-pink-50 focus:tw-outline-none focus:tw-bg-pink-50 focus:tw-ring-1 focus:tw-ring-pink-500 focus:tw-text-pink-800;
}
.sort-button {
  @apply tw-p-1.5 tw-m-2 tw-rounded-md tw-bg-yellow-50 hover:tw-bg-green-50 focus:tw-outline-none focus:tw-bg-green-50 focus:tw-ring-1 focus:tw-ring-green-500 focus:tw-text-green-800;
}
</style>

