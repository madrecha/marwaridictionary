<template>
  <table>
    <thead>
      <tr>
        <th
          colspan="3"
          @click.prevent="showAll = !showAll"
        >
          Marwari declension of noun → {{ term }}ो ( {{ trans }}o)
        </th>
      </tr>
    </thead>
    <tbody v-show="showAll">
      <tr>
        <th></th>
        <th class="noun-number">singular</th>
        <th class="noun-number">plural</th>
      </tr>
      <tr>
        <th class="noun-case">direct</th>
        <td>{{ term }}ो<br />{{ trans }}o</td>
        <td>{{ term }}ा <br />{{ trans }}ā</td>
      </tr>
      <tr>
        <th class="noun-case">oblique</th>
        <td>{{ term }}ा <br />{{ trans }}ā</td>
        <td>{{ term }}ा<br />{{ trans }}ā</td>
      </tr>
      <tr>
        <th class="noun-case">vocative</th>
        <td>{{ term }}ा <br />{{ trans }}ā</td>
        <td>{{ term }}ा<br />{{ trans }}ā</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: { term: String, trans: String },
  data() {
    return {
      showAll: false
    };
  }
};
</script>

<style lang="sass" scoped>
table
  @apply tw-border tw-border-pink-800 tw-border-collapse
th
  @apply tw-text-xl tw-text-blue-900 tw-font-medium
  @apply tw-py-2 tw-px-3
  @apply tw-border tw-border-blue-800
td
  @apply tw-border tw-border-blue-800
  @apply tw-py-2 tw-px-3

.noun-number
  @apply tw-bg-pink-50
.noun-case
  @apply tw-bg-blue-50
</style>