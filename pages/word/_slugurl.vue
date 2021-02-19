<template>
  <div>
    <div v-for="word in words" :key="word.slugurl">
      <h1>Marwari word: {{ word.title }}</h1>
      <NuxtContent :document="word"></NuxtContent>
      <!-- <h2>Meaning</h2> -->
      <!-- <h3>English meaning:</h3>
      {{ word.meaning.en }}
      <h3>Hindi meaning</h3>
      {{ word.meaning.hi }}
      <h2>Example</h2>
      {{ word.examples }} -->
      <div v-for="example in word.examples" :key="example">
        <!-- <p>{{ word.examples }}</p> -->
        <!-- <p>English meaning: {{ example.en }}</p> -->
        <!-- <p>Hindi meaning: {{ example.hi }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: [],
    };
  },
  async fetch() {
    this.words = await this.$content("words")
      .where({ slugurl: this.$route.params.slugurl })
      .fetch();
  },
};
</script>

<style src="@/assets/css/nuxtcontent.postcss" lang="postcss">
</style>