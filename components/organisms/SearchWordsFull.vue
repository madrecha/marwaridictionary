<template>
  <div class="tw-relative">
    <div>
      <input
        autofocus
        v-model="query"
        type="text"
        autocomplete="off"
        placeholder="Search..."
        class="tw-border tw-rounded-xl tw-shadow focus:tw-outline-none focus:tw-ring-2 tw-py-1 tw-px-3"
        :class="width"
        @click.prevent="showSearchHelp = true"
        @keyup.esc="clearInput()"
      />
      <!-- @mouseover="showSearchHelp = true"
        @mouseleave="showSearchHelp = false" -->
    </div>
    <div
      class="tw-absolute tw-top-10 tw-left-0 tw-right-0 tw-flex tw-flex-wrap tw-bg-yellow-50 tw-p-1 tw-rounded tw-shadow"
      :class="!showSearchHelp ? 'tw-hidden' : 'tw-block'"
    >
      <div class="tw-relative">
        <div>
          <p class="tw-py tw-pl-1 tw-pr-4 tw-text-xs">
            Search word (in English or Devanagari) or TOPIC...
            <br />
            <span class="tw-text-xs">E.g. → विंदणी, vindani, person</span>
            <br />
            <span class="tw-text-xs">E.g. → कुत्रो, kutro, animal</span>
          </p>
        </div>
        <button
          @click.prevent="showSearchHelp = false"
          class="tw-absolute tw-top-3 tw-right-0 tw-rounded-full tw-bg-yellow-200 focus:tw-outline-none focus:tw-ring-2"
        >
          ❌
        </button>
      </div>
    </div>
    <div class="tw-mt-3 tw-max-w-3xl tw-mx-auto tw-absolute tw-top-6 tw-left-0 tw-right-0">
      <ol
        v-if="wordsToIterate.length"
        class="tw-list-decimal tw-list-inside tw-bg-gradient-to-br tw-from-white tw-to-pink-50 tw-rounded tw-p-2 tw-z-40"
      >
        <li
          v-for="word of wordsToIterate"
          :key="word.slug"
          @click.prevent="clearInput()"
          class="tw-m-1 tw-z-40"
        >
          <NuxtLink
            :to="`/${$i18n.locale}/dictionary/marwari-english/${word.slugurl}/`"
            class="focus:tw-ring-2 tw-p-1"
          >
            {{ word.title ? word.title : word.slugurl }} ({{ word.transliteration }})
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
      wordsBody: [],
      query: "",
      showSearchHelp: false
    };
  },
  methods: {
    // To clear the Search on clicking the link or pressing ESC in search-input
    clearInput() {
      this.showSearchHelp = false;
      this.words = [];
      this.wordsToIterate = [];
      this.wordsBody = [];
      this.query = "";
      return;
    }
  },
  watch: {
    async query(query) {
      const _ = require("lodash");

      // If input if false or if it has only spaces, then don't update the Words
      const hasSpace = new RegExp("^[ ]+$").test(query);

      if (!query || hasSpace) {
        this.words = [];
        this.wordsToIterate = [];
        this.wordsBody = [];
        return;
      }

      // Hide the Search Help box if someone types something
      if (query.length > 0) {
        this.showSearchHelp = false;
      }

      // Main starts...

      this.words = await this.$content(`dictionary`, {
        deep: true
      })
        .where({
          $and: [
            { slug: { $ne: "AAA" } },
            { dir: `/dictionary/marwari-english` }
          ]
        })
        .without(["body", "toc", "readingTime"])
        .sortBy("updatedAt", "desc")
        .fetch();

      let toReturnSomethingTrue;

      this.wordsToIterate = this.words.filter(word => {
        let a1, a2, a3, a4;
        let c1, c2, c3;
        let d1, d2, d3;
        let e1, e2, e3;
        let f1, f2, f3;
        let b, c, d, e, f, g, h, i, j, k, l, m;
        let tc, hi, hi_trans, mr, mr_trans, gu, gu_trans;
        let cat, t;

        // Below is to Search URL

        a1 = `${word.title ? word.title : word.slugurl}`
          .toLowerCase()
          .includes(query);
        a2 = word.transliteration.toLowerCase().includes(query);
        a3 = word.slugurl.toLowerCase().includes(query);

        if (word.transliteration_alt && word.transliteration_alt.length > 0) {
          for (const item of word.transliteration_alt) {
            a4 = item.toLowerCase().includes(query);
          }
        }

        // Below is to Search Meanings. Meanings is an Array of objects.
        // It can be 'meanings', 'meaning', 'meanings_noun', 'meanings_verb', etc.

        if (word.meanings && word.meanings.length > 0) {
          if (
            word.meanings[0].meaning &&
            typeof word.meanings[0].meaning === "string"
          ) {
            c1 = word.meanings[0].meaning.toLowerCase().includes(query);
          }
          // if (
          //   word.meanings[1].meaning &&
          //   typeof word.meanings[1].meaning === "string"
          // ) {
          //   c2 = word.meanings[1].meaning.toLowerCase().includes(query);
          // }
          // if (
          //   word.meanings[2].meaning &&
          //   typeof word.meanings[2].meaning === "string"
          // ) {
          //   c3 = word.meanings[2].meaning.toLowerCase().includes(query);
          // }

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
              word.meaning[0].meaning &&
              typeof word.meaning[0].meaning === "string"
            ) {
              d1 = word.meaning[0].meaning.toLowerCase().includes(query);
            }
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
              word.meanings_noun[0].meaning &&
              typeof word.meanings_noun[0].meaning === "string"
            ) {
              e1 = word.meanings_noun[0].meaning.toLowerCase().includes(query);
            }
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
              word.meanings_verb[0].meaning &&
              typeof word.meanings_verb[0].meaning === "string"
            ) {
              f1 = word.meanings_verb[0].meaning.toLowerCase().includes(query);
            }
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

        if (word.translations_noun && word.translations_noun.length > 0) {
          for (const trans of word.translations_noun) {
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

        if (word.translations_verb && word.translations_verb.length > 0) {
          for (const trans of word.translations_verb) {
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

        // Search Categories
        if (word.categories && word.categories.length > 0) {
          for (const item of word.categories) {
            if (typeof item === "string") {
              cat = item.toLowerCase().includes(query);
            }
          }
        }

        // Search Topics
        if (word.topics && word.topics.length > 0) {
          for (const item of word.topics) {
            if (typeof item === "string") {
              t = item.toLowerCase().includes(query);
            }
          }
        }

        // Return something as true, because Filter works only then.
        return (toReturnSomethingTrue =
          a1 ||
          a2 ||
          a3 ||
          a4 ||
          c1 ||
          c2 ||
          c3 ||
          d1 ||
          d2 ||
          d3 ||
          e1 ||
          e2 ||
          e3 ||
          c ||
          d ||
          e ||
          tc ||
          hi ||
          hi_trans ||
          mr ||
          mr_trans ||
          gu ||
          gu_trans ||
          cat ||
          t);
      });

      // Search Body of the word md file (usually not needed, but can contain useful text sometimes)
      // Also, only 3 words are being fetch using this, so no big load.
      this.wordsBody = await this.$content("dictionary")
        // .only(["body", "slug"])
        .where({
          $and: [
            { slug: { $ne: "AAA" } },
            { dir: `/dictionary/marwari-english` }
          ]
        })
        .limit(3)
        .search("text", query)
        .fetch();

      // Merge the Filtered Words and WordsBody and make the array Unique
      let mergedArray = _.concat(this.wordsBody, this.wordsToIterate);
      let uniqueArray = _.uniqBy(mergedArray, "slug");

      // Show only 10 words even if the Array had hundreds of words to begin with
      this.wordsToIterate = _.take(uniqueArray, 10);
    }
  }
};
</script>