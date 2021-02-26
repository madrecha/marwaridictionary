<template>
  <div
    class="tw-sticky tw-top-0 tw-z-30 tw-h-12 tw-flex tw-items-center tw-justify-center tw-bg-gradient-to-br tw-from-white tw-to-blue-50"
  >
    <div class="tw-w-1/5 md:tw-hidden tw-p-2">
      <button @click.prevent="show = !show">🧾</button>
    </div>
    <nav
      class="md:tw-block md:tw-w-1/3 tw-px-2"
      :class="!show ? ['tw-hidden'] : ['tw-block']"
    >
      <ul id="ul-menu" class="md:tw-flex tw-items-center tw-justify-center">
        <li
          v-for="menu in menus"
          :key="menu.name"
          class="tw-text-sm sm:tw-text-base tw-mx-0.5 md:tw-mx-2 tw-font-medium"
          @click.prevent="hideMenu()"
        >
          <nuxt-link
            exact
            :to="menu.url"
            class="tw-p-1 md:tw-p-2.5 hover:tw-bg-pink-50"
            >{{ menu.name }}</nuxt-link
          >
        </li>
      </ul>
    </nav>
    <div class="tw-w-2/5 md:tw-w-1/3">
      <p class="tw-text-center tw-font-medium sm:tw-text-2xl tw-text-pink-900">
        <nuxt-link to="/"> Marwari </nuxt-link>
      </p>
    </div>
    <div class="tw-w-2/5 md:tw-w-1/3 tw-flex tw-items-center tw-justify-start">
      <SearchWords :width="'tw-w-2/3 md:tw-w-full'"></SearchWords>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      menus: [
        // { name: "Home", url: "/" },
        { name: "Words", url: "/word" },
        { name: "Topics", url: "/topic" },
        // { name: "About", url: "/about" },
      ],
    };
  },
  methods: {
    hideMenu() {
      this.show = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
#ul-menu .nuxt-link-exact-active {
  @apply tw-border-pink-500 tw-border tw-rounded-xl tw-bg-white;
}
</style>
