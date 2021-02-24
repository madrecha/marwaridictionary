<template>
  <div>
    <h1>Topics</h1>
    <!-- <ol>
      <li v-for="(topic, i) in topics" :key="i">
        <nuxt-link
          :to="`/topic/${topic.url.slugurl}`"
          class="tw-capitalize"
          v-if="topic.url"
        >
          {{ topic.url.slugurl }}
        </nuxt-link>

        <ol v-if="topic.children && topic.children.length > 0">
          <li v-for="children in topic.children" :key="children">
            <nuxt-link :to="`/topic/${children}`" class="tw-capitalize">
              {{ children }}
            </nuxt-link>
          </li>
        </ol>
      </li>
    </ol> -->
    <ol>
      <li v-for="uniquetopic in uniquetopics" :key="uniquetopic">
        {{ uniquetopic }}
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
      alltopics: [],
      uniquetopics: [],
    };
  },
  async fetch() {
    this.topics = await this.$content("topics").sortBy("slug").fetch();

    this.words = await this.$content("words")
      .only("topics")
      .sortBy(["slug"])
      .fetch();
    for (const word of this.words) {
      if (word.topics) {
        for (const topic of word.topics) {
          this.alltopics.push(topic);
        }
      }
    }

    this.uniquetopics = this.alltopics
      .reduce(function (a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
      }, [])
      .sort();
  },
};
</script>

<style lang="postcss" scoped>
@import url(~assets/css/nuxtcontent.postcss);
</style>