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
export default {
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
      });

      // delete this.words;
    },
  },
};
</script>

<style src="@/assets/css/nuxtcontent.postcss" lang="postcss">
</style>