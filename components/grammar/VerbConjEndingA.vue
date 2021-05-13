<template>
  <table id="verb-conjugation">
    <thead @click.prevent="showAll = !showAll">
      <tr>
        <th colspan="8">
          Marwari conjugation of verb → {{ term }}णो ( {{ trans }}ṇo)
        </th>
      </tr>

      <tr v-show="showAll">
        <th
          rowspan="3"
          colspan="2"
        >Person</th>
        <th colspan="3">Singular</th>
        <th colspan="3">Plural</th>
      </tr>
      <tr v-show="showAll">
        <th>1<sup>st</sup> person</th>
        <th>2<sup>nd</sup> person</th>
        <th>3<sup>rd</sup> person</th>
        <th>1<sup>st</sup> person</th>
        <th>2<sup>nd</sup> person</th>
        <th>3<sup>rd</sup> person</th>
      </tr>
      <tr v-show="showAll">
        <th>मूं</th>
        <th>थूं</th>
        <th>यो/वो/या/वा</th>
        <th>आपा/मां</th>
        <th>थां</th>
        <th>ये/वे/आप</th>
      </tr>
    </thead>
    <tbody v-show="showAll">
      <tr
        @click.prevent="showPerfective = !showPerfective"
        class="verb-category"
      >
        <th colspan="8">Perfective</th>
      </tr>

      <tr v-show="showPerfective">
        <th rowspan="2">Simple</th>

        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}्यो<br />{{ trans }}yo</td>
        <td>{{ term }}्यो<br />{{ trans }}yo</td>
        <td>{{ term }}्यो<br />{{ trans }}yo</td>
        <td>{{ term }}्या<br />{{ trans }}yā</td>
        <td>{{ term }}्या<br />{{ trans }}yā</td>
        <td>{{ term }}्या<br />{{ trans }}yā</td>
      </tr>
      <tr v-show="showPerfective">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ी<br />{{ trans }}ī</td>
        <td>{{ term }}ी<br />{{ trans }}ī</td>
        <td>{{ term }}ी<br />{{ trans }}ī</td>
        <td>{{ term }}ीं<br />{{ trans }}ī̃</td>
        <td>{{ term }}ीं<br />{{ trans }}ī̃</td>
        <td>{{ term }}ीं<br />{{ trans }}ī̃</td>
      </tr>
      <tr v-show="showPerfective">
        <th rowspan="2">Present</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}्यो हूँ<br />{{ trans }}yo hū̃</td>
        <td>{{ term }}्यो है<br />{{ trans }}yo hai</td>
        <td>{{ term }}्यो है<br />{{ trans }}yo hai</td>
        <td>{{ term }}्या हां<br />{{ trans }}yā hā̃</td>
        <td>{{ term }}्या हो<br />{{ trans }}yā ho</td>
        <td>{{ term }}्या हां<br />{{ trans }}yā hā̃</td>
      </tr>
      <tr v-show="showPerfective">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ी हूँ<br />{{ trans }}ī hū̃</td>
        <td>{{ term }}ी है<br />{{ trans }}ī hai</td>
        <td>{{ term }}ी है<br />{{ trans }}ī hai</td>
        <td>{{ term }}ीं हां<br />{{ trans }}ī̃ hā̃</td>
        <td>{{ term }}ीं हो<br />{{ trans }}ī̃ ho</td>
        <td>{{ term }}ीं हैं<br />{{ trans }}ī̃ ha͠i</td>
      </tr>
      <tr v-show="showPerfective">
        <th rowspan="2">Past</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}्यो थो<br />{{ trans }}yo tho</td>
        <td>{{ term }}्यो थो<br />{{ trans }}yo tho</td>
        <td>{{ term }}्यो थो<br />{{ trans }}yo tho</td>
        <td>{{ term }}्या थां<br />{{ trans }}yā thā̃</td>
        <td>{{ term }}्या था<br />{{ trans }}yā thā</td>
        <td>{{ term }}्या थां<br />{{ trans }}yā thā̃</td>
      </tr>
      <tr v-show="showPerfective">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ी थी<br />{{ trans }}ī thī</td>
        <td>{{ term }}ी थी<br />{{ trans }}ī thī</td>
        <td>{{ term }}ी थी<br />{{ trans }}ī thī</td>
        <td>{{ term }}ीं थीं<br />{{ trans }}ī̃ thī̃</td>
        <td>{{ term }}ीं थीं<br />{{ trans }}ī̃ thī̃</td>
        <td>{{ term }}ीं थीं<br />{{ trans }}ī̃ thī̃</td>
      </tr>
      <tr v-show="showPerfective">
        <th rowspan="2">Presumptive</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}्यो वेऊँ<br />{{ trans }}yo veū̃</td>
        <td>{{ term }}्यो वेई<br />{{ trans }}yo veī</td>
        <td>{{ term }}्यो वेई<br />{{ trans }}yo veī</td>
        <td>{{ term }}्या वेंवा<br />{{ term }}yā vemvā</td>
        <td>{{ term }}्या वेवो<br />{{ trans }}yā vevo</td>
        <td>{{ term }}्या वेंई<br />{{ trans }}yā vẽī</td>
      </tr>
      <tr v-show="showPerfective">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ी वेऊँ<br />{{ trans }}ī veū̃</td>
        <td>{{ term }}ी वेई<br />{{ trans }}ī veī</td>
        <td>{{ term }}ी वेई<br />{{ trans }}ī veī</td>
        <td>{{ term }}ीं वेंई<br />{{ trans }}ī̃ vẽī</td>
        <td>{{ term }}ीं वेओ<br />{{ trans }}ī̃ veo</td>
        <td>{{ term }}ीं वेंई<br />{{ trans }}ī̃ vẽī</td>
      </tr>
      <tr v-show="showPerfective">
        <th rowspan="2">Subjunctive</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}्यो वेऊँ<br />{{ trans }}yo veū̃</td>
        <td>{{ term }}्यो वेई<br />{{ trans }}yo veī</td>
        <td>{{ term }}्यो वेई<br />{{ trans }}yo veī</td>
        <td>{{ term }}्या वेंवा<br />{{ term }}yā vemvā</td>
        <td>{{ term }}्या वेओ<br />{{ trans }}yā veo</td>
        <td>{{ term }}्या वेंई<br />{{ trans }}yā vẽī</td>
      </tr>
      <tr v-show="showPerfective">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ी वेऊँ<br />{{ trans }}ī veū̃</td>
        <td>{{ term }}ी वेई<br />{{ trans }}ī veī</td>
        <td>{{ term }}ी वेई<br />{{ trans }}ī veī</td>
        <td>{{ term }}ीं वेंवा<br />{{ trans }}ī̃ vemvā</td>
        <td>{{ term }}ीं वेओ<br />{{ trans }}ī̃ veo</td>
        <td>{{ term }}ीं वेंई<br />{{ trans }}ī̃ vẽī</td>
      </tr>
      <tr
        @click.prevent="showImperfective = !showImperfective"
        class="verb-category"
      >
        <th colspan="8">Imperfective</th>
      </tr>
      <tr v-show="showImperfective">
        <th rowspan="2">Present</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}तो<br />{{ trans }}to</td>
        <td>{{ term }}तो<br />{{ trans }}to</td>
        <td>{{ term }}तो<br />{{ trans }}to</td>
        <td>{{ term }}ता<br />{{ trans }}tā</td>
        <td>{{ term }}ता<br />{{ trans }}tā</td>
        <td>{{ term }}ता<br />{{ trans }}tā</td>
      </tr>
      <tr v-show="showImperfective">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ती<br />{{ trans }}tī</td>
        <td>{{ term }}ती<br />{{ trans }}tī</td>
        <td>{{ term }}ती<br />{{ trans }}tī</td>
        <td>{{ term }}तीं<br />{{ trans }}tī̃</td>
        <td>{{ term }}तीं<br />{{ trans }}tī̃</td>
        <td>{{ term }}तीं<br />{{ trans }}tī̃</td>
      </tr>
      <tr v-show="showImperfective">
        <th rowspan="2">Present</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}ूँ हूँ<br />{{ trans }}ū̃ hū̃</td>
        <td>{{ term }}े है<br />{{ trans }}e hai</td>
        <td>{{ term }}े है<br />{{ trans }}e hai</td>
        <td>{{ term }}ा हां<br />{{ trans }}ā hā̃</td>
        <td>{{ term }}ो हो<br />{{ trans }}o ho</td>
        <td>{{ term }}े हैं<br />{{ trans }}e ha͠i</td>
      </tr>
      <tr v-show="showImperfective">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ूँ हूँ<br />{{ trans }}ū̃ hū̃</td>
        <td>{{ term }}े है<br />{{ trans }}e hai</td>
        <td>{{ term }}े है<br />{{ trans }}e hai</td>
        <td>{{ term }}ांं हां<br />{{ trans }}ā̃̃ hā̃</td>
        <td>{{ term }}ो हो<br />{{ trans }}o ho</td>
        <td>{{ term }}े हैं<br />{{ trans }}e ha͠i</td>
      </tr>
      <tr v-show="showImperfective">
        <th rowspan="2">Past</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}तो थो<br />{{ trans }}to tho</td>
        <td>{{ term }}तो थो<br />{{ trans }}to tho</td>
        <td>{{ term }}तो थो<br />{{ trans }}to tho</td>
        <td>{{ term }}ता था<br />{{ trans }}tā thā</td>
        <td>{{ term }}ता था<br />{{ trans }}tā thā</td>
        <td>{{ term }}ता था<br />{{ trans }}tā thā</td>
      </tr>
      <tr v-show="showImperfective">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ती थी<br />{{ trans }}tī thī</td>
        <td>{{ term }}ती थी<br />{{ trans }}tī thī</td>
        <td>{{ term }}ती थी<br />{{ trans }}tī thī</td>
        <td>{{ term }}तीं थीं<br />{{ trans }}tī̃ thī̃</td>
        <td>{{ term }}तीं थीं<br />{{ trans }}tī̃ thī̃</td>
        <td>{{ term }}तीं थीं<br />{{ trans }}tī̃ thī̃</td>
      </tr>
      <tr v-show="showImperfective">
        <th rowspan="2">Presumptive</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}तो वेऊँ<br />{{ trans }}to veū̃</td>
        <td>{{ term }}तो वेई<br />{{ term }}to veī</td>
        <td>{{ term }}तो वेई<br />{{ trans }}to veī</td>
        <td>{{ term }}ता वेंवा<br />{{ trans }}tā vemvā</td>
        <td>{{ term }}ता वेवो<br />{{ trans }}tā vevo</td>
        <td>{{ term }}ता वेंई<br />{{ trans }}tā vẽī</td>
      </tr>
      <tr v-show="showImperfective">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ती वेऊँ<br />{{ trans }}tī veū̃</td>
        <td>{{ term }}ती वेई<br />{{ trans }}tī veī</td>
        <td>{{ term }}ती वेई<br />{{ trans }}tī veī</td>
        <td>{{ term }}तीं वेंवा<br />{{ trans }}tī̃ vemvā</td>
        <td>{{ term }}तीं वेवो<br />{{ trans }}tī̃ vevo</td>
        <td>{{ term }}तीं वेंई<br />{{ trans }}tī̃ vẽī</td>
      </tr>
      <tr v-show="showImperfective">
        <th rowspan="2">Subjunctive</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}ूँ हूँ<br />{{ trans }}ū̃ hū̃</td>
        <td>{{ term }}तो वेई<br />{{ trans }}to veī</td>
        <td>{{ term }}तो वेई<br />{{ trans }}to veī</td>
        <td>{{ term }}ता वेंवा<br />{{ trans }}tā vemvā</td>
        <td>{{ term }}ता वेवो<br />{{ trans }}tā vevo</td>
        <td>{{ term }}ता वेंई<br />{{ trans }}tā vẽī</td>
      </tr>
      <tr v-show="showImperfective">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ूँ हूँ<br />{{ trans }}ū̃ hū̃</td>
        <td>{{ term }}ती वेई<br />{{ trans }}tī veī</td>
        <td>{{ term }}ती वेई<br />{{ trans }}tī veī</td>
        <td>{{ term }}तीं वेंवा<br />{{ trans }}tī̃ vemvā</td>
        <td>{{ term }}तीं वेवो<br />{{ trans }}tī̃ vevo</td>
        <td>{{ term }}तीं वेंई<br />{{ trans }}tī̃ vẽī</td>
      </tr>
      <tr
        @click.prevent="showContinuous = !showContinuous"
        class="verb-category"
      >
        <th colspan="8">Continuous</th>
      </tr>
      <tr v-show="showContinuous">
        <th rowspan="2">Present</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}ी रू हूँ<br />{{ trans }}ī rū hū̃</td>
        <td>{{ term }}ी रो है<br />{{ trans }}ī ro hai</td>
        <td>{{ term }}ी रो है<br />{{ trans }}ī ro hai</td>
        <td>{{ term }}ी रा हां<br />{{ trans }}ī rā hā̃</td>
        <td>{{ term }}ी रा हो<br />{{ trans }}ī rā ho</td>
        <td>{{ term }}ी रा हैं<br />{{ trans }}ī rā ha͠i</td>
      </tr>
      <tr v-show="showContinuous">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ी री हूँ<br />{{ trans }}ī rī hū̃</td>
        <td>{{ term }}ी री है<br />{{ trans }}ī rī hai</td>
        <td>{{ term }}ी री है<br />{{ trans }}ī rī hai</td>
        <td>{{ term }}ी रीं हां<br />{{ trans }}ī rī̃ hā̃</td>
        <td>{{ term }}ी रीं हो<br />{{ trans }}ī rī̃ ho</td>
        <td>{{ term }}ी रीं हैं<br />{{ trans }}ī rī̃ ha͠i</td>
      </tr>
      <tr v-show="showContinuous">
        <th rowspan="2">Past</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}ी रो थो<br />{{ trans }}ī ro tho</td>
        <td>{{ term }}ी रो थो<br />{{ trans }}ī ro tho</td>
        <td>{{ term }}ी रो थो<br />{{ trans }}ī ro tho</td>
        <td>{{ term }}ी रा था<br />{{ trans }}ī rā thā</td>
        <td>{{ term }}ी रा था<br />{{ trans }}ī rā thā</td>
        <td>{{ term }}ी रा था<br />{{ trans }}ī rā thā</td>
      </tr>
      <tr v-show="showContinuous">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ी री थी<br />{{ trans }}ī rī thī</td>
        <td>{{ term }}ी री थी<br />{{ trans }}ī rī thī</td>
        <td>{{ term }}ी री थी<br />{{ trans }}ī rī thī</td>
        <td>{{ term }}ी रीं थीं<br />{{ trans }}ī rī̃ thī̃</td>
        <td>{{ term }}ी रीं थीं<br />{{ trans }}ī rī̃ thī̃</td>
        <td>{{ term }}ी रीं थीं<br />{{ trans }}ī rī̃ thī̃</td>
      </tr>
      <tr v-show="showContinuous">
        <th rowspan="2">Presumptive</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}ी रो वेऊँ<br />{{ trans }}ī ro veū̃</td>
        <td>{{ term }}ी रो वेई<br />{{ trans }}ī ro veī</td>
        <td>{{ term }}ी रो वेई<br />{{ trans }}ī ro veī</td>
        <td>{{ term }}ी रा वेंवा<br />{{ trans }}ī rā vemvā</td>
        <td>{{ term }}ी रा वेवो<br />{{ trans }}ī rā vevo</td>
        <td>{{ term }}ी रा वेंई<br />{{ trans }}ī rā vẽī</td>
      </tr>
      <tr v-show="showContinuous">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ी रू वेऊँ<br />{{ trans }}ī rū veū̃</td>
        <td>{{ term }}ी री वेई<br />{{ trans }}ī rī veī</td>
        <td>{{ term }}ी री वेई<br />{{ trans }}ī rī veī</td>
        <td>{{ term }}ी रीं वेंवा<br />{{ trans }}ī rī̃ vemvā</td>
        <td>{{ term }}ी रीं वेवो<br />{{ trans }}ī rī̃ vevo</td>
        <td>{{ term }}ी रीं वेंई<br />{{ trans }}ī rī̃ vẽī</td>
      </tr>
      <tr v-show="showContinuous">
        <th rowspan="2">Subjunctive</th>
        <td class="gender">
          <abbr title="masculine gender">m</abbr>
        </td>
        <td>{{ term }}ी रू वेऊँ<br />{{ trans }}ī rū veū̃</td>
        <td>{{ term }}ी रो वेई<br />{{ trans }}ī ro veī</td>
        <td>{{ term }}ी रो वेई<br />{{ trans }}ī ro veī</td>
        <td>{{ term }}ी रा वेंवा<br />{{ trans }}ī rā vemvā</td>
        <td>{{ term }}ी रा वेवो<br />{{ trans }}ī rā vevo</td>
        <td>{{ term }}ी रा वेंई<br />{{ trans }}ī rā vẽī</td>
      </tr>
      <tr v-show="showContinuous">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ी री वेऊँ<br />{{ trans }}ī rī veū̃</td>
        <td>{{ term }}ी री वेई<br />{{ trans }}ī rī veī</td>
        <td>{{ term }}ी री वेई<br />{{ trans }}ī rī veī</td>
        <td>{{ term }}ी रीं वेंवा<br />{{ trans }}ī rī̃ vemvā</td>
        <td>{{ term }}ी रीं वेवो<br />{{ trans }}ī rī̃ vevo</td>
        <td>{{ term }}ी रीं वेंई<br />{{ trans }}ī rī̃ vẽī</td>
      </tr>
      <tr
        @click.prevent="showNonaspectual = !showNonaspectual"
        class="verb-category"
      >
        <th colspan="8">Non-aspectual</th>
      </tr>
      <tr v-show="showNonaspectual">
        <th colspan="2">Subjunctive</th>
        <td>{{ term }}ूँ<br />{{ trans }}ū̃</td>
        <td>{{ term }}े<br />{{ trans }}e</td>
        <td>{{ term }}े<br />{{ trans }}e</td>
        <td>{{ term }}ांं<br />{{ trans }}ā̃̃</td>
        <td>{{ term }}ो<br />{{ trans }}o</td>
        <td>{{ term }}ीं<br />{{ trans }}ī̃</td>
      </tr>
      <tr v-show="showNonaspectual">
        <th rowspan="2">Future</th>
        <td class="gender"><abbr title="masculine gender">m</abbr></td>
        <td>{{ term }}ूँला<br />{{ trans }}ū̃lā</td>
        <td>{{ term }}ीला<br />{{ trans }}īlā</td>
        <td>{{ term }}ीला<br />{{ trans }}īlā</td>
        <td>{{ term }}ांला<br />{{ trans }}ā̃lā</td>
        <td>{{ term }}ोला<br />{{ trans }}olā</td>
        <td>{{ term }}ींला<br />{{ trans }}ī̃lā</td>
      </tr>
      <tr v-show="showNonaspectual">
        <td class="gender">
          <abbr title="feminine gender">f</abbr>
        </td>
        <td>{{ term }}ूँला<br />{{ trans }}ū̃lā</td>
        <td>{{ term }}ीला<br />{{ trans }}īlā</td>
        <td>{{ term }}ीला<br />{{ trans }}īlā</td>
        <td>{{ term }}ांला<br />{{ trans }}ā̃lā</td>
        <td>{{ term }}ोला<br />{{ trans }}olā</td>
        <td>{{ term }}ींला<br />{{ trans }}ī̃lā</td>
      </tr>
      <tr v-show="showNonaspectual">
        <th colspan="2">Imperative</th>
        <td>-</td>
        <td>{{ term }}<br />{{ trans }}</td>
        <td>-</td>
        <td>-</td>
        <td>{{ term }}ो<br />{{ trans }}o</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: { term: String, trans: String, wordcat: String },
  data() {
    return {
      showAll: false,
      showPerfective: true,
      showImperfective: false,
      showContinuous: false,
      showNonaspectual: false
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