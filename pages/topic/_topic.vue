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
      <template #title>{{ words.length }} Marwari words for {{ $route.params.topic }}
      </template>
      <template #description>
        List of words related to <b>{{ $route.params.topic }}</b> in Marwari language.
      </template>
      <nuxt-link
        :to="localePath(`topic`)"
        class="nuxt-link tw-inline-block tw-mt-3 tw-text-center "
      >Go back to Topics</nuxt-link>
      <section
        v-for="(topic, i) in topics"
        :key="i"
        class="nuxt-content"
      >
        <div v-if="topic.parents && topic.parents.length">
          <div
            v-for="parent in topic.parents"
            :key="parent"
            class="tw-mt-3"
          >
            <nuxt-link :to="localePath(`/topic`)">Topic</nuxt-link> →
            <nuxt-link :to="localePath(`/topic/${parent}`)">{{parent}}</nuxt-link>
            → {{ $route.params.topic }}
          </div>
        </div>
        <ol v-if="topic.children && topic.children.length">
          <h2>Sub categories</h2>

          <li
            v-for="child in topic.children"
            :key="child"
          >
            <nuxt-link :to="localePath(`/topic/${child}`)">
              {{ child }}
            </nuxt-link>
          </li>
        </ol>
      </section>
      <section class="tw-mt-3 tw-max-w-5xl tw-mx-auto nuxt-content">
        <h2>List of {{ $route.params.topic }} in Marwari</h2>
        <ol
          class="tw-list-decimal tw-list-outside tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-4"
          v-if="words && words.length"
        >
          <li
            v-for="word in words"
            :key="word.slug"
            class=""
          >
            <nuxt-link :to="localePath(`/dictionary/marwari-english/${word.slugurl}`)">
              {{ word.title ? word.title : word.slugurl }} ({{ word.transliteration }})
            </nuxt-link>
          </li>
        </ol>
      </section>
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "~/components/templates/ArticleLayout.vue";

export default {
  name: "TopicPage",
  components: { ArticleLayout },
  data() {
    return {
      topics: [],
      words: []
    };
  },
  async fetch() {
    let topic = this.$route.params.topic;

    this.topics = await this.$content(`${this.$i18n.locale}`, {
      deep: true
    })

      .where({
        $and: [{ path: `/${this.$i18n.locale}/topics/${topic}` }]
      })
      .sortBy("slug")
      .fetch();

    this.words = await this.$content(`dictionary`, {
      deep: true
    })
      .where({
        $and: [
          { slug: { $ne: "AAA" } },
          { topics: { $contains: topic } },
          {
            dir: `/dictionary/marwari-english` // currently, marwari-english dictionary has more words, so fetching it from there.
          }
        ]
      })
      .sortBy("slug")
      .fetch();
  }
};
</script>
