<template>
  <div>
    <div v-for="(topic, i) in topics" :key="i">
      <div v-if="topic.parents && topic.parents.length > 0">
        <div v-for="parent in topic.parents" :key="parent">
          <nuxt-link to="/topic">Topic</nuxt-link> →
          <nuxt-link :to="`/topic/${parent}`">{{ parent }}</nuxt-link> →
          {{ $route.params.topic }}
        </div>
      </div>
      <h1>Marwari words about {{ topic.url.title }}</h1>
      <ol v-if="topic.children && topic.children.length > 0">
        <li v-for="children in topic.children" :key="children">
          <nuxt-link :to="children">
            {{ children }}
          </nuxt-link>
        </li>
      </ol>
    </div>
    <ol>
      <li v-for="word in words" :key="word.url.slugurl">
        <nuxt-link :to="`/word/${word.url.slugurl}`">
          {{ word.url.title }}
        </nuxt-link>
      </li>
    </ol>
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
      .where({ "url.slugurl": { $eq: this.$route.params.topic } })
      .sortBy("slug")
      .fetch();

    this.words = await this.$content("words")
      .where({ topics: { $containsAny: this.$route.params.topic } })
      .sortBy("slug")
      .fetch();
  },
};
</script>

<style lang="postcss" scoped>
</style>