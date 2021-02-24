<template>
  <div>
    <h1>Topics</h1>
    <p>{{ uniquetopics.length }} topics added till now to the words</p>
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
        <nuxt-link :to="`/topic/${uniquetopic}`">
          {{ uniquetopic }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // topics: [],
      words: [],
      alltopics: [],
      uniquetopics: [],
    };
  },
  async fetch() {
    // this.topics = await this.$content("topics").sortBy("slug").fetch();

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

    // Now, with the above uniquetopics code, alltopics get filtered and only unique topics remain.
    // Moreover, now even if there DOES NOT exist any topic file in Content folder, still words are shown in the individual topic page.
    // Of course, individual topic file should be created later so as to add more info about that particular topic to be shown on that topic's page. E.g., its parents topics, its children topics.
    // But currently, even without the files, at least words are coming properly. 😀
  },
};
</script>

<style lang="postcss" scoped>
@import url(~assets/css/nuxtcontent.postcss);
</style>