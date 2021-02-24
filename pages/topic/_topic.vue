<template>
  <div>
    <div v-for="topic in topics" :key="topic.url.title">
      <div v-for="parent in topic.parents" :key="parent">
        Topic > {{ parent }} > {{ $route.params.topic }}
      </div>
      <h1>Marwari words about {{ topic.url.title }}</h1>
      <ol>
        <li v-for="children in topic.children" :key="children">
          <nuxt-link :to="children">
            {{ children }}
          </nuxt-link>
        </li>
      </ol>
    </div>
    <div v-for="word in words" :key="word.url.title">
      {{ word.url.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [],
      words: [],
    };
  },
  async fetch() {
    this.topics = await this.$content("topics")
      .where({ "url.slugurl": { $contains: this.$route.params.topic } })
      .fetch();

    this.words = await this.$content("words")
      .where({ topics: { $containsAny: this.$route.params.topic } })
      .fetch();
  },
};
</script>

<style lang="postcss" scoped>
</style>