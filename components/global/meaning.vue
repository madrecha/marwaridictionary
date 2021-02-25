<template>
  <div>
    <p v-if="url">
      Marwari meaning of
      <span class="tw-capitalize"
        >{{ url.title }} ({{ url.transliteration }})</span
      >
    </p>
    <ol>
      <li v-for="mean in meanings" :key="mean.meaning" class="tw-mt-2">
        <span
          v-html="mean.meaning"
          class="tw-text-2xl tw-p-2 tw-bg-gradient-to-br tw-from-white tw-to-pink-50"
        ></span>

        <h3 v-if="(mean.examples || mean.egs) && h === 2" class="tw-text-base">
          Examples of
          <span class="tw-capitalize"
            >{{ url.title }} ({{ url.transliteration }})</span
          >
          in Marwari
        </h3>
        <h4 v-if="(mean.examples || mean.egs) && h === 3" class="tw-text-base">
          Examples of
          <span class="tw-capitalize"
            >{{ url.title }} ({{ url.transliteration }})</span
          >
          in Marwari
        </h4>
        <eg :eg="mean.examples" v-if="mean.examples"></eg>
        <eg :eg="mean.egs" v-if="mean.egs"></eg>

        <h3
          v-if="(mean.synonyms || mean.syns) && h === 2"
          class="tw-text-base sm:tw-text-xl"
        >
          Marwari synonyms of
          <span class="tw-capitalize"
            >{{ url.title }} ({{ url.transliteration }})</span
          >
        </h3>
        <h4 v-if="(mean.synonyms || mean.syns) && h === 3" class="tw-text-base">
          Marwari synonyms of
          <span class="tw-capitalize"
            >{{ url.title }} ({{ url.transliteration }})</span
          >
        </h4>
        <syn :syn="mean.synonyms" v-if="mean.synonyms"></syn>
        <syn :syn="mean.syns" v-if="mean.syns"></syn>

        <h3 v-if="(mean.antonyms || mean.ants) && h === 2" class="tw-text-base">
          Marwari antonyms of
          <span class="tw-capitalize"
            >{{ url.title }} ({{ url.transliteration }})</span
          >
        </h3>
        <h4 v-if="(mean.antonyms || mean.ants) && h === 3" class="tw-text-base">
          Marwari antonyms of
          <span class="tw-capitalize"
            >{{ url.title }} ({{ url.transliteration }})</span
          >
        </h4>
        <ant :ant="mean.antonyms" v-if="mean.antonyms"></ant>
        <ant :ant="mean.ants" v-if="mean.ants"></ant>

        <h3 v-if="(mean.related || mean.rels) && h === 2" class="tw-text-base">
          Marwari words related to
          <span class="tw-capitalize"
            >{{ url.title }} ({{ url.transliteration }})</span
          >
        </h3>
        <h4 v-if="(mean.related || mean.rels) && h === 3" class="tw-text-base">
          Marwari words related to
          <span class="tw-capitalize"
            >{{ url.title }} ({{ url.transliteration }})</span
          >
        </h4>
        <related :related="mean.related" v-if="mean.related"></related>
        <related :related="mean.rels" v-if="mean.rels"></related>

        <h3
          v-if="
            (mean.translation || mean.translations || mean.translates) &&
            h === 2
          "
          class="tw-text-base"
        >
          Translate Marwari word
          <span class="tw-capitalize"
            >{{ url.title }} ({{ url.transliteration }})</span
          >
        </h3>
        <h4
          v-if="
            (mean.translation || mean.translations || mean.translates) &&
            h === 3
          "
          class="tw-text-base"
        >
          Translate Marwari word
          <span class="tw-capitalize"
            >{{ url.title }} ({{ url.transliteration }})</span
          >
        </h4>
        <p
          v-if="
            url && (mean.translation || mean.translations || mean.translates)
          "
        >
          Translate Marwari word
          <span class="tw-capitalize"
            >{{ url.title }} ({{ url.transliteration }})</span
          >
        </p>
        <translation
          :translation="mean.translation"
          v-if="mean.translation"
        ></translation>
        <translation
          :translation="mean.translations"
          v-if="mean.translations"
        ></translation>
        <translation
          :translation="mean.translates"
          v-if="mean.translates"
        ></translation>
        <!-- <ul>
          <li v-for="example in mean.examples" :key="example.eg">
            {{ example.eg }}
            <ul>
              <li v-if="example.en">
                <span class="tw-text-xs">English:</span> {{ example.en }}
              </li>
              <li v-if="example.hi">
                <span class="tw-text-xs">Hindi:</span> {{ example.hi }}
              </li>
              <li v-if="example.mr">
                <span class="tw-text-xs">Marathi:</span> {{ example.hi }}
              </li>
            </ul>
          </li>
        </ul> -->
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    meanings: { type: Array, required: true },
    url: { type: Object, required: false },
    h: { type: Number, default: 3, required: false },
  },
  data() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
</style>