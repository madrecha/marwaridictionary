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
      <div class="tw-text-center">
        <h1 class="tw-text-2xl tw-text-pink-900 tw-font-medium">
          <span
            class="tw-rounded-full tw-border tw-border-pink-800 tw-p-2 tw-shadow-md"
          >
            {{ words.length }}</span
          >
          Marwari words added till now
        </h1>
        <p class="tw-mt-3 tw-text-green-900">
          {{ nouns.length }} nouns, {{ verbs.length }} verbs,
          {{ words.length - nouns.length - verbs.length }} others =
          {{ words.length }} words
        </p>

        <!-- <p class="tw-mt-3 tw-text-gray-700">Ctrl + F to search the word</p> -->
        <div class="tw-mt-3">
          <div class="tw-flex tw-flex-wrap tw-justify-center tw-mx-auto">
            <button
              @click.prevent="getNouns()"
              class="tw-p-2 tw-m-2 tw-bg-blue-50 hover:tw-bg-pink-50"
            >
              Nouns
            </button>
            <button
              @click.prevent="getVerbs()"
              class="tw-p-2 tw-m-2 tw-bg-blue-50 hover:tw-bg-pink-50"
            >
              Verbs
            </button>
            <button
              @click.prevent="getAllWords()"
              class="tw-p-2 tw-m-2 tw-bg-blue-50 hover:tw-bg-pink-50"
            >
              All words
            </button>
          </div>
          <p>showing {{ wordsToIterate.length }} words</p>
        </div>
      </div>
      <div class="tw-mx-auto tw-sticky tw-top-12" style="max-width: 15rem">
        <SearchWordsFull
          width="tw-w-full"
          class="tw-mt-3 tw-text-left"
        ></SearchWordsFull>
      </div>
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
    };
  },
  async fetch() {
    this.words = await this.$content("words")
      .where({ slug: { $ne: "AAA" } })
      .without(["body", "toc", "categories"])
      .sortBy("createdAt", "desc")
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
    getNouns() {
      return (this.wordsToIterate = this.nouns);
    },
    getVerbs() {
      return (this.wordsToIterate = this.verbs);
    },
    getAllWords() {
      return (this.wordsToIterate = this.words);
    },
  },
};
</script>

