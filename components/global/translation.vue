<template>
  <div>
    <p v-if="url">
      Translate <span class="tw-capitalize">{{ url.transliteration }}</span> in
      Marwari
    </p>
    <ol>
      <li v-for="translate in translation" :key="translate.context">
        <span class="tw-text-xs">Context:</span> {{ translate.context }}
        <ul>
          <li v-if="translate.hi || translate.hindi">
            <span class="tw-text-xs">Hindi:</span> {{ translate.hi }}
          </li>
          <li v-if="translate.mr || translate.marathi">
            <span class="tw-text-xs">Marathi:</span> {{ translate.mr }}
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: { translation: Array, url: Object },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>