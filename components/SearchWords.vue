<template>
  <div>
    <div class="tw-flex tw-flex-col">
      <div>
        <input
          v-model="query"
          type="search"
          autocomplete="off"
          placeholder="Search..."
          class="tw-border tw-rounded-xl tw-shadow-lg focus:tw-outline-none focus:tw-ring-2 tw-py-2 tw-px-3"
        />
      </div>
      <ul v-if="wordsToSearch.length" class="tw-mt-3">
        <li v-for="word of wordsToSearch" :key="word.slug">
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
};
</script>

<style lang="postcss" scoped>
</style>