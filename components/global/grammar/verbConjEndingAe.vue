<template>
  <div>
    <table id="verb-conjugation">
      <thead>
        <th colspan="8">
          Marwari conjugation of verb → <span>{{ term }}णो</span> <span>(</span
          ><span>{{ trans }}ṇo</span><span>)</span>
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
        <tr v-show="showPerfective" class="verb-category">
          <th colspan="8">Perfective</th>
        </tr>

        <tr v-show="showPerfective">
          <th rowspan="2">Simple</th>

          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}्यो</span><br /><span>{{ trans }}yo</span>
          </td>
          <td>
            <span>{{ term }}्यो</span><br /><span>{{ trans }}yo</span>
          </td>
          <td>
            <span>{{ term }}्यो</span><br /><span>{{ trans }}yo</span>
          </td>
          <td>
            <span>{{ term }}्या</span><br /><span>{{ trans }}yā</span>
          </td>
          <td>
            <span>{{ term }}्या</span><br /><span>{{ trans }}yā</span>
          </td>
          <td>
            <span>{{ term }}्या</span><br /><span>{{ trans }}yā</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ई</span><br /><span>{{ trans }}ī</span>
          </td>
          <td>
            <span>{{ term }}ई</span><br /><span>{{ trans }}ī</span>
          </td>
          <td>
            <span>{{ term }}ई</span><br /><span>{{ trans }}ī</span>
          </td>
          <td>
            <span>{{ term }}ईं</span><br /><span>{{ trans }}ī̃</span>
          </td>
          <td>
            <span>{{ term }}ईं</span><br /><span>{{ trans }}ī̃</span>
          </td>
          <td>
            <span>{{ term }}ईं</span><br /><span>{{ trans }}ī̃</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <th rowspan="2">Present</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}्यो हूँ</span><br /><span>{{ trans }}yo hū̃</span>
          </td>
          <td>
            <span>{{ term }}्यो है</span><br /><span>{{ trans }}yo hai</span>
          </td>
          <td>
            <span>{{ term }}्यो है</span><br /><span>{{ trans }}yo hai</span>
          </td>
          <td>
            <span>{{ term }}्या हां</span><br /><span>{{ trans }}yā hā̃</span>
          </td>
          <td>
            <span>{{ term }}्या हो</span><br /><span>{{ trans }}yā ho</span>
          </td>
          <td>
            <span>{{ term }}्या हां</span><br /><span>{{ trans }}yā hā̃</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ी हूँ</span><br /><span>{{ trans }}ī hū̃</span>
          </td>
          <td>
            <span>{{ term }}ी है</span><br /><span>{{ trans }}ī hai</span>
          </td>
          <td>
            <span>{{ term }}ी है</span><br /><span>{{ trans }}ī hai</span>
          </td>
          <td>
            <span>{{ term }}ीं हां</span><br /><span>{{ trans }}ī̃ hā̃</span>
          </td>
          <td>
            <span>{{ term }}ीं हो</span><br /><span>{{ trans }}ī̃ ho</span>
          </td>
          <td>
            <span>{{ term }}ीं हैं</span><br /><span>{{ trans }}ī̃ ha͠i</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <th rowspan="2">Past</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}्यो थो</span><br /><span>{{ trans }}yo tho</span>
          </td>
          <td>
            <span>{{ term }}्यो थो</span><br /><span>{{ trans }}yo tho</span>
          </td>
          <td>
            <span>{{ term }}्यो थो</span><br /><span>{{ trans }}yo tho</span>
          </td>
          <td>
            <span>{{ term }}्या थां</span><br /><span>{{ trans }}yā thā̃</span>
          </td>
          <td>
            <span>{{ term }}्या था</span><br /><span>{{ trans }}yā thā</span>
          </td>
          <td>
            <span>{{ term }}्या थां</span><br /><span>{{ trans }}yā thā̃</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ी थी</span><br /><span>{{ trans }}ī thī</span>
          </td>
          <td>
            <span>{{ term }}ी थी</span><br /><span>{{ trans }}ī thī</span>
          </td>
          <td>
            <span>{{ term }}ी थी</span><br /><span>{{ trans }}ī thī</span>
          </td>
          <td>
            <span>{{ term }}ीं थीं</span><br /><span>{{ trans }}ī̃ thī̃</span>
          </td>
          <td>
            <span>{{ term }}ीं थीं</span><br /><span>{{ trans }}ī̃ thī̃</span>
          </td>
          <td>
            <span>{{ term }}ीं थीं</span><br /><span>{{ trans }}ī̃ thī̃</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <th rowspan="2">Presumptive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}्यो वेऊँ</span><br /><span>{{ trans }}yo veū̃</span>
          </td>
          <td>
            <span>{{ term }}्यो वेई</span><br /><span>{{ trans }}yo veī</span>
          </td>
          <td>
            <span>{{ term }}्यो वेई</span><br /><span>{{ trans }}yo veī</span>
          </td>
          <td>
            <span>{{ term }}्या वेंवा</span><br /><span
              >{{ term }}yā vemvā</span
            >
          </td>
          <td>
            <span>{{ term }}्या वेवो</span><br /><span>{{ trans }}yā vevo</span>
          </td>
          <td>
            <span>{{ term }}्या वेंई</span><br /><span>{{ trans }}yā vẽī</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ी वेऊँ</span><br /><span>{{ trans }}ī veū̃</span>
          </td>
          <td>
            <span>{{ term }}ी वेई</span><br /><span>{{ trans }}ī veī</span>
          </td>
          <td>
            <span>{{ term }}ी वेई</span><br /><span>{{ trans }}ī veī</span>
          </td>
          <td>
            <span>{{ term }}ीं वेंई</span><br /><span>{{ trans }}ī̃ vẽī</span>
          </td>
          <td>
            <span>{{ term }}ीं वेओ</span><br /><span>{{ trans }}ī̃ veo</span>
          </td>
          <td>
            <span>{{ term }}ीं वेंई</span><br /><span>{{ trans }}ī̃ vẽī</span>
          </td>
        </tr>
        <tr v-show="showPerfective">
          <th rowspan="2">Subjunctive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term2 }}्यो वेऊँ</span><br /><span
              >{{ trans2 }}yo veū̃</span
            >
          </td>
          <td>
            <span>{{ term2 }}्यो वेई</span><br /><span>{{ trans2 }}yo veī</span>
          </td>
          <td>
            <span>{{ term2 }}्यो वेई</span><br /><span>{{ trans2 }}yo veī</span>
          </td>
          <td>
            <span>{{ term2 }}्या वेंवा</span><br /><span
              >{{ trans2 }}yā vemvā</span
            >
          </td>
          <td>
            <span>{{ term2 }}्या वेओ</span><br /><span>{{ trans2 }}yā veo</span>
          </td>
          <td>
            <span>{{ term2 }}्या वेंई</span><br /><span
              >{{ trans2 }}yā vẽī</span
            >
          </td>
        </tr>
        <tr v-show="showPerfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ई वेऊँ</span><br /><span>{{ trans }}ī veū̃</span>
          </td>
          <td>
            <span>{{ term }}ई वेई</span><br /><span>{{ trans }}ī veī</span>
          </td>
          <td>
            <span>{{ term }}ई वेई</span><br /><span>{{ trans }}ī veī</span>
          </td>
          <td>
            <span>{{ term }}ईं वेंवा</span><br /><span>{{ trans }}ī̃ vemvā</span>
          </td>
          <td>
            <span>{{ term }}ईं वेओ</span><br /><span>{{ trans }}ī̃ veo</span>
          </td>
          <td>
            <span>{{ term }}ईं वेंई</span><br /><span>{{ trans }}ī̃ vẽī</span>
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
            <span>{{ term }}तो</span><br /><span>{{ trans }}to</span>
          </td>
          <td>
            <span>{{ term }}तो</span><br /><span>{{ trans }}to</span>
          </td>
          <td>
            <span>{{ term }}तो</span><br /><span>{{ trans }}to</span>
          </td>
          <td>
            <span>{{ term }}ता</span><br /><span>{{ trans }}tā</span>
          </td>
          <td>
            <span>{{ term }}ता</span><br /><span>{{ trans }}tā</span>
          </td>
          <td>
            <span>{{ term }}ता</span><br /><span>{{ trans }}tā</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ती</span><br /><span>{{ trans }}tī</span>
          </td>
          <td>
            <span>{{ term }}ती</span><br /><span>{{ trans }}tī</span>
          </td>
          <td>
            <span>{{ term }}ती</span><br /><span>{{ trans }}tī</span>
          </td>
          <td>
            <span>{{ term }}तीं</span><br /><span>{{ trans }}tī̃</span>
          </td>
          <td>
            <span>{{ term }}तीं</span><br /><span>{{ trans }}tī̃</span>
          </td>
          <td>
            <span>{{ term }}तीं</span><br /><span>{{ trans }}tī̃</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <th rowspan="2">Present</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}ऊँ हूँ</span><br /><span>{{ trans }}ū̃ hū̃</span>
          </td>
          <td>
            <span>{{ term }}वे है</span><br /><span>{{ trans }}e hai</span>
          </td>
          <td>
            <span>{{ term }}वे है</span><br /><span>{{ trans }}e hai</span>
          </td>
          <td>
            <span>{{ term }}वा हां</span><br /><span>{{ trans }}ā hā̃</span>
          </td>
          <td>
            <span>{{ term }}ओ हो</span><br /><span>{{ trans }}o ho</span>
          </td>
          <td>
            <span>{{ term }}वे हैं</span><br /><span>{{ trans }}e ha͠i</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ऊँ हूँ</span><br /><span>{{ trans }}ū̃ hū̃</span>
          </td>
          <td>
            <span>{{ term }}वे है</span><br /><span>{{ trans }}e hai</span>
          </td>
          <td>
            <span>{{ term }}वे है</span><br /><span>{{ trans }}e hai</span>
          </td>
          <td>
            <span>{{ term }}वां हां</span><br /><span>{{ trans }}ā̃̃ hā̃</span>
          </td>
          <td>
            <span>{{ term }}ओ हो</span><br /><span>{{ trans }}o ho</span>
          </td>
          <td>
            <span>{{ term }}वे हैं</span><br /><span>{{ trans }}e ha͠i</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <th rowspan="2">Past</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}तो थो</span><br /><span>{{ trans }}to tho</span>
          </td>
          <td>
            <span>{{ term }}तो थो</span><br /><span>{{ trans }}to tho</span>
          </td>
          <td>
            <span>{{ term }}तो थो</span><br /><span>{{ trans }}to tho</span>
          </td>
          <td>
            <span>{{ term }}ता था</span><br /><span>{{ trans }}tā thā</span>
          </td>
          <td>
            <span>{{ term }}ता था</span><br /><span>{{ trans }}tā thā</span>
          </td>
          <td>
            <span>{{ term }}ता था</span><br /><span>{{ trans }}tā thā</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ती थी</span><br /><span>{{ trans }}tī thī</span>
          </td>
          <td>
            <span>{{ term }}ती थी</span><br /><span>{{ trans }}tī thī</span>
          </td>
          <td>
            <span>{{ term }}ती थी</span><br /><span>{{ trans }}tī thī</span>
          </td>
          <td>
            <span>{{ term }}तीं थीं</span><br /><span>{{ trans }}tī̃ thī̃</span>
          </td>
          <td>
            <span>{{ term }}तीं थीं</span><br /><span>{{ trans }}tī̃ thī̃</span>
          </td>
          <td>
            <span>{{ term }}तीं थीं</span><br /><span>{{ trans }}tī̃ thī̃</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <th rowspan="2">Presumptive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}तो वेऊँ</span><br /><span>{{ trans }}to veū̃</span>
          </td>
          <td>
            <span>{{ term }}तो वेई</span><br /><span>{{ term }}to veī</span>
          </td>
          <td>
            <span>{{ term }}तो वेई</span><br /><span>{{ trans }}to veī</span>
          </td>
          <td>
            <span>{{ term }}ता वेंवा</span><br /><span
              >{{ trans }}tā vemvā</span
            >
          </td>
          <td>
            <span>{{ term }}ता वेवो</span><br /><span>{{ trans }}tā vevo</span>
          </td>
          <td>
            <span>{{ term }}ता वेंई</span><br /><span>{{ trans }}tā vẽī</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ती वेऊँ</span><br /><span>{{ trans }}tī veū̃</span>
          </td>
          <td>
            <span>{{ term }}ती वेई</span><br /><span>{{ trans }}tī veī</span>
          </td>
          <td>
            <span>{{ term }}ती वेई</span><br /><span>{{ trans }}tī veī</span>
          </td>
          <td>
            <span>{{ term }}तीं वेंवा</span><br /><span
              >{{ trans }}tī̃ vemvā</span
            >
          </td>
          <td>
            <span>{{ term }}तीं वेवो</span><br /><span>{{ trans }}tī̃ vevo</span>
          </td>
          <td>
            <span>{{ term }}तीं वेंई</span><br /><span>{{ trans }}tī̃ vẽī</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <th rowspan="2">Subjunctive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}ऊँ हूँ</span><br /><span>{{ trans }}ū̃ hū̃</span>
          </td>
          <td>
            <span>{{ term }}तो वेई</span><br /><span>{{ trans }}to veī</span>
          </td>
          <td>
            <span>{{ term }}तो वेई</span><br /><span>{{ trans }}to veī</span>
          </td>
          <td>
            <span>{{ term }}ता वेंवा</span><br /><span
              >{{ trans }}tā vemvā</span
            >
          </td>
          <td>
            <span>{{ term }}ता वेवो</span><br /><span>{{ trans }}tā vevo</span>
          </td>
          <td>
            <span>{{ term }}ता वेंई</span><br /><span>{{ trans }}tā vẽī</span>
          </td>
        </tr>
        <tr v-show="showImperfective">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ूँ हूँ</span><br /><span>{{ trans }}ū̃ hū̃</span>
          </td>
          <td>
            <span>{{ term }}ती वेई</span><br /><span>{{ trans }}tī veī</span>
          </td>
          <td>
            <span>{{ term }}ती वेई</span><br /><span>{{ trans }}tī veī</span>
          </td>
          <td>
            <span>{{ term }}तीं वेंवा</span><br /><span
              >{{ trans }}tī̃ vemvā</span
            >
          </td>
          <td>
            <span>{{ term }}तीं वेवो</span><br /><span>{{ trans }}tī̃ vevo</span>
          </td>
          <td>
            <span>{{ term }}तीं वेंई</span><br /><span>{{ trans }}tī̃ vẽī</span>
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
            <span>{{ term }}ई रू हूँ</span><br /><span>{{ trans }}ī rū hū̃</span>
          </td>
          <td>
            <span>{{ term }}ई रो है</span><br /><span>{{ trans }}ī ro hai</span>
          </td>
          <td>
            <span>{{ term }}ई रो है</span><br /><span>{{ trans }}ī ro hai</span>
          </td>
          <td>
            <span>{{ term }}ई रा हां</span><br /><span>{{ trans }}ī rā hā̃</span>
          </td>
          <td>
            <span>{{ term }}ई रा हो</span><br /><span>{{ trans }}ī rā ho</span>
          </td>
          <td>
            <span>{{ term }}ई रा हैं</span><br /><span
              >{{ trans }}ī rā ha͠i</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ई री हूँ</span><br /><span>{{ trans }}ī rī hū̃</span>
          </td>
          <td>
            <span>{{ term }}ई री है</span><br /><span>{{ trans }}ī rī hai</span>
          </td>
          <td>
            <span>{{ term }}ई री है</span><br /><span>{{ trans }}ī rī hai</span>
          </td>
          <td>
            <span>{{ term }}ई रीं हां</span><br /><span
              >{{ trans }}ī rī̃ hā̃</span
            >
          </td>
          <td>
            <span>{{ term }}ई रीं हो</span><br /><span>{{ trans }}ī rī̃ ho</span>
          </td>
          <td>
            <span>{{ term }}ई रीं हैं</span><br /><span
              >{{ trans }}ī rī̃ ha͠i</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <th rowspan="2">Past</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}ई रो थो</span><br /><span>{{ trans }}ī ro tho</span>
          </td>
          <td>
            <span>{{ term }}ई रो थो</span><br /><span>{{ trans }}ī ro tho</span>
          </td>
          <td>
            <span>{{ term }}ई रो थो</span><br /><span>{{ trans }}ī ro tho</span>
          </td>
          <td>
            <span>{{ term }}ई रा था</span><br /><span>{{ trans }}ī rā thā</span>
          </td>
          <td>
            <span>{{ term }}ई रा था</span><br /><span>{{ trans }}ī rā thā</span>
          </td>
          <td>
            <span>{{ term }}ई रा था</span><br /><span>{{ trans }}ī rā thā</span>
          </td>
        </tr>
        <tr v-show="showContinuous">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ई री थी</span><br /><span>{{ trans }}ī rī thī</span>
          </td>
          <td>
            <span>{{ term }}ई री थी</span><br /><span>{{ trans }}ī rī thī</span>
          </td>
          <td>
            <span>{{ term }}ई री थी</span><br /><span>{{ trans }}ī rī thī</span>
          </td>
          <td>
            <span>{{ term }}ई रीं थीं</span><br /><span
              >{{ trans }}ī rī̃ thī̃</span
            >
          </td>
          <td>
            <span>{{ term }}ई रीं थीं</span><br /><span
              >{{ trans }}ī rī̃ thī̃</span
            >
          </td>
          <td>
            <span>{{ term }}ई रीं थीं</span><br /><span
              >{{ trans }}ī rī̃ thī̃</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <th rowspan="2">Presumptive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}ई रो वेऊँ</span><br /><span
              >{{ trans }}ī ro veū̃</span
            >
          </td>
          <td>
            <span>{{ term }}ई रो वेई</span><br /><span
              >{{ trans }}ī ro veī</span
            >
          </td>
          <td>
            <span>{{ term }}ई रो वेई</span><br /><span
              >{{ trans }}ī ro veī</span
            >
          </td>
          <td>
            <span>{{ term }}ई रा वेंवा</span><br /><span
              >{{ trans }}ī rā vemvā</span
            >
          </td>
          <td>
            <span>{{ term }}ई रा वेवो</span><br /><span
              >{{ trans }}ī rā vevo</span
            >
          </td>
          <td>
            <span>{{ term }}ई रा वेंई</span><br /><span
              >{{ trans }}ī rā vẽī</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ई रू वेऊँ</span><br /><span
              >{{ trans }}ī rū veū̃</span
            >
          </td>
          <td>
            <span>{{ term }}ई री वेई</span><br /><span
              >{{ trans }}ī rī veī</span
            >
          </td>
          <td>
            <span>{{ term }}ई री वेई</span><br /><span
              >{{ trans }}ī rī veī</span
            >
          </td>
          <td>
            <span>{{ term }}ई रीं वेंवा</span><br /><span
              >{{ trans }}ī rī̃ vemvā</span
            >
          </td>
          <td>
            <span>{{ term }}ई रीं वेवो</span><br /><span
              >{{ trans }}ī rī̃ vevo</span
            >
          </td>
          <td>
            <span>{{ term }}ई रीं वेंई</span><br /><span
              >{{ trans }}ī rī̃ vẽī</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <th rowspan="2">Subjunctive</th>
          <td class="gender">
            <span class="gender"><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}ई रू वेऊँ</span><br /><span
              >{{ trans }}ī rū veū̃</span
            >
          </td>
          <td>
            <span>{{ term }}ई रो वेई</span><br /><span
              >{{ trans }}ī ro veī</span
            >
          </td>
          <td>
            <span>{{ term }}ई रो वेई</span><br /><span
              >{{ trans }}ī ro veī</span
            >
          </td>
          <td>
            <span>{{ term }}ई रा वेंवा</span><br /><span
              >{{ trans }}ī rā vemvā</span
            >
          </td>
          <td>
            <span>{{ term }}ई रा वेवो</span><br /><span
              >{{ trans }}ī rā vevo</span
            >
          </td>
          <td>
            <span>{{ term }}ई रा वेंई</span><br /><span
              >{{ trans }}ī rā vẽī</span
            >
          </td>
        </tr>
        <tr v-show="showContinuous">
          <td class="gender">
            <span class="gender"><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ई री वेऊँ</span><br /><span
              >{{ trans }}ī rī veū̃</span
            >
          </td>
          <td>
            <span>{{ term }}ई री वेई</span><br /><span
              >{{ trans }}ī rī veī</span
            >
          </td>
          <td>
            <span>{{ term }}ई री वेई</span><br /><span
              >{{ trans }}ī rī veī</span
            >
          </td>
          <td>
            <span>{{ term }}ई रीं वेंवा</span><br /><span
              >{{ trans }}ī rī̃ vemvā</span
            >
          </td>
          <td>
            <span>{{ term }}ई रीं वेवो</span><br /><span
              >{{ trans }}ī rī̃ vevo</span
            >
          </td>
          <td>
            <span>{{ term }}ई रीं वेंई</span><br /><span
              >{{ trans }}ī rī̃ vẽī</span
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
            <span>{{ term }}ऊँ</span><br /><span>{{ trans }}ū̃</span>
          </td>
          <td>
            <span>{{ term }}</span
            ><br /><span>{{ trans }}</span>
          </td>
          <td>
            <span>{{ term }}</span
            ><br /><span>{{ trans }}</span>
          </td>
          <td>
            <span>{{ term }}वां</span><br /><span>{{ trans }}vā̃̃</span>
          </td>
          <td>
            <span>{{ term }}ओ</span><br /><span>{{ trans }}o</span>
          </td>
          <td>
            <span>{{ term }}ईं</span><br /><span>{{ trans }}ī̃</span>
          </td>
        </tr>
        <tr v-show="showNonaspectual">
          <th rowspan="2">Future</th>
          <td class="gender">
            <span><abbr title="masculine gender">m</abbr></span>
          </td>
          <td>
            <span>{{ term }}ऊँला</span><br /><span>{{ trans }}ū̃lā</span>
          </td>
          <td>
            <span>{{ term }}ईला</span><br /><span>{{ trans }}īlā</span>
          </td>
          <td>
            <span>{{ term }}ईला</span><br /><span>{{ trans }}īlā</span>
          </td>
          <td>
            <span>{{ term }}वांला</span><br /><span>{{ trans }}vā̃lā</span>
          </td>
          <td>
            <span>{{ term }}ओला</span><br /><span>{{ trans }}olā</span>
          </td>
          <td>
            <span>{{ term }}ईंला</span><br /><span>{{ trans }}ī̃lā</span>
          </td>
        </tr>
        <tr v-show="showNonaspectual">
          <td class="gender">
            <span><abbr title="feminine gender">f</abbr></span>
          </td>
          <td>
            <span>{{ term }}ऊँला</span><br /><span>{{ trans }}ū̃lā</span>
          </td>
          <td>
            <span>{{ term }}ईला</span><br /><span>{{ trans }}īlā</span>
          </td>
          <td>
            <span>{{ term }}ईला</span><br /><span>{{ trans }}īlā</span>
          </td>
          <td>
            <span>{{ term }}वांला</span><br /><span>{{ trans }}vā̃lā</span>
          </td>
          <td>
            <span>{{ term }}ओला</span><br /><span>{{ trans }}olā</span>
          </td>
          <td>
            <span>{{ term }}ईंला</span><br /><span>{{ trans }}ī̃lā</span>
          </td>
        </tr>
        <tr v-show="showNonaspectual">
          <th colspan="2">Imperative</th>
          <td>-</td>
          <td>
            <span>{{ term }}</span
            ><br /><span>{{ trans }}</span>
          </td>
          <td>-</td>
          <td>-</td>
          <td>
            <span>{{ term }}ओ</span><br /><span>{{ trans }}o</span>
          </td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    term: String,
    trans: String,
    wordcat: String,
    term2: String,
    trans2: String,
  },
  data() {
    return {
      showAll: false,
      showPerfective: false,
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