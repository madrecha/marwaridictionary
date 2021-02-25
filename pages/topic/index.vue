<template>
  <div>
    <div class="tw-text-center">
      <h1 class="tw-text-3xl tw-text-pink-800 tw-font-medium">Topics</h1>
      <p class="tw-mt-3">
        {{ uniquetopics.length }} topics added {{ alltopics.length }} times till
        now
      </p>
    </div>
    <!-- OLD CODE (CAN DELETE LATER) -->
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
    <div class="tw-mt-3 tw-max-w-5xl tw-mx-auto">
      <ol class="tw-list-decimal tw-grid tw-grid-cols-3 tw-gap-3 tw-mx-auto">
        <li
          v-for="uniquetopic in uniquetopics"
          :key="uniquetopic"
          class="tw-m-4"
        >
          <nuxt-link
            :to="`/topic/${uniquetopic}`"
            class="tw-p-2 tw-border-b tw-border-pink-800 hover:tw-bg-blue-50"
          >
            {{ uniquetopic }} ({{ getWordsByTopic(alltopics, uniquetopic) }}
            words)
          </nuxt-link>
        </li>
      </ol>
    </div>
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
      if (word.topics && word.topics.length > 0) {
        for (const topic of word.topics) {
          if (topic !== null) {
            this.alltopics.push(topic);
          }
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

  methods: {
    getWordsByTopic(originalArray, topicname) {
      var compressed = [];
      // make a copy of the input array
      var copy = originalArray.slice(0);

      // first loop goes over every element
      for (var i = 0; i < originalArray.length; i++) {
        var myCount = 0;
        // loop over every element in the copy and see if it's the same
        for (var w = 0; w < copy.length; w++) {
          if (originalArray[i] == copy[w]) {
            // increase amount of times duplicate is found
            myCount++;
            // sets item to undefined
            delete copy[w];
          }
        }

        if (myCount > 0) {
          var a = new Object();
          a.value = originalArray[i];
          a.count = myCount;
          compressed.push(a);
        }
      }
      let counttopics;

      for (let i = 0; i < compressed.length; i++) {
        const element = compressed[i];
        // if (element.value === null) delete element.value;
        if (element.value === topicname) {
          counttopics = element.count;
        }
      }
      // console.log(compressed);
      // return compressed;
      return counttopics;
    },
  },
};
</script>

<style lang="postcss" scoped>
/* @import url(~assets/css/nuxtcontent.postcss); */
</style>