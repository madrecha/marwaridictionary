<template>
  <section
    class="tw-mt-2 tw-border-b tw-border-t tw-border-gray-300 tw-py-2 lg:tw-mt-3"
  >
    <div class="tw-flex tw-justify-evenly tw-items-center tw-text-sm">
      <div class="tw-rounded-xl tw-bg-gray-50 tw-p-2">
        <div>
          <span class="sm:tw-text-sm tw-font-thin tw-text-gray-500"
            >Added on</span
          >
          <!-- <span class="tw-text-gray-300"
              ><fa-icon icon="clock"></fa-icon
            ></span> -->
          <span
            class="tw-uppercase tw-text-blue-900"
            :title="`Published on ${word.createdAt}`"
            >{{ formatDate(word.createdAt) }}</span
          >

          <span class="tw-text-pink-800">&bull;</span>
          <span class="sm:tw-text-sm tw-font-thin tw-text-gray-500"
            >Updated</span
          >
          <!-- <span class="tw-text-gray-400"
              ><fa-icon icon="calendar-check" class="tw-text-gray-300"></fa-icon
            ></span> -->
          <span
            class="tw-uppercase tw-text-blue-900"
            :title="`Updated on ${word.updatedAt}`"
            >{{ formatDate(word.updatedAt) }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { word: Object },
  data() {
    return {};
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>