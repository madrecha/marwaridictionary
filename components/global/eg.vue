<template>
  <ol v-if="eg">
    <li v-for="item in eg" :key="item.eg">
      {{ item.eg }} <br />
      <span v-if="item.eg">{{ Transliterate(item.eg) }}</span>
      <ul>
        <li v-if="item.en">
          <span class="tw-text-xs">English:</span> {{ item.en }}
        </li>
        <li v-if="item.hi">
          <span class="tw-text-xs">Hindi:</span> {{ item.hi }}
        </li>
        <li v-if="item.mr">
          <span class="tw-text-xs">Marathi:</span> {{ item.mr }}
        </li>
        <li v-if="item.gu">
          <span class="tw-text-xs">Gujarati:</span> {{ item.gu }}
        </li>
      </ul>
    </li>
  </ol>
</template>

<script>
export default {
  props: { eg: Array },
  data() {
    return {};
  },
  methods: {
    Transliterate(text) {
      let Sanscript = require("@sanskrit-coders/sanscript");
      return Sanscript.t(text, "devanagari", "iast");
    },
  },
};
</script>
