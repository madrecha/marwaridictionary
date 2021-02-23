<template>
  <div>
    <p>
      Meaning of <span class="tw-capitalize">{{ url.transliteration }}</span> in
      Marwari
    </p>
    <ol>
      <li v-for="mean in meanings" :key="mean.meaning">
        <span v-html="mean.meaning" class="tw-text-2xl"></span>

        <h3 v-if="mean.examples && h === 2">Marwari Examples</h3>
        <h4 v-if="mean.examples && h === 3">Marwari Examples</h4>
        <eg :eg="mean.examples" v-if="mean.examples"></eg>

        <h3 v-if="mean.synonyms && h === 2">Marwari Synonyms</h3>
        <h4 v-if="mean.synonyms && h === 3">Marwari Synonyms</h4>
        <syn :syn="mean.synonyms" v-if="mean.synonyms"></syn>

        <h3 v-if="mean.antonyms && h === 2">Marwari Antonyms</h3>
        <h4 v-if="mean.antonyms && h === 3">Marwari Antonyms</h4>
        <ant :ant="mean.antonyms" v-if="mean.antonyms"></ant>

        <h3 v-if="mean.related && h === 2">Related</h3>
        <h4 v-if="mean.related && h === 3">Related</h4>
        <related :related="mean.related" v-if="mean.related"></related>

        <h3 v-if="mean.translation && h === 2">Translation</h3>
        <h4 v-if="mean.translation && h === 3">Translation</h4>
        <p v-if="url && mean.translation">
          Translate
          <span class="tw-capitalize">{{ url.transliteration }}</span> in
          Marwari
        </p>
        <translation
          :translation="mean.translation"
          v-if="mean.translation"
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
  props: { meanings: Array, url: Object, h: { type: Number, default: 3 } },
  data() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
</style>