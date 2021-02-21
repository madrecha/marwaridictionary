<template>
  <ul>
    <li v-for="eacheg in eg" :key="eacheg.eg">
      {{ eacheg.eg }}
      <ul>
        <li v-if="eacheg.en">
          <span class="tw-text-xs">English:</span> {{ eacheg.en }}
        </li>
        <li v-if="eacheg.hi">
          <span class="tw-text-xs">Hindi:</span> {{ eacheg.hi }}
        </li>
        <li v-if="eacheg.mr">
          <span class="tw-text-xs">Marathi:</span> {{ eacheg.mr }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: { eg: Array },
  data() {
    return {};
  },
};
</script>
