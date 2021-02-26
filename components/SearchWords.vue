<template>
  <div class="tw-relative">
    <div>
      <input
        id="search-word-input"
        v-model="query"
        type="search"
        autocomplete="off"
        placeholder="Search..."
        class="tw-border tw-rounded-xl tw-shadow-lg focus:tw-outline-none focus:tw-ring-2 tw-py-1 tw-px-3"
        :class="width"
      />
    </div>
    <div
      class="tw-mt-3 tw-max-w-3xl tw-mx-auto tw-absolute tw-top-6 tw-left-0 tw-right-0"
    >
      <ul
        v-if="wordsToSearch.length"
        class="tw-bg-gradient-to-br tw-from-white tw-to-pink-50 tw-rounded tw-p-2"
      >
        <li
          v-for="word of wordsToSearch"
          :key="word.slug"
          @click.prevent="clearInput()"
        >
          <NuxtLink :to="`/word/${word.url.slugurl}`">
            {{ word.url.title }} ({{ word.url.transliteration }})
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: { width: { type: String, default: "tw-w-2/3" } },
  data() {
    return {
      wordsToSearch: [],
      query: "",
    };
  },
  watch: {
    async query(query) {
      if (!query) {
        this.wordsToSearch = [];
        return;
      }

      this.wordsToSearch = await this.$content("words")
        .only(["url", "slug"])
        .sortBy("slug", "asc")
        .limit(10)
        .search(query)
        .fetch();
    },
  },
  methods: {
    clearInput() {
      this.wordsToSearch = [];
      // document.getElementById("search-word-input").value = "";
      this.query = "";
      return;
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>