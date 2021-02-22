<template>
  <div>
    <table>
      <thead>
        <th colspan="8">
          Marwari declension of noun → {{ term }}णो ( {{ trans }}ṇo)
        </th>

        <tr>
          <th rowspan="3" colspan="2">Person</th>
          <th colspan="3">Singular</th>
          <th colspan="3">Plural</th>
        </tr>
        <tr>
          <th>1<sup>st</sup> person</th>
          <th>2<sup>nd</sup> person</th>
          <th>3<sup>rd</sup> person</th>
          <th>1<sup>st</sup> person</th>
          <th>2<sup>nd</sup> person</th>
          <th>3<sup>rd</sup> person</th>
        </tr>
        <tr>
          <th>मूं</th>
          <th>थूं</th>
          <th>यो/वो/या/वा</th>
          <th>आपा/मां</th>
          <th>थां</th>
          <th>ये/वे/आप</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  props: { grammar: Object },
  data() {
    return {
      term: "",
      trans: "",
    };
  },
};
</script>

<style lang="postcss" scoped>
</style>