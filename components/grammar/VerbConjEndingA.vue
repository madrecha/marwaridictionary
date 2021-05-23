<template>
  <!-- e.g. भागणो (to run), जिमणो (to eat) -->
  <div class="verb-conj-wrapper-div">
    <table>
      <caption>Marwari conjugation of verb → <span lang="mwr-Deva">{{ term }}णो</span> <span lang="mwr-Latn">({{ trans }}ṇo)</span>
        <div>
          <!-- <button @click="showAll = !toggleAll">{{showAll ? `Close` : `Open`}} all</button> -->
          <button
            v-if="verbCategories.showPerfective"
            @click="togglePerfective = !togglePerfective"
          >{{togglePerfective ? `✅ Perfective`: `Perfective`}}</button>
          <button
            v-if="verbCategories.showImperfective"
            @click="toggleImperfective = !toggleImperfective"
          >{{toggleImperfective ? `✅ Imperfective`: `Imperfective`}}</button>
          <button
            v-if="verbCategories.showContinuous"
            @click="toggleContinuous = !toggleContinuous"
          >{{toggleContinuous ? `✅ Continuous`: `Continuous`}}</button>
          <button
            v-if="verbCategories.showNonaspectual"
            @click="toggleNonaspectual = !toggleNonaspectual"
          >{{toggleNonaspectual ? `✅ Non-aspectual`: `Non-aspectual`}}</button>
        </div>
        <p><span class="tw-text-sm tw-text-yellow-800">by Manas Madrecha</span></p>
      </caption>
      <thead>
        <!-- <tr>
        <th colspan="8">
          Marwari conjugation of verb → <span lang="mwr-Deva">{{ term }}णो ( <span lang="mwr-Latn">{{ trans }}ṇo)
        </th>
      </tr> -->
        <tr class="row-verb-number">
          <th
            rowspan="3"
            colspan="2"
          >Person</th>
          <th colspan="3">Singular</th>
          <th colspan="3">Plural</th>
        </tr>
        <tr class="row-person-en">
          <th>1<sup>st</sup> <span class="tw-text-sm md:tw-text-base">person</span></th>
          <th>2<sup>nd</sup> <span class="tw-text-sm md:tw-text-base">person</span></th>
          <th>3<sup>rd</sup> <span class="tw-text-sm md:tw-text-base">person</span></th>
          <th>1<sup>st</sup> <span class="tw-text-sm md:tw-text-base">person</span></th>
          <th>2<sup>nd</sup> <span class="tw-text-sm md:tw-text-base">person</span></th>
          <th>3<sup>rd</sup> <span class="tw-text-sm md:tw-text-base">person</span></th>
        </tr>
        <tr class="row-person-mwr">
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
          v-if="verbCategories.showPerfective"
          @click="togglePerfective = !togglePerfective"
        >
          <th
            colspan="8"
            class="verb-category"
          >Perfective</th>
        </tr>

        <tr
          v-show="togglePerfective || toggleAll"
          v-if="verbCategories.showPerfective"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Simple</th>

          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}्यो</span><br /><span lang="mwr-Latn">{{ trans }}yo</span></td>
          <td><span lang="mwr-Deva">{{ term }}्यो</span><br /><span lang="mwr-Latn">{{ trans }}yo</span></td>
          <td><span lang="mwr-Deva">{{ term }}्यो</span><br /><span lang="mwr-Latn">{{ trans }}yo</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या</span><br /><span lang="mwr-Latn">{{ trans }}yā</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या</span><br /><span lang="mwr-Latn">{{ trans }}yā</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या</span><br /><span lang="mwr-Latn">{{ trans }}yā</span></td>
        </tr>
        <tr
          v-show="togglePerfective || toggleAll"
          v-if="verbCategories.showPerfective"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी</span><br /><span lang="mwr-Latn">{{ trans }}ī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी</span><br /><span lang="mwr-Latn">{{ trans }}ī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी</span><br /><span lang="mwr-Latn">{{ trans }}ī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं</span><br /><span lang="mwr-Latn">{{ trans }}ī̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं</span><br /><span lang="mwr-Latn">{{ trans }}ī̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं</span><br /><span lang="mwr-Latn">{{ trans }}ī̃</span></td>
        </tr>
        <tr
          v-show="togglePerfective || toggleAll"
          v-if="verbCategories.showPerfective"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Present</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}्यो हूँ</span><br /><span lang="mwr-Latn">{{ trans }}yo hū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}्यो है</span><br /><span lang="mwr-Latn">{{ trans }}yo hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}्यो है</span><br /><span lang="mwr-Latn">{{ trans }}yo hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या हां</span><br /><span lang="mwr-Latn">{{ trans }}yā hā̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या हो</span><br /><span lang="mwr-Latn">{{ trans }}yā ho</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या हां</span><br /><span lang="mwr-Latn">{{ trans }}yā hā̃</span></td>
        </tr>
        <tr
          v-show="togglePerfective || toggleAll"
          v-if="verbCategories.showPerfective"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी हूँ</span><br /><span lang="mwr-Latn">{{ trans }}ī hū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी है</span><br /><span lang="mwr-Latn">{{ trans }}ī hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी है</span><br /><span lang="mwr-Latn">{{ trans }}ī hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं हां</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ hā̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं हो</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ ho</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं हैं</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ ha͠i</span></td>
        </tr>
        <tr
          v-show="togglePerfective || toggleAll"
          v-if="verbCategories.showPerfective"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Past</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}्यो थो</span><br /><span lang="mwr-Latn">{{ trans }}yo tho</span></td>
          <td><span lang="mwr-Deva">{{ term }}्यो थो</span><br /><span lang="mwr-Latn">{{ trans }}yo tho</span></td>
          <td><span lang="mwr-Deva">{{ term }}्यो थो</span><br /><span lang="mwr-Latn">{{ trans }}yo tho</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या थां</span><br /><span lang="mwr-Latn">{{ trans }}yā thā̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या था</span><br /><span lang="mwr-Latn">{{ trans }}yā thā</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या थां</span><br /><span lang="mwr-Latn">{{ trans }}yā thā̃</span></td>
        </tr>
        <tr
          v-show="togglePerfective || toggleAll"
          v-if="verbCategories.showPerfective"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी थी</span><br /><span lang="mwr-Latn">{{ trans }}ī thī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी थी</span><br /><span lang="mwr-Latn">{{ trans }}ī thī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी थी</span><br /><span lang="mwr-Latn">{{ trans }}ī thī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं थीं</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ thī̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं थीं</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ thī̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं थीं</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ thī̃</span></td>
        </tr>
        <tr
          v-show="togglePerfective || toggleAll"
          v-if="verbCategories.showPerfective"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Presumptive</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}्यो वेऊँ</span><br /><span lang="mwr-Latn">{{ trans }}yo veū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}्यो वेई</span><br /><span lang="mwr-Latn">{{ trans }}yo veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}्यो वेई</span><br /><span lang="mwr-Latn">{{ trans }}yo veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या वेंवा</span><br /><span lang="mwr-Latn">{{ trans }}yā vemvā</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या वेवो</span><br /><span lang="mwr-Latn">{{ trans }}yā vevo</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या वेंई</span><br /><span lang="mwr-Latn">{{ trans }}yā vẽī</span></td>
        </tr>
        <tr
          v-show="togglePerfective || toggleAll"
          v-if="verbCategories.showPerfective"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी वेऊँ</span><br /><span lang="mwr-Latn">{{ trans }}ī veū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं वेंई</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ vẽī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं वेओ</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ veo</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं वेंई</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ vẽī</span></td>
        </tr>
        <tr
          v-show="togglePerfective || toggleAll"
          v-if="verbCategories.showPerfective"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Subjunctive</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}्यो वेऊँ</span><br /><span lang="mwr-Latn">{{ trans }}yo veū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}्यो वेई</span><br /><span lang="mwr-Latn">{{ trans }}yo veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}्यो वेई</span><br /><span lang="mwr-Latn">{{ trans }}yo veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या वेंवा</span><br /><span lang="mwr-Latn">{{ trans }}yā vemvā</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या वेओ</span><br /><span lang="mwr-Latn">{{ trans }}yā veo</span></td>
          <td><span lang="mwr-Deva">{{ term }}्या वेंई</span><br /><span lang="mwr-Latn">{{ trans }}yā vẽī</span></td>
        </tr>
        <tr
          v-show="togglePerfective || toggleAll"
          v-if="verbCategories.showPerfective"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी वेऊँ</span><br /><span lang="mwr-Latn">{{ trans }}ī veū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं वेंवा</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ vemvā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं वेओ</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ veo</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं वेंई</span><br /><span lang="mwr-Latn">{{ trans }}ī̃ vẽī</span></td>
        </tr>
        <tr
          v-if="verbCategories.showImperfective"
          @click="toggleImperfective = !toggleImperfective"
        >
          <th
            colspan="8"
            class="verb-category"
          >Imperfective</th>
        </tr>
        <tr
          v-show="toggleImperfective || toggleAll"
          v-if="verbCategories.showImperfective"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Present</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}तो</span><br /><span lang="mwr-Latn">{{ trans }}to</span></td>
          <td><span lang="mwr-Deva">{{ term }}तो</span><br /><span lang="mwr-Latn">{{ trans }}to</span></td>
          <td><span lang="mwr-Deva">{{ term }}तो</span><br /><span lang="mwr-Latn">{{ trans }}to</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता</span><br /><span lang="mwr-Latn">{{ trans }}tā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता</span><br /><span lang="mwr-Latn">{{ trans }}tā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता</span><br /><span lang="mwr-Latn">{{ trans }}tā</span></td>
        </tr>
        <tr
          v-show="toggleImperfective || toggleAll"
          v-if="verbCategories.showImperfective"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ती</span><br /><span lang="mwr-Latn">{{ trans }}tī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ती</span><br /><span lang="mwr-Latn">{{ trans }}tī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ती</span><br /><span lang="mwr-Latn">{{ trans }}tī</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं</span><br /><span lang="mwr-Latn">{{ trans }}tī̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं</span><br /><span lang="mwr-Latn">{{ trans }}tī̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं</span><br /><span lang="mwr-Latn">{{ trans }}tī̃</span></td>
        </tr>
        <tr
          v-show="toggleImperfective || toggleAll"
          v-if="verbCategories.showImperfective"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Present</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ूँ हूँ</span><br /><span lang="mwr-Latn">{{ trans }}ū̃ hū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}े है</span><br /><span lang="mwr-Latn">{{ trans }}e hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}े है</span><br /><span lang="mwr-Latn">{{ trans }}e hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}ा हां</span><br /><span lang="mwr-Latn">{{ trans }}ā hā̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ो हो</span><br /><span lang="mwr-Latn">{{ trans }}o ho</span></td>
          <td><span lang="mwr-Deva">{{ term }}े हैं</span><br /><span lang="mwr-Latn">{{ trans }}e ha͠i</span></td>
        </tr>
        <tr
          v-show="toggleImperfective || toggleAll"
          v-if="verbCategories.showImperfective"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ूँ हूँ</span><br /><span lang="mwr-Latn">{{ trans }}ū̃ hū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}े है</span><br /><span lang="mwr-Latn">{{ trans }}e hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}े है</span><br /><span lang="mwr-Latn">{{ trans }}e hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}ांं हां</span><br /><span lang="mwr-Latn">{{ trans }}ā̃̃ hā̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ो हो</span><br /><span lang="mwr-Latn">{{ trans }}o ho</span></td>
          <td><span lang="mwr-Deva">{{ term }}े हैं</span><br /><span lang="mwr-Latn">{{ trans }}e ha͠i</span></td>
        </tr>
        <tr
          v-show="toggleImperfective || toggleAll"
          v-if="verbCategories.showImperfective"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Past</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}तो थो</span><br /><span lang="mwr-Latn">{{ trans }}to tho</span></td>
          <td><span lang="mwr-Deva">{{ term }}तो थो</span><br /><span lang="mwr-Latn">{{ trans }}to tho</span></td>
          <td><span lang="mwr-Deva">{{ term }}तो थो</span><br /><span lang="mwr-Latn">{{ trans }}to tho</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता था</span><br /><span lang="mwr-Latn">{{ trans }}tā thā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता था</span><br /><span lang="mwr-Latn">{{ trans }}tā thā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता था</span><br /><span lang="mwr-Latn">{{ trans }}tā thā</span></td>
        </tr>
        <tr
          v-show="toggleImperfective || toggleAll"
          v-if="verbCategories.showImperfective"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ती थी</span><br /><span lang="mwr-Latn">{{ trans }}tī thī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ती थी</span><br /><span lang="mwr-Latn">{{ trans }}tī thī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ती थी</span><br /><span lang="mwr-Latn">{{ trans }}tī thī</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं थीं</span><br /><span lang="mwr-Latn">{{ trans }}tī̃ thī̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं थीं</span><br /><span lang="mwr-Latn">{{ trans }}tī̃ thī̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं थीं</span><br /><span lang="mwr-Latn">{{ trans }}tī̃ thī̃</span></td>
        </tr>
        <tr
          v-show="toggleImperfective || toggleAll"
          v-if="verbCategories.showImperfective"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Presumptive</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}तो वेऊँ</span><br /><span lang="mwr-Latn">{{ trans }}to veū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}तो वेई</span><br /><span lang="mwr-Latn">{{ trans }}to veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}तो वेई</span><br /><span lang="mwr-Latn">{{ trans }}to veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता वेंवा</span><br /><span lang="mwr-Latn">{{ trans }}tā vemvā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता वेवो</span><br /><span lang="mwr-Latn">{{ trans }}tā vevo</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता वेंई</span><br /><span lang="mwr-Latn">{{ trans }}tā vẽī</span></td>
        </tr>
        <tr
          v-show="toggleImperfective || toggleAll"
          v-if="verbCategories.showImperfective"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ती वेऊँ</span><br /><span lang="mwr-Latn">{{ trans }}tī veū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ती वेई</span><br /><span lang="mwr-Latn">{{ trans }}tī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ती वेई</span><br /><span lang="mwr-Latn">{{ trans }}tī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं वेंवा</span><br /><span lang="mwr-Latn">{{ trans }}tī̃ vemvā</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं वेवो</span><br /><span lang="mwr-Latn">{{ trans }}tī̃ vevo</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं वेंई</span><br /><span lang="mwr-Latn">{{ trans }}tī̃ vẽī</span></td>
        </tr>
        <tr
          v-show="toggleImperfective || toggleAll"
          v-if="verbCategories.showImperfective"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Subjunctive</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ूँ हूँ</span><br /><span lang="mwr-Latn">{{ trans }}ū̃ hū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}तो वेई</span><br /><span lang="mwr-Latn">{{ trans }}to veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}तो वेई</span><br /><span lang="mwr-Latn">{{ trans }}to veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता वेंवा</span><br /><span lang="mwr-Latn">{{ trans }}tā vemvā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता वेवो</span><br /><span lang="mwr-Latn">{{ trans }}tā vevo</span></td>
          <td><span lang="mwr-Deva">{{ term }}ता वेंई</span><br /><span lang="mwr-Latn">{{ trans }}tā vẽī</span></td>
        </tr>
        <tr
          v-show="toggleImperfective || toggleAll"
          v-if="verbCategories.showImperfective"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ूँ हूँ</span><br /><span lang="mwr-Latn">{{ trans }}ū̃ hū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ती वेई</span><br /><span lang="mwr-Latn">{{ trans }}tī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ती वेई</span><br /><span lang="mwr-Latn">{{ trans }}tī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं वेंवा</span><br /><span lang="mwr-Latn">{{ trans }}tī̃ vemvā</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं वेवो</span><br /><span lang="mwr-Latn">{{ trans }}tī̃ vevo</span></td>
          <td><span lang="mwr-Deva">{{ term }}तीं वेंई</span><br /><span lang="mwr-Latn">{{ trans }}tī̃ vẽī</span></td>
        </tr>
        <tr
          v-if="verbCategories.showContinuous"
          @click="toggleContinuous = !toggleContinuous"
        >
          <th
            colspan="8"
            class="verb-category"
          >Continuous</th>
        </tr>
        <tr
          v-show="toggleContinuous || toggleAll"
          v-if="verbCategories.showContinuous"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Present</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी रू हूँ</span><br /><span lang="mwr-Latn">{{ trans }}ī rū hū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रो है</span><br /><span lang="mwr-Latn">{{ trans }}ī ro hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रो है</span><br /><span lang="mwr-Latn">{{ trans }}ī ro hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा हां</span><br /><span lang="mwr-Latn">{{ trans }}ī rā hā̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा हो</span><br /><span lang="mwr-Latn">{{ trans }}ī rā ho</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा हैं</span><br /><span lang="mwr-Latn">{{ trans }}ī rā ha͠i</span></td>
        </tr>
        <tr
          v-show="toggleContinuous || toggleAll"
          v-if="verbCategories.showContinuous"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी री हूँ</span><br /><span lang="mwr-Latn">{{ trans }}ī rī hū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी री है</span><br /><span lang="mwr-Latn">{{ trans }}ī rī hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी री है</span><br /><span lang="mwr-Latn">{{ trans }}ī rī hai</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं हां</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ hā̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं हो</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ ho</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं हैं</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ ha͠i</span></td>
        </tr>
        <tr
          v-show="toggleContinuous || toggleAll"
          v-if="verbCategories.showContinuous"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Past</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी रो थो</span><br /><span lang="mwr-Latn">{{ trans }}ī ro tho</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रो थो</span><br /><span lang="mwr-Latn">{{ trans }}ī ro tho</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रो थो</span><br /><span lang="mwr-Latn">{{ trans }}ī ro tho</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा था</span><br /><span lang="mwr-Latn">{{ trans }}ī rā thā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा था</span><br /><span lang="mwr-Latn">{{ trans }}ī rā thā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा था</span><br /><span lang="mwr-Latn">{{ trans }}ī rā thā</span></td>
        </tr>
        <tr
          v-show="toggleContinuous || toggleAll"
          v-if="verbCategories.showContinuous"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी री थी</span><br /><span lang="mwr-Latn">{{ trans }}ī rī thī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी री थी</span><br /><span lang="mwr-Latn">{{ trans }}ī rī thī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी री थी</span><br /><span lang="mwr-Latn">{{ trans }}ī rī thī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं थीं</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ thī̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं थीं</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ thī̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं थीं</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ thī̃</span></td>
        </tr>
        <tr
          v-show="toggleContinuous || toggleAll"
          v-if="verbCategories.showContinuous"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Presumptive</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी रो वेऊँ</span><br /><span lang="mwr-Latn">{{ trans }}ī ro veū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रो वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī ro veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रो वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī ro veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा वेंवा</span><br /><span lang="mwr-Latn">{{ trans }}ī rā vemvā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा वेवो</span><br /><span lang="mwr-Latn">{{ trans }}ī rā vevo</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा वेंई</span><br /><span lang="mwr-Latn">{{ trans }}ī rā vẽī</span></td>
        </tr>
        <tr
          v-show="toggleContinuous || toggleAll"
          v-if="verbCategories.showContinuous"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी रू वेऊँ</span><br /><span lang="mwr-Latn">{{ trans }}ī rū veū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी री वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī rī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी री वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī rī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं वेंवा</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ vemvā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं वेवो</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ vevo</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं वेंई</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ vẽī</span></td>
        </tr>
        <tr
          v-show="toggleContinuous || toggleAll"
          v-if="verbCategories.showContinuous"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Subjunctive</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी रू वेऊँ</span><br /><span lang="mwr-Latn">{{ trans }}ī rū veū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रो वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī ro veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रो वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī ro veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा वेंवा</span><br /><span lang="mwr-Latn">{{ trans }}ī rā vemvā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा वेवो</span><br /><span lang="mwr-Latn">{{ trans }}ī rā vevo</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रा वेंई</span><br /><span lang="mwr-Latn">{{ trans }}ī rā vẽī</span></td>
        </tr>
        <tr
          v-show="toggleContinuous || toggleAll"
          v-if="verbCategories.showContinuous"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ी री वेऊँ</span><br /><span lang="mwr-Latn">{{ trans }}ī rī veū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी री वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī rī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी री वेई</span><br /><span lang="mwr-Latn">{{ trans }}ī rī veī</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं वेंवा</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ vemvā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं वेवो</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ vevo</span></td>
          <td><span lang="mwr-Deva">{{ term }}ी रीं वेंई</span><br /><span lang="mwr-Latn">{{ trans }}ī rī̃ vẽī</span></td>
        </tr>
        <tr
          v-if="verbCategories.showNonaspectual"
          @click="toggleNonaspectual = !toggleNonaspectual"
        >
          <th
            colspan="8"
            class="verb-category"
          >Non-aspectual</th>
        </tr>
        <tr
          v-show="toggleNonaspectual || toggleAll"
          v-if="verbCategories.showNonaspectual"
        >
          <th
            colspan="2"
            class="verb-category--type"
          >Subjunctive</th>
          <td><span lang="mwr-Deva">{{ term }}ूँ</span><br /><span lang="mwr-Latn">{{ trans }}ū̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}े</span><br /><span lang="mwr-Latn">{{ trans }}e</span></td>
          <td><span lang="mwr-Deva">{{ term }}े</span><br /><span lang="mwr-Latn">{{ trans }}e</span></td>
          <td><span lang="mwr-Deva">{{ term }}ांं</span><br /><span lang="mwr-Latn">{{ trans }}ā̃̃</span></td>
          <td><span lang="mwr-Deva">{{ term }}ो</span><br /><span lang="mwr-Latn">{{ trans }}o</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीं</span><br /><span lang="mwr-Latn">{{ trans }}ī̃</span></td>
        </tr>
        <tr
          v-show="toggleNonaspectual || toggleAll"
          v-if="verbCategories.showNonaspectual"
        >
          <th
            rowspan="2"
            class="verb-category--type"
          >Future</th>
          <td class="gender">
            <span title="masculine gender">🤴🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ूँला</span><br /><span lang="mwr-Latn">{{ trans }}ū̃lā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीला</span><br /><span lang="mwr-Latn">{{ trans }}īlā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीला</span><br /><span lang="mwr-Latn">{{ trans }}īlā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ांला</span><br /><span lang="mwr-Latn">{{ trans }}ā̃lā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ोला</span><br /><span lang="mwr-Latn">{{ trans }}olā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ींला</span><br /><span lang="mwr-Latn">{{ trans }}ī̃lā</span></td>
        </tr>
        <tr
          v-show="toggleNonaspectual || toggleAll"
          v-if="verbCategories.showNonaspectual"
        >
          <td class="gender">
            <span title="feminine gender">👸🏻</span>
          </td>
          <td><span lang="mwr-Deva">{{ term }}ूँला</span><br /><span lang="mwr-Latn">{{ trans }}ū̃lā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीला</span><br /><span lang="mwr-Latn">{{ trans }}īlā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ीला</span><br /><span lang="mwr-Latn">{{ trans }}īlā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ांला</span><br /><span lang="mwr-Latn">{{ trans }}ā̃lā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ोला</span><br /><span lang="mwr-Latn">{{ trans }}olā</span></td>
          <td><span lang="mwr-Deva">{{ term }}ींला</span><br /><span lang="mwr-Latn">{{ trans }}ī̃lā</span></td>
        </tr>
        <tr
          v-show="toggleNonaspectual || toggleAll"
          v-if="verbCategories.showNonaspectual"
        >
          <th
            colspan="2"
            class="verb-category--type"
          >Imperative</th>
          <td>-</td>
          <td><span lang="mwr-Deva">{{ term }}</span><br /><span lang="mwr-Latn">{{ trans }}</span></td>
          <td>-</td>
          <td>-</td>
          <td><span lang="mwr-Deva">{{ term }}ो</span><br /><span lang="mwr-Latn">{{ trans }}o</span></td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    term: { type: String },
    trans: { type: String },
    wordcat: String,
    verbCategories: { type: Object } // to hide a specific verb-category only
  },
  data() {
    return {
      toggleAll: false,
      togglePerfective: true,
      toggleImperfective: true,
      toggleContinuous: true,
      toggleNonaspectual: true
    };
  }
};
</script>

<style lang="sass" src="~/assets/css/components/verb-inflection.sass" scoped>
</style>