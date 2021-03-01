<template>
  <div class="tw-relative">
    <div>
      <input
        id="search-word-input"
        v-model="query"
        type="search"
        autocomplete="off"
        placeholder="Search..."
        class="tw-border tw-rounded-xl tw-shadow focus:tw-outline-none focus:tw-ring-2 tw-py-1 tw-px-3"
        :class="width"
      />
    </div>
    <div
      class="tw-mt-3 tw-max-w-3xl tw-mx-auto tw-absolute tw-top-6 tw-left-0 tw-right-0"
    >
      <ol
        v-if="wordsToIterate.length"
        class="tw-list-decimal tw-list-inside tw-bg-gradient-to-br tw-from-white tw-to-pink-50 tw-rounded tw-p-2"
      >
        <li
          v-for="word of wordsToIterate"
          :key="word.slug"
          @click.prevent="clearInput()"
        >
          <NuxtLink :to="`/word/${word.url.slugurl}`">
            {{ word.url.title }} ({{ word.url.transliteration }})
          </NuxtLink>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: { width: { type: String, default: "tw-w-2/3" } },
  data() {
    return {
      words: [],
      wordsToIterate: [],
      query: "",
    };
  },
  watch: {
    async query(query) {
      const _ = require("lodash");

      if (!query) {
        this.wordsToIterate = [];
        return;
      }

      this.words = await this.$content("words")
        .without(["body", "toc"])
        .fetch();

      let toReturnSomethingTrue;

      this.wordsToIterate = this.words.filter((word) => {
        let a1, a2, a3, a4;
        let b, c, d, e, f, g, h, i, j, k, l, m;
        let tc, hi, hi_trans, mr, mr_trans, gu, gu_trans;

        // Below is to Search URL

        if (word.url) {
          a1 = word.url.title.toLowerCase().includes(query);
          a2 = word.url.transliteration.toLowerCase().includes(query);
          a3 = word.url.slugurl.toLowerCase().includes(query);

          if (word.url.alt_trans && word.url.alt_trans.length > 0) {
            for (const item of word.url.alt_trans) {
              a4 = item.toLowerCase().includes(query);
            }
          }
        }

        // Below is to Search Meanings. Meanings is an Array of objects.
        // It can be 'meanings', 'meaning', 'meanings_noun', 'meanings_verb', etc.

        if (word.meanings && word.meanings.length > 0) {
          for (const mean of word.meanings) {
            if (
              (mean.meaning && typeof mean.meaning === "string") ||
              typeof mean.meaning === "number"
            ) {
              c = mean.meaning.toLowerCase().includes(query);
            }
          }
        }

        if (word.meaning && word.meaning.length > 0) {
          for (const mean of word.meaning) {
            if (
              (mean.meaning && typeof mean.meaning === "string") ||
              typeof mean.meaning === "number"
            ) {
              d = mean.meaning.toLowerCase().includes(query);
            }
          }
        }

        if (word.meanings_noun && word.meanings_noun.length > 0) {
          for (const mean of word.meanings_noun) {
            if (
              (mean.meaning && typeof mean.meaning === "string") ||
              typeof mean.meaning === "number"
            ) {
              e = mean.meaning.toLowerCase().includes(query);
            }
          }
        }

        if (word.meanings_verb && word.meanings_verb.length > 0) {
          for (const mean of word.meanings_verb) {
            if (
              (mean.meaning && typeof mean.meaning === "string") ||
              typeof mean.meaning === "number"
            ) {
              f = mean.meaning.toLowerCase().includes(query);
            }
          }
        }

        // Search Translations
        if (word.translations && word.translations.length > 0) {
          for (const trans of word.translations) {
            if (trans.context && typeof trans.context === "string") {
              tc = trans.context.toLowerCase().includes(query);
            }
            if (trans.hi && typeof trans.hi === "string") {
              hi = trans.hi.toLowerCase().includes(query);
            }
            if (trans.hi_trans && typeof trans.hi_trans === "string") {
              hi_trans = trans.hi_trans.toLowerCase().includes(query);
            }
            if (trans.mr && typeof trans.mr === "string") {
              mr = trans.mr.toLowerCase().includes(query);
            }
            if (trans.mr_trans && typeof trans.mr_trans === "string") {
              mr_trans = trans.mr_trans.toLowerCase().includes(query);
            }
            if (trans.gj && typeof trans.gj === "string") {
              gu = trans.gj.toLowerCase().includes(query);
            }
            if (trans.gj_trans && typeof trans.gj_trans === "string") {
              gu_trans = trans.gj_trans.toLowerCase().includes(query);
            }
          }
        }

        // Return something as true, because Filter works only then.
        return (toReturnSomethingTrue =
          a1 ||
          a2 ||
          a3 ||
          a4 ||
          c ||
          d ||
          e ||
          tc ||
          hi ||
          hi_trans ||
          mr ||
          mr_trans ||
          gu ||
          gu_trans);
      });

      // Show only 10 words even if the Array had hundreds of words to begin with
      this.wordsToIterate = _.take(this.wordsToIterate, 10);
    },
  },
  methods: {
    // To clear the Search on clicking the link
    clearInput() {
      this.wordsToIterate = [];
      // document.getElementById("search-word-input").value = "";
      this.query = "";
      return;
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>