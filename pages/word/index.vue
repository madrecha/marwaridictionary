<template>
  <div>
    <div v-if="$fetchState.pending" class="tw-my-20">
      <p
        class="tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium"
      >
        Fetching words...💖 Wait for a few seconds 😊
      </p>
    </div>
    <div v-else>
      <div>
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
          <p class="tw-mt-3 tw-text-gray-700">Ctrl + F to search the word</p>
        </div>
        <ul
          class="tw-m-2 md:tw-py-3 tw-grid tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-3"
        >
          <li
            v-for="word in words"
            :key="word.slugurl"
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
              :to="`/word/${word.slugurl}`"
              class="sm:tw-flex tw-items-center tw-justify-center tw-text-lg tw-text-center"
            >
              <div
                class="sm:tw-w-1/2 tw-p-2 sm:tw-p-4 tw-rounded-xl tw-bg-yellow-50 tw-text-gray-600"
              >
                <b>{{ word.title }}</b>
              </div>
              <div class="sm:tw-w-1/2">
                <div class="tw-text-sm">
                  {{ word.transliteration }}
                </div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: [],
      nouns: [],
      verbs: [],
    };
  },
  async fetch() {
    this.words = await this.$content("words")
      .where({ slug: { $ne: "README" } })
      .without(["body", "toc"])
      .sortBy("transliteration")
      .fetch();

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
};
</script>

