<template>
  <div>
    <input
      type="search"
      autocomplete="off"
      id="hello"
      v-model="query"
      class="tw-ring-2"
    />
    {{ wordsToIterate.length }}
    <ol v-if="wordsToIterate.length">
      <li
        v-for="word in wordsToIterate"
        :key="word.slug"
        class="tw-flex tw-flex-wrap"
      >
        <nuxt-link :to="`/word/${word.url.slugurl}`">
          {{ word.url.transliteration }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
// import all from "~/components/all.vue";

export default {
  // components: { all },
  data() {
    return {
      words: [],
      wordsToIterate: [],
      query: "",
    };
  },
  watch: {
    async query(query) {
      if (!query) {
        this.wordsToIterate = [];
        return;
      }
      this.words = await this.$content("words")
        .without(["body", "toc"])
        // .where(
        //   { meanings: { $regex: "meaning: heart" } }
        //   // function (meanings) {
        //   //   return meanings.meaning === "heart";
        //   // }
        //   // { topics: { $regex: "abcde" } }
        // )
        .fetch();

      // this.wordsToIterate = this.words;

      let meaningssearch;
      this.wordsToIterate = this.words.filter((word) => {
        // return query === word.url.transliteration;
        let a, b, c;

        if (word.url) {
          a = word.url.transliteration.toLowerCase().includes(query);
          b = word.url.slugurl.toLowerCase().includes(query);
        }

        if (word.meanings && word.meanings.length > 0) {
          for (const mean of word.meanings) {
            if (typeof mean.meaning === "string") {
              c = mean.meaning.toLowerCase().includes(query);
            }
          }
        }

        return (meaningssearch = a || b || c);

        // if (query === word.url.transliteration) {
        //   console.log(word.meanings.toString());
        // }

        // || query === word.url.title ||
        // /[0-9]/ === word.meanings[0].meaning.search(query)
      });

      // for (let word of this.words) {
      //   if (word.url.transliteration == query) {
      //     this.wordsToIterate.push(word);
      //     word = {};
      //   }
      // }
      // delete this.words;
    },
  },
  async fetch() {
    // this.words = await this.$content("words").limit(10).fetch();
    // this.wordsToIterate = this.words.filter((word) => {
    //   word.url.transliteration = this.searcha;
    // });
    // console.log();
    // for (const word of this.words) {
    //   console.log(word);
    // }
    // this.words = await this.$content("words")
    // .where({
    //   $or: [
    //     {
    //       "url.transliteration": {
    //         $contains: "lei jaano",
    //       },
    //     },
    //     // {
    //     //   "url.title": { $contains: "लेई जाणो" },
    //     // },
    //     {
    //       "synonyms[0].syn": { $contains: "घर" },
    //     },
    //     // { meaning: { $contains: "abc" } },
    //     {
    //       meanings: { meaning: { $contains: "jump" } },
    //     },
    //     {
    //       synonyms: { $contains: "syn: घर" },
    //     },
    //     {
    //       check: { $contains: "abcd" },
    //     },
    //     {
    //       grammar: {
    //         $contains: {
    //           noun: { $contains: { trans: { $contains: "makaan" } } },
    //         },
    //       },
    //     },
    //     // {
    //     //   topics: { $contains: "animal" },
    //     // },
    //     // {
    //     //   meanings: { $size: { $gte: 1 } },
    //     // },
    //     // {
    //     //   meanings: { $size: { $gte: 1 } },
    //     // },
    //   ],
    // })
    // .fetch();
  },
};
</script>

<style src="@/assets/css/nuxtcontent.postcss" lang="postcss">
</style>