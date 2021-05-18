<template>
  <div>
    <table v-if="grammar.noun.ending === 'ii'">
      <caption>Marwari declension of noun 👉🏻 <span lang="mwr-Deva">{{ term }}ी</span> (<span lang="mwr-Latn">{{ trans }}ī</span>)</caption>
      <thead>
        <!-- <tr>
          <th
            colspan="3"
            @click.prevent="showAll = !showAll"
          >
            Marwari declension of noun → {{ term }}ी ( {{ trans }}ī)
          </th>
        </tr> -->
        <tr>
          <th></th>
          <th class="noun-number">singular</th>
          <th class="noun-number">plural</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="noun-case">direct</th>
          <td><span lang="mwr-Deva">{{ term }}ी</span> <span lang="mwr-Latn">{{ trans }}ī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ियाँ</span> <span lang="mwr-Latn">{{ trans }}iyā̃</span></td>
        </tr>
        <tr>
          <th class="noun-case">oblique</th>
          <td><span lang="mwr-Deva">{{ term }}ी</span> <span lang="mwr-Latn">{{ trans }}ī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ियाँ</span> <span lang="mwr-Latn">{{ trans }}iyā̃</span></td>
        </tr>
        <tr>
          <th class="noun-case">vocative</th>
          <td><span lang="mwr-Deva">{{ term }}ी</span> <span lang="mwr-Latn">{{ trans }}ī</span></td>
          <td><span lang="mwr-Deva">{{ term }}िया</span> <span lang="mwr-Latn">{{ trans }}iyā</span></td>
        </tr>
      </tbody>
    </table>

    <table v-if="grammar.noun.ending === 'ii-vowel'">
      <caption>Marwari declension of noun → <span lang="mwr-Deva">{{ term }}ई</span> (<span lang="mwr-Latn">{{ trans }}ī</span>)</caption>
      <thead>
        <!-- <tr>
          <th
            colspan="3"
            @click.prevent="showAll = !showAll"
          >
            Marwari declension of noun → {{ term }}ई ( {{ trans }}ī)
          </th>
        </tr> -->
        <tr>
          <th></th>
          <th class="noun-number">singular</th>
          <th class="noun-number">plural</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <th class="noun-case">direct</th>
          <td><span lang="mwr-Deva">{{ term }}ई</span> <span lang="mwr-Latn">{{ trans }}ī</span></td>
          <td><span lang="mwr-Deva">{{ term }}इयाँ</span> <span lang="mwr-Latn">{{ trans }}iyā̃</span></td>
        </tr>
        <tr>
          <th class="noun-case">oblique</th>
          <td><span lang="mwr-Deva">{{ term }}ई</span> <span lang="mwr-Latn">{{ trans }}ī</span></td>
          <td><span lang="mwr-Deva">{{ term }}इयाँ</span> <span lang="mwr-Latn">{{ trans }}iyā̃</span></td>
        </tr>
        <tr>
          <th class="noun-case">vocative</th>
          <td><span lang="mwr-Deva">{{ term }}ई</span> <span lang="mwr-Latn">{{ trans }}ī</span></td>
          <td><span lang="mwr-Deva">{{ term }}इया</span> <span lang="mwr-Latn">{{ trans }}iyā</span></td>
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
  }
};
</script>

<style lang="sass" src="~/assets/css/components/noun-declension.sass" scoped>
</style>