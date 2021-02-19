<template>
  <div>
    <table id="verb-conjugation">
      <thead>
        <th colspan="8">
          Conjugation of <span>{{ word }}णो</span> <span>(</span
          ><span>{{ worden }}ṇo</span><span>)</span>
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
      <tbody>
        <tr
          @click.prevent="showPerfective = !showPerfective"
          class="verb-category"
        >
          <th colspan="8">Perfective</th>
        </tr>

        <tr v-show="showPerfective">
          <th rowspan="2">Simple</th>

          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}्यो</span><br /><span>{{ worden }}yo</span>
          </td>
          <td>
            <span>{{ word }}्यो</span><br /><span>{{ worden }}yo</span>
          </td>
          <td>
            <span>{{ word }}्यो</span><br /><span>{{ worden }}yo</span>
          </td>
          <td>
            <span>{{ word }}्या</span><br /><span>{{ worden }}yā</span>
          </td>
          <td>
            <span>{{ word }}्या</span><br /><span>{{ worden }}yā</span>
          </td>
          <td>
            <span>{{ word }}्या</span><br /><span>{{ worden }}yā</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी</span><br /><span>{{ worden }}ī</span>
          </td>
          <td>
            <span>{{ word }}ी</span><br /><span>{{ worden }}ī</span>
          </td>
          <td>
            <span>{{ word }}ी</span><br /><span>{{ worden }}ī</span>
          </td>
          <td>
            <span>{{ word }}ीं</span><br /><span>{{ worden }}ī̃</span>
          </td>
          <td>
            <span>{{ word }}ीं</span><br /><span>{{ worden }}ī̃</span>
          </td>
          <td>
            <span>{{ word }}ीं</span><br /><span>{{ worden }}ī̃</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <th rowspan="2">Present</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}्यो हूँ</span><br /><span>{{ worden }}yo hū̃</span>
          </td>
          <td>
            <span>{{ word }}्यो है</span><br /><span>{{ worden }}yo hai</span>
          </td>
          <td>
            <span>{{ word }}्यो है</span><br /><span>{{ worden }}yo hai</span>
          </td>
          <td>
            <span>{{ word }}्या हां</span><br /><span>{{ worden }}yā hā̃</span>
          </td>
          <td>
            <span>{{ word }}्या हो</span><br /><span>{{ worden }}yā ho</span>
          </td>
          <td>
            <span>{{ word }}्या हां</span><br /><span>{{ worden }}yā hā̃</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी हूँ</span><br /><span>{{ worden }}ī hū̃</span>
          </td>
          <td>
            <span>{{ word }}ी है</span><br /><span>{{ worden }}ī hai</span>
          </td>
          <td>
            <span>{{ word }}ी है</span><br /><span>{{ worden }}ī hai</span>
          </td>
          <td>
            <span>{{ word }}ीं हां</span><br /><span>{{ worden }}ī̃ hā̃</span>
          </td>
          <td>
            <span>{{ word }}ीं हो</span><br /><span>{{ worden }}ī̃ ho</span>
          </td>
          <td>
            <span>{{ word }}ीं हैं</span><br /><span>{{ worden }}ī̃ ha͠i</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <th rowspan="2">Past</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}्यो थो</span><br /><span>{{ worden }}yo tho</span>
          </td>
          <td>
            <span>{{ word }}्यो थो</span><br /><span>{{ worden }}yo tho</span>
          </td>
          <td>
            <span>{{ word }}्यो थो</span><br /><span>{{ worden }}yo tho</span>
          </td>
          <td>
            <span>{{ word }}्या थां</span><br /><span>{{ worden }}yā thā̃</span>
          </td>
          <td>
            <span>{{ word }}्या था</span><br /><span>{{ worden }}yā thā</span>
          </td>
          <td>
            <span>{{ word }}्या थां</span><br /><span>{{ worden }}yā thā̃</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी थी</span><br /><span>{{ worden }}ī thī</span>
          </td>
          <td>
            <span>{{ word }}ी थी</span><br /><span>{{ worden }}ī thī</span>
          </td>
          <td>
            <span>{{ word }}ी थी</span><br /><span>{{ worden }}ī thī</span>
          </td>
          <td>
            <span>{{ word }}ीं थीं</span><br /><span>{{ worden }}ī̃ thī̃</span>
          </td>
          <td>
            <span>{{ word }}ीं थीं</span><br /><span>{{ worden }}ī̃ thī̃</span>
          </td>
          <td>
            <span>{{ word }}ीं थीं</span><br /><span>{{ worden }}ī̃ thī̃</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <th rowspan="2">Presumptive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}्यो वेऊँ</span><br /><span>{{ worden }}yo veū̃</span>
          </td>
          <td>
            <span>{{ word }}्यो वेई</span><br /><span>{{ worden }}yo veī</span>
          </td>
          <td>
            <span>{{ word }}्यो वेई</span><br /><span>{{ worden }}yo veī</span>
          </td>
          <td>
            <span>{{ word }}्या वेंवा</span><br /><span
              >{{ word }}yā vemvā</span
            >
          </td>
          <td>
            <span>{{ word }}्या वेवो</span><br /><span
              >{{ worden }}yā vevo</span
            >
          </td>
          <td>
            <span>{{ word }}्या वेंई</span><br /><span>{{ worden }}yā vẽī</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी वेऊँ</span><br /><span>{{ worden }}ī veū̃</span>
          </td>
          <td>
            <span>{{ word }}ी वेई</span><br /><span>{{ worden }}ī veī</span>
          </td>
          <td>
            <span>{{ word }}ी वेई</span><br /><span>{{ worden }}ī veī</span>
          </td>
          <td>
            <span>{{ word }}ीं वेंई</span><br /><span>{{ worden }}ī̃ vẽī</span>
          </td>
          <td>
            <span>{{ word }}ीं वेओ</span><br /><span>{{ worden }}ī̃ veo</span>
          </td>
          <td>
            <span>{{ word }}ीं वेंई</span><br /><span>{{ worden }}ī̃ vẽī</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <th rowspan="2">Subjunctive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}्यो वेऊँ</span><br /><span>{{ worden }}yo veū̃</span>
          </td>
          <td>
            <span>{{ word }}्यो वेई</span><br /><span>{{ worden }}yo veī</span>
          </td>
          <td>
            <span>{{ word }}्यो वेई</span><br /><span>{{ worden }}yo veī</span>
          </td>
          <td>
            <span>{{ word }}्या वेंवा</span><br /><span
              >{{ word }}yā vemvā</span
            >
          </td>
          <td>
            <span>{{ word }}्या वेओ</span><br /><span>{{ worden }}yā veo</span>
          </td>
          <td>
            <span>{{ word }}्या वेंई</span><br /><span>{{ worden }}yā vẽī</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी वेऊँ</span><br /><span>{{ worden }}ī veū̃</span>
          </td>
          <td>
            <span>{{ word }}ी वेई</span><br /><span>{{ worden }}ī veī</span>
          </td>
          <td>
            <span>{{ word }}ी वेई</span><br /><span>{{ worden }}ī veī</span>
          </td>
          <td>
            <span>{{ word }}ीं वेंवा</span><br /><span
              >{{ worden }}ī̃ vemvā</span
            >
          </td>
          <td>
            <span>{{ word }}ीं वेओ</span><br /><span>{{ worden }}ī̃ veo</span>
          </td>
          <td>
            <span>{{ word }}ीं वेंई</span><br /><span>{{ worden }}ī̃ vẽī</span>
          </td>
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
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}तो</span><br /><span>{{ worden }}to</span>
          </td>
          <td>
            <span>{{ word }}तो</span><br /><span>{{ worden }}to</span>
          </td>
          <td>
            <span>{{ word }}तो</span><br /><span>{{ worden }}to</span>
          </td>
          <td>
            <span>{{ word }}ता</span><br /><span>{{ worden }}tā</span>
          </td>
          <td>
            <span>{{ word }}ता</span><br /><span>{{ worden }}tā</span>
          </td>
          <td>
            <span>{{ word }}ता</span><br /><span>{{ worden }}tā</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ती</span><br /><span>{{ worden }}tī</span>
          </td>
          <td>
            <span>{{ word }}ती</span><br /><span>{{ worden }}tī</span>
          </td>
          <td>
            <span>{{ word }}ती</span><br /><span>{{ worden }}tī</span>
          </td>
          <td>
            <span>{{ word }}तीं</span><br /><span>{{ worden }}tī̃</span>
          </td>
          <td>
            <span>{{ word }}तीं</span><br /><span>{{ worden }}tī̃</span>
          </td>
          <td>
            <span>{{ word }}तीं</span><br /><span>{{ worden }}tī̃</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <th rowspan="2">Present</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}ूँ हूँ</span><br /><span>{{ worden }}ū̃ hū̃</span>
          </td>
          <td>
            <span>{{ word }}े है</span><br /><span>{{ worden }}e hai</span>
          </td>
          <td>
            <span>{{ word }}े है</span><br /><span>{{ worden }}e hai</span>
          </td>
          <td>
            <span>{{ word }}ा हां</span><br /><span>{{ worden }}ā hā̃</span>
          </td>
          <td>
            <span>{{ word }}ो हो</span><br /><span>{{ worden }}o ho</span>
          </td>
          <td>
            <span>{{ word }}े हैं</span><br /><span>{{ worden }}e ha͠i</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ूँ हूँ</span><br /><span>{{ worden }}ū̃ hū̃</span>
          </td>
          <td>
            <span>{{ word }}े है</span><br /><span>{{ worden }}e hai</span>
          </td>
          <td>
            <span>{{ word }}े है</span><br /><span>{{ worden }}e hai</span>
          </td>
          <td>
            <span>{{ word }}ांं हां</span><br /><span>{{ worden }}ā̃̃ hā̃</span>
          </td>
          <td>
            <span>{{ word }}ो हो</span><br /><span>{{ worden }}o ho</span>
          </td>
          <td>
            <span>{{ word }}े हैं</span><br /><span>{{ worden }}e ha͠i</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <th rowspan="2">Past</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}तो थो</span><br /><span>{{ worden }}to tho</span>
          </td>
          <td>
            <span>{{ word }}तो थो</span><br /><span>{{ worden }}to tho</span>
          </td>
          <td>
            <span>{{ word }}तो थो</span><br /><span>{{ worden }}to tho</span>
          </td>
          <td>
            <span>{{ word }}ता था</span><br /><span>{{ worden }}tā thā</span>
          </td>
          <td>
            <span>{{ word }}ता था</span><br /><span>{{ worden }}tā thā</span>
          </td>
          <td>
            <span>{{ word }}ता था</span><br /><span>{{ worden }}tā thā</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ती थी</span><br /><span>{{ worden }}tī thī</span>
          </td>
          <td>
            <span>{{ word }}ती थी</span><br /><span>{{ worden }}tī thī</span>
          </td>
          <td>
            <span>{{ word }}ती थी</span><br /><span>{{ worden }}tī thī</span>
          </td>
          <td>
            <span>{{ word }}तीं थीं</span><br /><span>{{ worden }}tī̃ thī̃</span>
          </td>
          <td>
            <span>{{ word }}तीं थीं</span><br /><span>{{ worden }}tī̃ thī̃</span>
          </td>
          <td>
            <span>{{ word }}तीं थीं</span><br /><span>{{ worden }}tī̃ thī̃</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <th rowspan="2">Presumptive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}तो वेऊँ</span><br /><span>{{ worden }}to veū̃</span>
          </td>
          <td>
            <span>{{ word }}तो वेई</span><br /><span>{{ word }}to veī</span>
          </td>
          <td>
            <span>{{ word }}तो वेई</span><br /><span>{{ worden }}to veī</span>
          </td>
          <td>
            <span>{{ word }}ता वेंवा</span><br /><span
              >{{ worden }}tā vemvā</span
            >
          </td>
          <td>
            <span>{{ word }}ता वेवो</span><br /><span>{{ worden }}tā vevo</span>
          </td>
          <td>
            <span>{{ word }}ता वेंई</span><br /><span>{{ worden }}tā vẽī</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ती वेऊँ</span><br /><span>{{ worden }}tī veū̃</span>
          </td>
          <td>
            <span>{{ word }}ती वेई</span><br /><span>{{ worden }}tī veī</span>
          </td>
          <td>
            <span>{{ word }}ती वेई</span><br /><span>{{ worden }}tī veī</span>
          </td>
          <td>
            <span>{{ word }}तीं वेंवा</span><br /><span
              >{{ worden }}tī̃ vemvā</span
            >
          </td>
          <td>
            <span>{{ word }}तीं वेवो</span><br /><span
              >{{ worden }}tī̃ vevo</span
            >
          </td>
          <td>
            <span>{{ word }}तीं वेंई</span><br /><span>{{ worden }}tī̃ vẽī</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <th rowspan="2">Subjunctive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}ूँ हूँ</span><br /><span>{{ worden }}ū̃ hū̃</span>
          </td>
          <td>
            <span>{{ word }}तो वेई</span><br /><span>{{ worden }}to veī</span>
          </td>
          <td>
            <span>{{ word }}तो वेई</span><br /><span>{{ worden }}to veī</span>
          </td>
          <td>
            <span>{{ word }}ता वेंवा</span><br /><span
              >{{ worden }}tā vemvā</span
            >
          </td>
          <td>
            <span>{{ word }}ता वेवो</span><br /><span>{{ worden }}tā vevo</span>
          </td>
          <td>
            <span>{{ word }}ता वेंई</span><br /><span>{{ worden }}tā vẽī</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ूँ हूँ</span><br /><span>{{ worden }}ū̃ hū̃</span>
          </td>
          <td>
            <span>{{ word }}ती वेई</span><br /><span>{{ worden }}tī veī</span>
          </td>
          <td>
            <span>{{ word }}ती वेई</span><br /><span>{{ worden }}tī veī</span>
          </td>
          <td>
            <span>{{ word }}तीं वेंवा</span><br /><span
              >{{ worden }}tī̃ vemvā</span
            >
          </td>
          <td>
            <span>{{ word }}तीं वेवो</span><br /><span
              >{{ worden }}tī̃ vevo</span
            >
          </td>
          <td>
            <span>{{ word }}तीं वेंई</span><br /><span>{{ worden }}tī̃ vẽī</span>
          </td>
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
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी रू हूँ</span><br /><span
              >{{ worden }}ī rū hū̃</span
            >
          </td>
          <td>
            <span>{{ word }}ी रो है</span><br /><span
              >{{ worden }}ī ro hai</span
            >
          </td>
          <td>
            <span>{{ word }}ी रो है</span><br /><span
              >{{ worden }}ī ro hai</span
            >
          </td>
          <td>
            <span>{{ word }}ी रा हां</span><br /><span
              >{{ worden }}ī rā hā̃</span
            >
          </td>
          <td>
            <span>{{ word }}ी रा हो</span><br /><span>{{ worden }}ī rā ho</span>
          </td>
          <td>
            <span>{{ word }}ी रा हैं</span><br /><span
              >{{ worden }}ī rā ha͠i</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी री हूँ</span><br /><span
              >{{ worden }}ī rī hū̃</span
            >
          </td>
          <td>
            <span>{{ word }}ी री है</span><br /><span
              >{{ worden }}ī rī hai</span
            >
          </td>
          <td>
            <span>{{ word }}ी री है</span><br /><span
              >{{ worden }}ī rī hai</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं हां</span><br /><span
              >{{ worden }}ī rī̃ hā̃</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं हो</span><br /><span
              >{{ worden }}ī rī̃ ho</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं हैं</span><br /><span
              >{{ worden }}ī rī̃ ha͠i</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <th rowspan="2">Past</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी रो थो</span><br /><span
              >{{ worden }}ī ro tho</span
            >
          </td>
          <td>
            <span>{{ word }}ी रो थो</span><br /><span
              >{{ worden }}ī ro tho</span
            >
          </td>
          <td>
            <span>{{ word }}ी रो थो</span><br /><span
              >{{ worden }}ī ro tho</span
            >
          </td>
          <td>
            <span>{{ word }}ी रा था</span><br /><span
              >{{ worden }}ī rā thā</span
            >
          </td>
          <td>
            <span>{{ word }}ी रा था</span><br /><span
              >{{ worden }}ī rā thā</span
            >
          </td>
          <td>
            <span>{{ word }}ी रा था</span><br /><span
              >{{ worden }}ī rā thā</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी री थी</span><br /><span
              >{{ worden }}ī rī thī</span
            >
          </td>
          <td>
            <span>{{ word }}ी री थी</span><br /><span
              >{{ worden }}ī rī thī</span
            >
          </td>
          <td>
            <span>{{ word }}ी री थी</span><br /><span
              >{{ worden }}ī rī thī</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं थीं</span><br /><span
              >{{ worden }}ī rī̃ thī̃</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं थीं</span><br /><span
              >{{ worden }}ī rī̃ thī̃</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं थीं</span><br /><span
              >{{ worden }}ī rī̃ thī̃</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <th rowspan="2">Presumptive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी रो वेऊँ</span><br /><span
              >{{ worden }}ī ro veū̃</span
            >
          </td>
          <td>
            <span>{{ word }}ी रो वेई</span><br /><span
              >{{ worden }}ī ro veī</span
            >
          </td>
          <td>
            <span>{{ word }}ी रो वेई</span><br /><span
              >{{ worden }}ī ro veī</span
            >
          </td>
          <td>
            <span>{{ word }}ी रा वेंवा</span><br /><span
              >{{ worden }}ī rā vemvā</span
            >
          </td>
          <td>
            <span>{{ word }}ी रा वेवो</span><br /><span
              >{{ worden }}ī rā vevo</span
            >
          </td>
          <td>
            <span>{{ word }}ी रा वेंई</span><br /><span
              >{{ worden }}ī rā vẽī</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी रू वेऊँ</span><br /><span
              >{{ worden }}ī rū veū̃</span
            >
          </td>
          <td>
            <span>{{ word }}ी री वेई</span><br /><span
              >{{ worden }}ī rī veī</span
            >
          </td>
          <td>
            <span>{{ word }}ी री वेई</span><br /><span
              >{{ worden }}ī rī veī</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं वेंवा</span><br /><span
              >{{ worden }}ī rī̃ vemvā</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं वेवो</span><br /><span
              >{{ worden }}ī rī̃ vevo</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं वेंई</span><br /><span
              >{{ worden }}ī rī̃ vẽī</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <th rowspan="2">Subjunctive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी रू वेऊँ</span><br /><span
              >{{ worden }}ī rū veū̃</span
            >
          </td>
          <td>
            <span>{{ word }}ी रो वेई</span><br /><span
              >{{ worden }}ī ro veī</span
            >
          </td>
          <td>
            <span>{{ word }}ी रो वेई</span><br /><span
              >{{ worden }}ī ro veī</span
            >
          </td>
          <td>
            <span>{{ word }}ी रा वेंवा</span><br /><span
              >{{ worden }}ī rā vemvā</span
            >
          </td>
          <td>
            <span>{{ word }}ी रा वेवो</span><br /><span
              >{{ worden }}ī rā vevo</span
            >
          </td>
          <td>
            <span>{{ word }}ी रा वेंई</span><br /><span
              >{{ worden }}ī rā vẽī</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ी री वेऊँ</span><br /><span
              >{{ worden }}ī rī veū̃</span
            >
          </td>
          <td>
            <span>{{ word }}ी री वेई</span><br /><span
              >{{ worden }}ī rī veī</span
            >
          </td>
          <td>
            <span>{{ word }}ी री वेई</span><br /><span
              >{{ worden }}ī rī veī</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं वेंवा</span><br /><span
              >{{ worden }}ī rī̃ vemvā</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं वेवो</span><br /><span
              >{{ worden }}ī rī̃ vevo</span
            >
          </td>
          <td>
            <span>{{ word }}ी रीं वेंई</span><br /><span
              >{{ worden }}ī rī̃ vẽī</span
            >
          </td>
        </tr>
        <tr
          @click.prevent="showNonaspectual = !showNonaspectual"
          class="verb-category"
        >
          <th colspan="8">Non-aspectual</th>
        </tr>
        <tr v-show="showNonaspectual">
          <th colspan="2">Subjunctive</th>
          <td>
            <span>{{ word }}ूँ</span><br /><span>{{ worden }}ū̃</span>
          </td>
          <td>
            <span>{{ word }}े</span><br /><span>{{ worden }}e</span>
          </td>
          <td>
            <span>{{ word }}े</span><br /><span>{{ worden }}e</span>
          </td>
          <td>
            <span>{{ word }}ांं</span><br /><span>{{ worden }}ā̃̃</span>
          </td>
          <td>
            <span>{{ word }}ो</span><br /><span>{{ worden }}o</span>
          </td>
          <td>
            <span>{{ word }}ीं</span><br /><span>{{ worden }}ī̃</span>
          </td>
        </tr>
        <tr v-show="showNonaspectual">
          <th rowspan="2">Future</th>
          <td class="gender">
            <span><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ word }}ूँला</span><br /><span>{{ worden }}ū̃lā</span>
          </td>
          <td>
            <span>{{ word }}ीला</span><br /><span>{{ worden }}īlā</span>
          </td>
          <td>
            <span>{{ word }}ीला</span><br /><span>{{ worden }}īlā</span>
          </td>
          <td>
            <span>{{ word }}ांला</span><br /><span>{{ worden }}ā̃lā</span>
          </td>
          <td>
            <span>{{ word }}ोला</span><br /><span>{{ worden }}olā</span>
          </td>
          <td>
            <span>{{ word }}ींला</span><br /><span>{{ worden }}ī̃lā</span>
          </td>
        </tr>
        <tr v-show="showNonaspectual">
          <td class="gender">
            <span><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ word }}ूँला</span><br /><span>{{ worden }}ū̃lā</span>
          </td>
          <td>
            <span>{{ word }}ीला</span><br /><span>{{ worden }}īlā</span>
          </td>
          <td>
            <span>{{ word }}ीला</span><br /><span>{{ worden }}īlā</span>
          </td>
          <td>
            <span>{{ word }}ांला</span><br /><span>{{ worden }}ā̃lā</span>
          </td>
          <td>
            <span>{{ word }}ोला</span><br /><span>{{ worden }}olā</span>
          </td>
          <td>
            <span>{{ word }}ींला</span><br /><span>{{ worden }}ī̃lā</span>
          </td>
        </tr>
        <tr v-show="showNonaspectual">
          <th colspan="2">Imperative</th>
          <td>-</td>
          <td>
            <span>{{ word }}</span
            ><br /><span>{{ worden }}</span>
          </td>
          <td>-</td>
          <td>-</td>
          <td>
            <span>{{ word }}ो</span><br /><span>{{ worden }}o</span>
          </td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: { word: String, worden: String, wordtype: String },
  data() {
    return {
      showAll: false,
      showPerfective: true,
      showImperfective: false,
      showContinuous: false,
      showNonaspectual: false,
    };
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

.verb-category {
  @apply tw-bg-pink-50;
}
.gender {
  @apply tw-bg-blue-50;
}
</style>