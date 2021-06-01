<template>
  <div>
    <div
      v-if="$fetchState.pending"
      class="tw-my-48 tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium"
    >
      Fetching... 💖 Wait for a few seconds 😊
    </div>
    <div
      v-else-if="$fetchState.error"
      class="tw-my-48 tw-text-xl tw-text-blue-800 tw-bg-pink-50 tw-p-4 tw-text-center tw-font-medium"
    >
      Error in Fetching... 👀
    </div>
    <article-layout v-else>
      <template #title>Topics</template>
      <template #description>
        Topics are collections of words related to similar subject areas.
      </template>

      <section class="tw-mt-3 nuxt-content">
        <p class="tw-text-center">
          <span class="tw-font-medium">{{ uniquetopics.length }}</span>
          topics added
          <span class="tw-font-medium">{{ alltopics.length }}</span>
          times till now
        </p>
        <ol class="tw-list-decimal tw-list-outside tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-4 md:tw-gap-8">
          <li
            v-for="uniquetopic in uniquetopics"
            :key="uniquetopic"
            class=""
          >
            <div class="tw-inline-flex tw-flex-col tw-flex-wrap">
              <nuxt-link
                :to="localePath(`/topic/${uniquetopic}`)"
                class="tw-inline-block tw-p-1 tw-text-base md:tw-text-lg"
              >
                {{ uniquetopic }}
              </nuxt-link>
              <span class="tw-inline-block tw-italic tw-text-sm">({{ getWordsByTopic(alltopics, uniquetopic)}} words)</span>
            </div>
          </li>
        </ol>
      </section>
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "~/components/templates/ArticleLayout.vue";

export default {
  name: "TopicIndexPage",
  components: { ArticleLayout },
  data() {
    return {
      // topics: [],
      words: [],
      alltopics: [],
      uniquetopics: []
    };
  },
  async fetch() {
    // this.topics = await this.$content("topics").sortBy("slug").fetch();
    this.words = await this.$content("dictionary", { deep: true })
      .where({
        $and: [
          { slug: { $ne: "AAA" } },
          {
            dir: `/dictionary/marwari-english` // currently, marwari-english dictionary has more words, so fetching it from there.
          }
        ]
      })
      .without(["body", "toc"])
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

    this.uniquetopics = [...new Set(this.alltopics)];
    this.uniquetopics = this.uniquetopics.sort();

    // this.uniquetopics = this.alltopics
    //   .reduce(function (a, b) {
    //     if (a.indexOf(b) < 0) a.push(b);
    //     return a;
    //   }, [])
    //   .sort();

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
    }
  }
};
</script>

