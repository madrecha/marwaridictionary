<template>
  <header class="header-custom tw-sticky tw-top-0 tw-z-30 tw-h-12 tw-flex tw-items-center tw-justify-center ">
    <!-- <div class="tw-w-1/5 md:tw-hidden tw-p-2">
      <button @click.prevent="show = !show">🧾</button>
    </div> -->
    <nav class="tw-w-2/3 tw-px-2 tw-text-green-800">
      <ul class="ul-menu md:tw-flex tw-items-center tw-justify-center">
        <li class="tw-text-sm sm:tw-text-base tw-mx-0.5 md:tw-mx-2 tw-font-medium">
          <nuxt-link
            :to="`${localePath('/')}/`"
            class="header-nav-link"
          > 🏠 Home </nuxt-link>
        </li>
        <li class="tw-text-sm sm:tw-text-base tw-mx-0.5 md:tw-mx-2 tw-font-medium">
          <nuxt-link
            exact
            :to="`/${$i18n.locale}/dictionary/`"
            class="header-nav-link"
          >📔 Dictionary</nuxt-link>
        </li>
        <li class="tw-text-sm sm:tw-text-base tw-mx-0.5 md:tw-mx-2 tw-font-medium">
          <nuxt-link
            exact
            :to="`/${$i18n.locale}/browse/`"
            class="header-nav-link"
          >👀 Browse</nuxt-link>
        </li>
        <li class="tw-text-sm sm:tw-text-base tw-mx-0.5 md:tw-mx-2 tw-font-medium">
          <nuxt-link
            exact
            :to="`/${$i18n.locale}/label/`"
            class="header-nav-link"
          >🏷 Labels</nuxt-link>
        </li>
        <li class="md:tw-block tw-text-sm sm:tw-text-base tw-mx-0.5 md:tw-mx-2 tw-font-medium">
          <nuxt-link
            exact
            :to="`/${$i18n.locale}/topic/`"
            class="header-nav-link"
          >📦 Topics</nuxt-link>
        </li>

      </ul>
    </nav>
    <div class="tw-w-1/3 tw-flex tw-items-center tw-justify-start">
      <SearchWordsFull :width="'tw-w-2/3 md:tw-w-full'"></SearchWordsFull>
      <!-- <LanguageInput></LanguageInput> -->
    </div>
  </header>
</template>

<script>
import LanguageInput from "~/components/organisms/LanguageInput";
import SearchWordsFull from "~/components/organisms/SearchWordsFull";

export default {
  components: { LanguageInput, SearchWordsFull },
  data() {
    return {
      show: false
      // menus: [
      //   // { name: "Home", url: "/" },
      //   // { name: "Words", url: "/word" },
      //   // { name: "Topics", url: "/topic" }
      //   // { name: "About", url: "/about" },
      // ]
    };
  }
  // methods: {
  //   hideMenu() {
  //     this.show = false;
  //   }
  // }
};
</script>

<style lang="sass" scoped>
.header-custom
  background: rgb(236,255,249)
  background: linear-gradient(110deg, rgba(236,255,249,1) 0%, rgba(229,255,250,1) 50%, rgba(228,250,255,1) 100%)
.ul-menu .nuxt-link-exact-active
  text-shadow: 0.5px 0.5px 1px pink
  @apply tw-text-secondary-focus tw-bg-white tw-shadow
.header-nav-link
  @apply tw-rounded-lg tw-p-1 md:tw-p-2.5 hover:tw-bg-white hover:tw-text-secondary-focus tw-font-medium
</style>
