<template>
  <v-footer
    app
    absolute
    class="tw-bg-gradient-to-b tw-from-white tw-to-blue-50 "
  >
    <div class="tw-w-full tw-border-t tw-border-blue-200 tw-px-4 tw-py-2 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-evenly tw-gap-4 tw-text-center">
      <div class="">
        <span class="tw-text-base tw-text-gray-500">Inspiration:</span>
        <span class="tw-font-medium tw-text-gray-900">CA Adarsh Madrecha</span>
      </div>
      <div>
        <span class="tw-text-base tw-text-gray-500">Design & Content:</span>
        <span class="tw-font-medium tw-text-gray-900">CA {{ $t("default_author") }}</span>
      </div>
      <div class="tw-text-base tw-text-gray-800">
        &copy; 2014 - {{new Date().getFullYear()}}
      </div>
    </div>
  </v-footer>
</template>

<script>
// export default {
//   data() {
//     return {};
//   }
// };
</script>
