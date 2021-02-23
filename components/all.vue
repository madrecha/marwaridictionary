<template>
  <div>
    <!-- <ol id="table-of-contents">
      <li v-for="(f, index) in word.fos" :key="index">
        {{ f.fostype }}
        <ol>
          <li>
            Meaning of {{ meta.title }} {{ meta.transliteration }} in Marwari
            <ol>
              <li>Examples</li>
              <li>Synonyms</li>
              <li>Antonyms</li>
            </ol>
          </li>
          <li>Conjugation</li>
        </ol>
      </li>
    </ol> -->
    <div v-for="(f, index) in word.fos" :key="index">
      <h2 class="tw-capitalize">{{ f.fostype }}</h2>
      <!-- <h3>Meaning of {{ meta.title }} {{ meta.transliteration }} in Marwari</h3> -->
      <ol>
        <li v-for="mean in f.meanings" :key="mean.meaning">
          <span v-html="mean.meaning" class="tw-text-2xl"></span>
          <div v-if="mean.examples">
            <h4 @click.prevent="showExamples = !showExamples">Examples</h4>
            <ul v-show="showExamples">
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
            </ul>
          </div>
          <h4 v-if="mean.synonyms">Synonyms</h4>
          <ol>
            <li v-for="syn in mean.synonyms" :key="syn.syn">
              <nuxt-link :to="syn.slugurl ? syn.slugurl : syn.syn">{{
                syn.syn
              }}</nuxt-link>
            </li>
          </ol>
          <h4 v-if="mean.antonyms">Antonyms</h4>
          <ol>
            <li v-for="ant in mean.antonyms" :key="ant.ant">
              <nuxt-link :to="ant.slugurl ? ant.slugurl : ant.ant">{{
                ant.ant
              }}</nuxt-link>
            </li>
          </ol>
        </li>
      </ol>
      <h3></h3>
      <h3 v-if="f.fostype === 'noun'">Declension</h3>
      <h3 v-else>Conjugation</h3>
      <div v-if="f.fostype === 'noun'">
        <noun-decl-trial :grammar="f.grammar"></noun-decl-trial>
      </div>
    </div>
    <!-- <div v-for="(f, index) in word.fos" :key="index">
        <div v-if="f.fostype === 'verb'">
          <h2>Conjugation</h2>
          <verb-conj :grammar="f.grammar"></verb-conj>
        </div>
      </div> -->
  </div>
</template>

<script>
// import VerbConj from './global/verbConj.vue';
export default {
  props: { word: { type: Object }, meta: { type: Object } },
  data() {
    return {
      showExamples: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>