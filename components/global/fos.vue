<template>
  <div class="tw-mt-3 tw-bg-blue-50 tw-py-2 tw-px-3">
    <div v-if="fos === 'noun'">
      {{ word }} - Noun - <span v-if="gender === 'm'">masculine</span>
      <span v-else>feminine</span> - <span v-if="number === 's'">singular</span>
      <span v-else>plural</span>
    </div>
    <div v-else-if="fos === 'verb'">{{ word }} - Verb</div>
  </div>
</template>

<script>
export default {
  props: {
    fos: { type: String, default: "noun" },
    word: String,
    gender: { type: String, default: "m" },
    number: { type: String, default: "s" },
  },
  data() {
    return {};
  },
};
</script>
