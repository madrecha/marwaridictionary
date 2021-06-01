<template>
  <div
    v-if="word"
    class="tw-flex tw-max-w-max tw-mx-auto tw-flex-row tw-justify-evenly tw-items-center tw-text-sm tw-rounded-xl tw-bg-gray-50 tw-p-2 tw-gap-4 md:tw-gap-8"
  >
    <div
      v-for="item in items"
      :key="item.text"
      class="tw-flex tw-flex-col md:tw-flex-row tw-gap-2 tw-text-xs sm:tw-text-sm tw-font-thin tw-text-gray-500"
      :title="`${item.text} on ${word[item.format]}`"
    >
      <div class="tw-flex tw-justify-center tw-items-center tw-gap-2 ">
        <v-icon small>{{item.icon}}</v-icon>
        <span class="">{{item.text}}</span>
      </div>
      <div class="tw-uppercase tw-text-gray-900 tw-font-medium">{{ formatDate(word[item.format]) }}</div>
    </div>
  </div>
</template>

<script>
import { mdiClockOutline, mdiPen } from "@mdi/js";

export default {
  props: { word: Object },
  data() {
    return {
      items: [
        { text: "Added", icon: mdiClockOutline, format: "createdAt" },
        { text: "Updated", icon: mdiPen, format: "updatedAt" }
      ]
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString(this.$i18n.locale, options);
    }
  }
};
</script>
