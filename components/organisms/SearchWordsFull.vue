<template>
  <div class="tw-relative">
    <input
      type="search"
      label="Search"
      v-model="query"
      autocomplete="off"
      autofocus
      placeholder="Search for word 🔎"
      class="tw-bg-white tw-rounded-lg tw-p-2 tw-shadow tw-border tw-border-gray-700 focus:tw-outline-none tw-ring-1 focus:tw-ring-2 tw-ring-blue-400 tw-transform tw-transition-transform"
      :class="width"
      transition="slide-x-transition"
      @keyup.esc="clearInput()"
      v-click-outside="clearInput"
      @click.prevent="showSearchHelp = true"
    />
    <!-- @mouseover="showSearchHelp = true"
        @mouseleave="showSearchHelp = false" -->
    <div
      class="tw-absolute tw-top-12 tw-left-0 tw-right-0 tw-flex tw-flex-wrap tw-bg-white tw-p-1 tw-rounded tw-shadow"
      v-if="showSearchHelp && results.length < 1"
      :class="!showSearchHelp ? 'tw-hidden' : 'tw-block'"
    >
      <div class="tw-py tw-pl-1 tw-pr-4 tw-text-xs">
        Search <b>Word</b> by Title, Topic, Label
        <br />
        <span class="tw-text-xs">E.g. → विंदणी, vindani, person</span>
        <br />
        <span class="tw-text-xs">E.g. → कुत्री, kutro, animal, abusive</span>
      </div>
      <button
        @click="showSearchHelp = false"
        class="tw-absolute tw-top-0 tw-right-2 tw-rounded-full tw-text-lg tw-text-red-500 hover:tw-bg-gray-50 tw-px-2 focus:tw-outline-none"
      >
        ×
      </button>
    </div>
    <div
      class="tw-absolute tw-top-11 tw-max-w-3xl tw-mx-auto tw-left-0 tw-right-0 tw-max-h-80 tw-overflow-y-scroll tw-overscroll-x-auto tw-bg-gradient-to-br tw-from-white tw-to-white tw-shadow-md "
      v-if="results.length"
    >
      <ol class="tw-ml-4 tw-list-decimal tw-list-outside tw-rounded tw-p-2 tw-z-40 ">
        <li
          v-for="word of results"
          :key="word.item.slug"
          @click.prevent="clearInput()"
          @click="$emit('linkClicked')"
          class="tw-z-40"
        >
          <nuxt-link
            :to="`/${$i18n.locale}/dictionary/marwari-english/${word.item.slugurl}/`"
            class="tw-inline-block tw-p-2 !tw-text-gray-600 hover:tw-bg-pink-600 hover:!tw-text-white focus:tw-bg-pink-600 focus:!tw-text-white focus:tw-outline-none"
          >
            {{ word.item.title ? word.item.title : word.item.slugurl }} <span class="tw-text-sm">({{ word.item.transliteration ? word.item.transliteration : null}})</span>
          </nuxt-link>
        </li>
      </ol>
    </div>

  </div>
</template>

<script>
import Fuse from "fuse.js";

import { mdiMagnify } from "@mdi/js";

export default {
  props: { width: { type: String, default: "tw-w-2/3" } },
  data() {
    return {
      mdiMagnify,
      toggleSearch: false,
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
          { name: "transliteration_alt", weight: 1.5 },
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
        .only([
          "slugurl",
          "transliteration",
          "transliteration_alt",
          "labels",
          "topics"
        ])
        .where({ $and: [{ slug: { $ne: "AAA" } }] })
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