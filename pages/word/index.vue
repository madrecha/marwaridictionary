<template>
  <div class="tw-mt-3">
    <div v-if="$fetchState.pending" class="tw-my-20">
      <p
        class="tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium"
      >
        Fetching words...💖 Wait for a few seconds 😊
      </p>
    </div>
    <div v-else>
      <h1 class="tw-text-center tw-text-2xl">
        {{ words.length }} Marwari words added till now
      </h1>
      <div class="tw-mt-3">
        <p class="tw-text-center">
          {{ nouns.length }} nouns, {{ verbs.length }} verbs,
          {{ words.length - nouns.length - verbs.length }} others =
          {{ words.length }} words
        </p>
        <ul class="tw-mt-3 tw-flex tw-flex-wrap">
          <li
            v-for="word in words"
            :key="word.slugurl"
            class="tw-m-2 hover:tw-bg-blue-50 tw-text-center"
          >
            <nuxt-link
              :to="`/word/${word.title}`"
              class="tw-py-2 tw-text-lg tw-text-center"
            >
              {{ word.title }}<br /><span class="tw-text-sm">
                {{ word.transliteration }} <br />
                <span
                  v-if="word.grammar"
                  :class="
                    word.grammar.noun
                      ? 'tw-text-pink-500'
                      : word.grammar.verb
                      ? 'tw-text-blue-500'
                      : 'tw-text-gray-500'
                  "
                  >{{
                    word.grammar.noun
                      ? "noun"
                      : word.grammar.verb
                      ? "verb"
                      : "others"
                  }}</span
                >
              </span>
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
      //   .where({ slugurl: this.$route.params.slugurl })
      .sortBy("title")
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

