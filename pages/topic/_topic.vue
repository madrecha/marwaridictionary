<template>
  <div>
    <div v-for="topic in topics" :key="topic.url.title">
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