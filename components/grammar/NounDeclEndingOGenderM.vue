<template>
  <table>
    <caption>Marwari declension of noun → <span lang="mwr-Deva">{{ term }}ो</span> (<span lang="mwr-Latn">{{ trans }}o</span>)</caption>
    <thead>
      <!-- <tr>
        <th colspan="3">
          Marwari declension of noun → {{ term }}ो ( {{ trans }}o)
        </th>
      </tr> -->
      <tr>
        <th>&nbsp;</th>
        <th class="noun-number">singular</th>
        <th class="noun-number">plural</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="noun-case">direct</th>
        <td><span lang="mwr-Deva">{{ term }}ो</span> <span lang="mwr-Latn">{{ trans }}o</span></td>
        <td><span lang="mwr-Deva">{{ term }}ा</span> <span lang="mwr-Latn">{{ trans }}ā</span></td>
      </tr>
      <tr>
        <th class="noun-case">oblique</th>
        <td><span lang="mwr-Deva">{{ term }}ा</span> <span lang="mwr-Latn">{{ trans }}ā</span></td>
        <td><span lang="mwr-Deva">{{ term }}ा</span> <span lang="mwr-Latn">{{ trans }}ā</span></td>
      </tr>
      <tr>
        <th class="noun-case">vocative</th>
        <td><span lang="mwr-Deva">{{ term }}ा</span> <span lang="mwr-Latn">{{ trans }}ā</span></td>
        <td><span lang="mwr-Deva">{{ term }}ा</span> <span lang="mwr-Latn">{{ trans }}ā</span></td>
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

<style lang="sass" src="~/assets/css/components/noun-declension.sass" scoped>
</style>