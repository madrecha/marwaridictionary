<template>
  <!-- This component is meant to be used in other Word components which accept related words as props like WordAntonyms, WordSynonyms, etc. -->
  <div class="word-child-div-topmost">
    <header
      class="word-component-header word-child-header"
      @click="toggleChildren = !toggleChildren"
    >
      <component
        :is="tag"
        class="word-component-heading word-child-heading"
      >
        Marwari {{namePlural}} of <span lang="mwr-Deva">{{word}}</span> <span
          lang="mwr-Latn"
          v-if="currentWordFetched"
        >({{
          currentWordFetched.transliteration ? currentWordFetched.transliteration : require("@sanskrit-coders/sanscript").t(currentWordFetched.slugurl, "devanagari", "iast")
        }})</span>
      </component>
      <span class="word-component-collapse-icon word-child-collapse-icon">{{toggleChildren ? `+` : `-`}}</span>
    </header>
    <ol
      v-if="doChildrenFetchedExist"
      class="word-child-ol"
      v-show="!toggleChildren"
    >
      <li
        v-for="(child,i) in childrenFetched"
        :key="child.slugurl"
        lang="mwr-Deva"
        class="word-child-li"
      >
        <nuxt-link
          :to="`/${$i18n.locale}/dictionary/${$route.params.dict}/${child.slugurl}/`"
          class="word-child-nuxtlink"
        >
          {{ child.title ? child.title : child.slugurl }}
        </nuxt-link>
        <span
          lang="mwr-Latn"
          class="word-child-mwrLatn"
        >{{child.transliteration ? child.transliteration : require("@sanskrit-coders/sanscript").t(child.slugurl, "devanagari", "iast")}}</span>{{i === childrenFetched.length - 1? null : `,`}}
      </li>
    </ol>
    <component
      :is="childrenFetched && childrenFetched.length > 0 ? 'details' : 'div'"
      v-show="!toggleChildren"
      v-if="childrenNotExisting && childrenNotExisting.length > 0"
      :class="childrenFetched && childrenFetched.length > 0 ? 'word-child-more-details' : word-child-more-div"
    >
      <summary
        class="word-child-more-summary"
        v-if="childrenFetched && childrenFetched.length > 0"
      >More</summary>
      <ol class="word-child-ol">
        <li
          v-for="(syn,i) in childrenNotExisting"
          :key="i"
          lang="mwr-Deva"
          class="word-child-li"
        >
          <span>{{syn}}</span> <span
            lang="mwr-Latn"
            class="word-child-mwrLatn"
          >{{require("@sanskrit-coders/sanscript").t(syn, "devanagari", "iast")}}</span>{{i === childrenNotExisting.length - 1? null : `,`}}
        </li>
      </ol>
    </component>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String },
    children: { type: Array },
    tag: { type: String, default: "h3" },
    close: { type: Boolean, default: false }
  },
  data() {
    return {
      currentWordFetched: null,
      childrenFetched: null,
      doChildrenFetchedExist: null,
      childrenNotExisting: null,
      toggleChildren: this.close
    };
  },
  async fetch() {
    this.currentWordFetched = await this.$content(
      `dictionary/${this.$route.params.dict}`
    )
      .where({ slugurl: this.word })
      .without(["body", "toc"])
      .fetch();
    this.currentWordFetched = this.currentWordFetched[0];

    this.childrenFetched = await this.$content(
      `dictionary/${this.$route.params.dict}`
    )
      .where({ slugurl: { $in: this.childrenComputed } })
      .only([
        "slug",
        "slugurl",
        "title",
        "transliteration",
        "children",
        "child"
      ])
      .fetch();

    this.childrenFetched.length > 0
      ? (this.doChildrenFetchedExist = true)
      : (this.doChildrenFetchedExist = false);

    // If doChildrenFetchedExist is false, then don't add this component to DOM. Thus, no 404 error will be there on clicking the non-generated links of non-existing child. Same logic in Antonyms component. This way, the components will automatically be added only whenever an existing word is added as a child/antonym to the current word in md file.

    let synsFetchedOnlySlugurl = this.childrenFetched.map(syn => {
      return syn.slugurl;
    });

    this.childrenNotExisting = this.childrenComputed.filter(syn => {
      return !synsFetchedOnlySlugurl.includes(syn);
    });
  },
  computed: {
    word() {
      return this.$route.params.slugurl;
    },
    childrenComputed() {
      return this.children;
      // if (this.child && this.children) {
      //   let merged = [...this.child, ...this.children];
      //   return [...new Set(merged)];
      // }
    },
    namePlural() {
      return this.name + `s`;
    }
  }
};
</script>

<style lang="sass" scoped>
.word-child-div-topmost
  @apply tw-my-3 sm:tw-my-4 tw-mx-0.5 sm:tw-mx-3 tw-border tw-border-green-200 tw-rounded
.word-child-header
  @apply tw-bg-gradient-to-b tw-from-white tw-via-gray-50 tw-to-green-50 tw-text-green-900 hover:tw-from-green-50 hover:tw-to-white
  @apply tw-p-2 tw-cursor-pointer tw-flex tw-justify-between tw-items-center
.word-child-heading
  @apply tw-text-sm tw-text-gray-800
  & span[lang="mwr-Latn"]
    @apply tw-text-xs
.word-child-ol
  @apply tw-p-2 tw-flex tw-flex-wrap tw-gap-2 tw-list-none
.word-child-li
  @apply tw-text-green-800 tw-text-base
  &::marker
    @apply tw-hidden
.word-child-nuxtlink
  @apply tw-inline-block tw-border-b tw-border-indigo-200 hover:tw-text-indigo-500
.word-child-more-details
  &:not([open])
    @apply tw-pb-2
.word-child-more-div
  @apply tw-pb-0
.word-child-more-summary
  @apply tw-px-4 tw-py-0.5 tw-text-gray-500 tw-text-xs tw-cursor-pointer
  @apply hover:tw-text-green-600 tw-bg-gradient-to-br tw-from-white hover:tw-to-green-50
  &::marker
    @apply tw-text-sm tw-text-green-300
  &::after
    content: "…"
.word-child-mwrLatn
  @apply tw-text-gray-500 tw-italic tw-text-sm
</style>