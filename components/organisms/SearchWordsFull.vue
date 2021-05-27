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
        @keyup.esc="clearInput()"
        v-click-outside="clearInput"
        @click.prevent="showSearchHelp = true"
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
            Search Word by Title, Topic, Label
            <br />
            <span class="tw-text-xs">E.g. → विंदणी, vindani, person</span>
            <br />
            <span class="tw-text-xs">E.g. → कुत्री, kutro, animal, abusive</span>
          </p>
        </div>
        <button
          @click="showSearchHelp = false"
          class="tw-absolute tw-top-0 tw-right-2 tw-rounded-full tw-text-lg tw-text-red-500 hover:tw-bg-yellow-100 tw-px-2 focus:tw-outline-none"
        >
          ×
        </button>
      </div>
    </div>
    <div class="tw-mt-3 tw-max-w-3xl tw-mx-auto tw-absolute tw-top-6 tw-left-0 tw-right-0">
      <ol
        v-if="results.length"
        class="tw-list-decimal tw-list-inside tw-bg-gradient-to-br tw-from-white tw-to-pink-50 tw-rounded tw-p-2 tw-z-40"
      >
        <li
          v-for="word of results"
          :key="word.item.slug"
          @click.prevent="clearInput()"
          class="tw-m-1 tw-z-40"
        >
          <NuxtLink
            :to="`/${$i18n.locale}/dictionary/marwari-english/${word.item.slugurl}/`"
            class="focus:tw-ring-2 tw-p-1"
          >
            {{ word.item.title ? word.item.title : word.item.slugurl }} ({{ word.item.transliteration ? word.item.transliteration : null}})
          </NuxtLink>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";

export default {
  props: { width: { type: String, default: "tw-w-2/3" } },
  data() {
    return {
      words: [],
      results: [],
      query: "",
      showSearchHelp: false,
      shouldFetchWords: true,
      options: {
        // isCaseSensitive: false,
        // includeScore: true,
        shouldSort: true,
        includeMatches: true,
        // findAllMatches: false,
        // minMatchCharLength: 2,
        useExtendedSearch: true,
        keys: [
          { name: "slugurl", weight: 2 },
          { name: "transliteration", weight: 2 },
          { name: "topics", weight: 1 },
          { name: "labels", weight: 1 }
        ]
      }
    };
  },
  methods: {
    // To clear the Search on clicking the link or pressing ESC in search-input
    clearInput() {
      this.showSearchHelp = false;
      this.query = "";
      this.results = [];
      return;
    }
  },
  async fetch() {
    if (this.shouldFetchWords === false) {
      this.words = [];
    } else {
      this.words = await this.$content(`dictionary/marwari-english`)
        .only(["slugurl", "transliteration", "labels", "topics"])
        .where({ $and: [{ slug: { $ne: "AAA" } }, { type: { $ne: "pyq" } }] })
        .fetch();
    }
  },
  watch: {
    async query(q) {
      if (!q) {
        this.results = [];
        return;
      }

      const fuse = new Fuse(this.words, this.options);

      this.results = fuse.search(q, { limit: 20 });
    }
  }
};
</script>