<template>
  <div>
    <p v-if="url">
      Translate Marwari word
      <span class="tw-capitalize"
        >{{ url.title }} ({{ url.transliteration }})</span
      >
    </p>
    <ol>
      <li v-for="(translate, i) in translation" :key="i">
        <span v-if="translate.context" class="tw-text-sm"
          >Context: {{ translate.context }}</span
        >
        <ul>
          <li v-if="translate.hi">
            <span class="tw-text-xs">Hindi:</span> {{ translate.hi }}
            <span v-if="translate.hi_trans">({{ translate.hi_trans }})</span>
          </li>
          <li v-if="translate.hindi">
            <span class="tw-text-xs">Hindi:</span> {{ translate.hindi }}
            <span v-if="translate.hindi_trans"
              >({{ translate.hindi_trans }})</span
            >
          </li>
          <li v-if="translate.mr || translate.marathi">
            <span class="tw-text-xs">Marathi:</span> {{ translate.mr }}
            <span v-if="translate.mr_trans">({{ translate.mr_trans }})</span>
          </li>
          <li v-if="translate.marathi">
            <span class="tw-text-xs">Marathi:</span> {{ translate.marathi }}
            <span v-if="translate.marathi_trans"
              >({{ translate.marathi_trans }})</span
            >
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    translation: { type: Array, required: true },
    url: { type: Object, required: false },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>