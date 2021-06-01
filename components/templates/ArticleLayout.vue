<template>
  <article class="tw-mb-16">
    <header
      class="article-header tw-text-center tw-p-6"
      v-if="$scopedSlots.title"
    >
      <h1 class="article-title tw-my-3 tw-text-2xl md:tw-text-4xl tw-font-medium md:tw-leading-normal">
        <slot name="title"></slot>
      </h1>
    </header>
    <main>
      <div
        class="article-description tw-text-gray-700 tw-p-2 tw-border-b tw-border-blue-200"
        v-if="$scopedSlots.description"
      >
        <p class="tw-text-base md:tw-text-xl tw-max-w-max tw-mx-auto !tw-mb-0 tw-text-center">
          <slot name="description"></slot>
        </p>
      </div>
      <div class="tw-max-w-screen-lg tw-mx-auto tw-mt-6">
        <div class="tw-mx-4">
          <slot></slot>
        </div>
      </div>
    </main>
    <footer class="tw-mt-3">
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<script>
export default {
  data() {
    return {};
  },
  async fetch() {}
};
</script>

<style lang="sass" scoped>
.article-header
  // background: #D6F6F4
  background: rgb(236,255,249)
  background: linear-gradient(110deg, hsla(162, 100%, 98%,1) 0%, hsla(168, 100%, 96%, 1) 50%, hsla(175, 100%, 95%, 1) 100%)

.article-title
  background: linear-gradient(230deg, hsla(185, 100%, 14%,1) 0%, hsla(191, 99%, 30%, 1) 100%)
  background-clip: text
  -webkit-text-fill-color: transparent
  -webkit-background-clip: text

.article-description
  background: rgb(202,251,255)
  background: linear-gradient(to bottom, hsla(187, 100%, 93%,1) 0%, hsla(189, 100%, 94%,1) 100%)
</style>

<style lang="sass" src="~/assets/css/all.sass" scoped>
</style>