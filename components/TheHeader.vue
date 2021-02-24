<template>
  <div
    class="tw-sticky tw-top-0 tw-z-30 tw-h-12 tw-flex tw-items-center tw-justify-start tw-bg-gradient-to-br tw-from-white tw-to-blue-50"
  >
    <div class="tw-w-1/2 sm:tw-w-1/3">
      <p class="tw-text-center tw-font-medium sm:tw-text-2xl tw-text-pink-900">
        Marwari Dictionary
      </p>
    </div>
    <nav class="tw-w-1/2 sm:tw-w-2/3 tw-px-2 sm:tw-px-8">
      <ul class="tw-flex">
        <li
          v-for="menu in menus"
          :key="menu.name"
          class="tw-text-sm sm:tw-text-base tw-mx-2 tw-font-medium"
        >
          <nuxt-link
            exact
            :to="menu.url"
            class="tw-p-2.5 hover:tw-bg-pink-50"
            >{{ menu.name }}</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: "Home", url: "/" },
        { name: "Words", url: "/word" },
        { name: "Topics", url: "/topic" },
        { name: "About", url: "/about" },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply tw-border-pink-500 tw-border tw-rounded-xl tw-bg-white;
}
</style>
