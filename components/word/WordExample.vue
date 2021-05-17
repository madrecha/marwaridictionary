<template>
  <div class="word-example">
    <dl class="tw-mt-3">
      <dt
        lang="mwr-Deva"
        class="word-example--mwr tw-ml-3"
      >
        <slot name="mwr"></slot>
      </dt>
      <dd
        lang="mwr-Latn"
        class="word-example--mwr-Latn tw-mt-2 tw-ml-6"
      >
        <slot name="mwr-Latn"></slot>
      </dd>
      <dd
        :lang="$i18n.locale"
        class="word-example--locale tw-mt-2 tw-ml-6"
      >
        <slot :name="$i18n.locale"></slot>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "WordExample",
  data() {
    return {};
  },
  methods: {
    // transliterate() {
    //   let marwariExample = document.querySelector(`dt[lang="mwr-Deva"]`);
    //   console.log(marwariExample.innerHTML);
    // }
  }
};
</script>

<style lang="sass" scoped>
.word-example--mwr
  & > b
    @apply tw-bg-yellow-50
  & > strong
    @apply tw-bg-yellow-50
</style>