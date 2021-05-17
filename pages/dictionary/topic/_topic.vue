<template>
  <div>
    <div class="tw-text-center">
      <h1 class="tw-text-3xl tw-text-pink-800 tw-font-medium">
        {{ words.length }} Marwari words about {{ $route.params.topic }}
      </h1>
      <p class="tw-mt-2">
        List of <b>{{ $route.params.topic }}</b> in Marwari
      </p>
      <div class="tw-mt-2">
        <nuxt-link
          :to="`/${$i18n.locale}/dictionary/topic/`"
          class="tw-p-2 tw-border-b tw-border-pink-800 hover:tw-bg-blue-50"
        >Go back to Topics</nuxt-link>
      </div>
    </div>
    <div
      v-for="(topic, i) in topics"
      :key="i"
    >
      <div v-if="topic.parents && topic.parents.length > 0">
        <div
          v-for="parent in topic.parents"
          :key="parent"
        >
          <nuxt-link :to="`/${$i18n.locale}/dictionary/topic/`">Topic</nuxt-link> →
          <nuxt-link :to="`/${$i18n.locale}/dictionary/topic/${parent}/`">{{
            parent
          }}</nuxt-link>
          →
          {{ $route.params.topic }}
        </div>
      </div>
      <ol v-if="topic.children && topic.children.length > 0">
        <li
          v-for="child in topic.children"
          :key="child"
        >
          <nuxt-link
            :to="`/${$i18n.locale}/dictionary/topic/${child}/`"
            class="tw-p-2 tw-border-b tw-border-pink-800 hover:tw-bg-blue-50"
          >
            {{ child }}
          </nuxt-link>
        </li>
      </ol>
    </div>
    <div class="tw-mt-3 tw-max-w-5xl tw-mx-auto">
      <ol class="tw-list-decimal tw-grid tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-1 lg:tw-gap-3 tw-p-2">
        <li
          v-for="word in words"
          :key="word.url.slugurl"
          class="tw-m-4"
        >
          <nuxt-link
            :to="`/${$i18n.locale}/dictionary/word/${word.url.slugurl}/`"
            class="tw-p-1 tw-border-b tw-border-pink-800 hover:tw-bg-blue-50 tw-leading-relaxed"
          >
            {{ word.url.title }} ({{ word.url.transliteration }})
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
      topics: [],
      words: []
    };
  },
  async fetch() {
    this.topics = await this.$content(`${this.$i18n.locale}/dictionary`, {
      deep: true
    })
      .where({
        $and: [
          { dir: `/${this.$i18n.locale}/dictionary/topics` },
          { "url.slugurl": { $eq: this.$route.params.topic } }
        ]
      })
      .sortBy("slug")
      .fetch();

    this.words = await this.$content(`${this.$i18n.locale}/dictionary`, {
      deep: true
    })
      .where({
        $and: [
          { dir: `/${this.$i18n.locale}/dictionary/words` },
          { topics: { $contains: this.$route.params.topic } }
        ]
      })
      .sortBy("slug")
      .fetch();
  }
};
</script>