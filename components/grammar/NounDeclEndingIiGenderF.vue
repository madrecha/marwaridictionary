<template>
  <div>
    <table v-if="grammar.noun.ending === 'ii'">
      <thead>
        <tr>
          <th colspan="3" @click.prevent="showAll = !showAll">
            Marwari declension of noun → {{ term }}ी ( {{ trans }}ī)
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
          <td>{{ term }}ी<br />{{ trans }}ī</td>
          <td>{{ term }}ियाँ <br />{{ trans }}iyā̃</td>
        </tr>
        <tr>
          <th class="noun-case">oblique</th>
          <td>{{ term }}ी <br />{{ trans }}ī</td>
          <td>{{ term }}ियाँ <br />{{ trans }}iyā̃</td>
        </tr>
        <tr>
          <th class="noun-case">vocative</th>
          <td>{{ term }}ी <br />{{ trans }}ī</td>
          <td>{{ term }}िया <br />{{ trans }}iyā</td>
        </tr>
      </tbody>
    </table>

    <table v-if="grammar.noun.ending === 'ii-vowel'">
      <thead>
        <tr>
          <th colspan="3" @click.prevent="showAll = !showAll">
            Marwari declension of noun → {{ term }}ई ( {{ trans }}ī)
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
          <td>{{ term }}ई<br />{{ trans }}ī</td>
          <td>{{ term }}इयाँ <br />{{ trans }}iyā̃</td>
        </tr>
        <tr>
          <th class="noun-case">oblique</th>
          <td>{{ term }}ई <br />{{ trans }}ī</td>
          <td>{{ term }}इयाँ <br />{{ trans }}iyā̃</td>
        </tr>
        <tr>
          <th class="noun-case">vocative</th>
          <td>{{ term }}ई <br />{{ trans }}ī</td>
          <td>{{ term }}इया <br />{{ trans }}iyā</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: { term: String, trans: String, grammar: Object },
  data() {
    return { showAll: false };
  },
};
</script>

<style lang="postcss" scoped>
table {
  @apply tw-border tw-border-pink-800 tw-border-collapse;
}
th {
  @apply tw-text-xl tw-text-blue-900 tw-font-medium;
  @apply tw-py-2 tw-px-3;
  @apply tw-border tw-border-blue-800;
}
td {
  @apply tw-border tw-border-blue-800;
  @apply tw-py-2 tw-px-3;
}

.noun-number {
  @apply tw-bg-pink-50;
}
.noun-case {
  @apply tw-bg-blue-50;
}
</style>