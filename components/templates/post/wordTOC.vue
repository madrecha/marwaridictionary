<template>
  <div id="blog-toc">
    <div class="tw-rounded-2xl tw-shadow-md tw-bg-gradient-to-br tw-from-white tw-via-white tw-to-blue-50 tw-z-30">
      <div
        id="heading-toc"
        @click.prevent="show = !show"
        class="tw-bg-blue-50 tw-text-blue-900 tw-py-3 tw-rounded-2xl tw-flex tw-justify-around tw-items-center tw-cursor-pointer"
        style=""
      >
        <!-- <fa-icon icon="list-ol" class="tw-text-lg"></fa-icon> -->
        <h2 class="tw-uppercase tw-font-medium tw-text-center tw-tracking-wider">
          Table of contents (TOC)
        </h2>
        <!-- <fa-icon :icon="show == true ? 'chevron-up' : 'chevron-down'"></fa-icon> -->
      </div>
      <nav
        id="toc-nav"
        v-show="show"
        class="tw-overflow-y-scroll tw-max-h-64"
      >
        <ul
          id="toc-ul"
          class="tw-mt-2 tw-pl-5 tw-pr-1 md:tw-pl-8 md:tw-pr-4 tw-pb-2"
        >
          <li
            v-for="heading in word.toc"
            :key="heading.id"
            class="tw-my-2 tw-mb-0"
            :style="
              heading.depth === 2
                ? { 'text-indent': '-0.2rem' }
                : heading.depth === 3
                ? { 'text-indent': '-0.2rem', 'margin-left': '1.25rem' }
                : { 'text-indent': '-0.2rem', 'margin-left': '2.5rem' }
            "
          >
            <nuxt-link
              class="tw-rounded"
              :class="
                heading.depth === 2
                  ? 'tw-text-pink-800 hover:tw-bg-red-50 tw-text-lg '
                  : heading.depth === 3
                  ? 'tw-text-blue-900  hover:tw-bg-blue-50'
                  : 'tw-text-green-700  hover:tw-bg-green-50'
              "
              :to="`#${heading.id}`"
            >
              {{ heading.text }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: { word: Object },
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="sass" scoped>
/* width */
::-webkit-scrollbar
  @apply tw-w-2

/* Track */
::-webkit-scrollbar-track
  @apply tw-rounded-br-2xl
  /* box-shadow: inset 0 0 2px grey; */

/* Handle */
::-webkit-scrollbar-thumb
  @apply tw-bg-blue-200 hover:tw-bg-pink-200 tw-rounded-lg
  /* background: red; */
  /* border-radius: 10px; */

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover 
 background: #b30000;
 */
</style>