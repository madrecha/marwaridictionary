<template>
  <div>
    <!-- <button @click.prevent="Transliterate()">abc {{ transcheck }}</button> -->
    <!-- {{ transResult }} -->
    <!-- {{ Transliterate() }} -->
    {{
      require("@sanskrit-coders/sanscript").t(
        "अ आ इ ई लकड़ा क़ीमत",
        "devanagari",
        "itrans"
      )
    }}
    <input
      type="search"
      autocomplete="off"
      id="hello"
      v-model="query"
      class="tw-ring-2"
    />
    {{ wordsToIterate.length }}
    <ol v-if="wordsToIterate.length" class="tw-list-decimal">
      <li v-for="word in wordsToIterate" :key="word.slug" class="tw-m-2">
        <nuxt-link :to="`/dictionary/word/${word.url.slugurl}`" class="tw-p-2">
          {{ word.url.transliteration }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
// import { Sanscript } from "@sanskrit-coders/sanscript";

// import _ from "lodash";

export default {
  data() {
    return {
      words: [],
      wordsToIterate: [],
      wordsToSearch: [],
      query: "",
      transcheck: "<b>आपाणो कैसे हो लड़का</b>",
      transResult: "",
    };
  },
  async fetch() {
    this.wordsToSearch = await this.$content("words")
      // .only(["url", "slug"])
      .where({
        $or: [
          { meanings: { $regex: "hu" } },
          // { "url.transliteration": { $contains: query } },
          // { "url.title": { $contains: query } },
          // { "url.slugurl": { $contains: query } },
        ],
      })
      .sortBy("url.title", "asc")
      // .limit(10)
      // .search(query)
      .fetch();
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
        let a, b, c, d, e, f, g, h, i, j, k, l, m;
        let tc,
          hindi,
          hindi_trans,
          marathi,
          marathi_trans,
          gujarati,
          gujarati_trans;

        if (word.url) {
          a = word.url.transliteration.toLowerCase().includes(query);
          b = word.url.slugurl.toLowerCase().includes(query);
        }

        if (word.meanings && word.meanings.length > 0) {
          for (const mean of word.meanings) {
            if (mean.meaning && typeof mean.meaning === "string") {
              c = mean.meaning.toLowerCase().includes(query);
            }
          }
        }

        if (word.translations && word.translations.length > 0) {
          for (const trans of word.translations) {
            if (trans.context && typeof trans.context === "string") {
              tc = trans.context.toLowerCase().includes(query);
            }
            if (trans.hi && typeof trans.hi === "string") {
              hindi = trans.hi.toLowerCase().includes(query);
            }
            if (trans.hi_trans && typeof trans.hi_trans === "string") {
              hindi_trans = trans.hi_trans.toLowerCase().includes(query);
            }
            if (trans.mr && typeof trans.mr === "string") {
              marathi = trans.mr.toLowerCase().includes(query);
            }
            if (trans.mr_trans && typeof trans.mr_trans === "string") {
              marathi_trans = trans.mr_trans.toLowerCase().includes(query);
            }
            if (trans.gj && typeof trans.gj === "string") {
              gujarati = trans.gj.toLowerCase().includes(query);
            }
            if (trans.gj_trans && typeof trans.gj_trans === "string") {
              gujarati_trans = trans.gj_trans.toLowerCase().includes(query);
            }
          }
        }

        return (toReturnSomethingTrue =
          a ||
          b ||
          c ||
          tc ||
          hindi ||
          hindi_trans ||
          marathi ||
          marathi_trans ||
          gujarati ||
          gujarati_trans);
      });

      this.wordsToIterate = _.take(this.wordsToIterate, 10);
    },
  },
};
</script>

<style src="@/assets/css/nuxtcontent.postcss" lang="postcss">
</style>