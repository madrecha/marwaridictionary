<template>
  <ol v-if="eg">
    <li v-for="item in eg" :key="item.eg" class="tw-m-1">
      {{ item.eg }}
      <span v-if="item.eg" class="tw-text-sm"
        >({{
          require("@sanskrit-coders/sanscript").t(
            item.eg,
            "devanagari",
            "iast"
          )
        }})</span
      >
      <ul>
        <li v-if="item.en">
          <span
            class="tw-text-xs tw-border-b tw-border-dotted tw-border-green-800"
            >English:</span
          >
          <span class="tw-text-sm">{{ item.en }}</span>
        </li>
        <li v-if="item.hi">
          <span class="tw-text-xs">Hindi:</span>
          <span class="tw-text-sm">{{ item.hi }}</span>
          <span class="tw-text-sm"
            >({{
              require("@sanskrit-coders/sanscript").t(
                item.hi,
                "devanagari",
                "iast"
              )
            }})</span
          >
        </li>
        <li v-if="item.mr">
          <span class="tw-text-xs">Marathi:</span>
          <span class="tw-text-sm">{{ item.mr }}</span>
          <span class="tw-text-sm"
            >({{
              require("@sanskrit-coders/sanscript").t(
                item.mr,
                "devanagari",
                "iast"
              )
            }})</span
          >
        </li>
        <li v-if="item.gu">
          <span class="tw-text-xs">Gujarati:</span>
          <span class="tw-text-sm">{{ item.gu }}</span>
          <span class="tw-text-sm"
            >({{
              require("@sanskrit-coders/sanscript").t(
                item.gu,
                "gujarati",
                "iast"
              )
            }})</span
          >
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
