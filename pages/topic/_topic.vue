<template>
  <article>
    <header class="article-post_header">
      <h1 class="article-post_header--h1">
        {{ words.length }} Marwari words about {{ $route.params.topic }}
      </h1>
    </header>
    <div class="tw-max-w-screen-lg tw-mx-auto">
      <p class="article-post_header--description">
        List of <b>{{ $route.params.topic }}</b> in Marwari
      </p>
      <nuxt-link
        :to="`/${$i18n.locale}/topic/`"
        class="nuxt-link tw-inline-block tw-mt-3 tw-text-center "
      >Go back to Topics</nuxt-link>
      <section
        v-for="(topic, i) in topics"
        :key="i"
        class="nuxt-content"
      >
        <h2>Breadcrumbs</h2>
        <div v-if="topic.parents && topic.parents.length > 0">
          <div
            v-for="parent in topic.parents"
            :key="parent"
            class="tw-mt-3"
          >
            <nuxt-link :to="`/${$i18n.locale}/topic/`">Topic</nuxt-link> →
            <nuxt-link :to="`/${$i18n.locale}/topic/${parent}/`">{{parent}}</nuxt-link>
            → {{ $route.params.topic }}
          </div>
        </div>
        <ol v-if="topic.children && topic.children.length > 0">
          <h3>Children categories</h3>
          <li
            v-for="child in topic.children"
            :key="child"
          >
            <nuxt-link :to="`/${$i18n.locale}/topic/${child}/`">
              {{ child }}
            </nuxt-link>
          </li>
        </ol>
      </section>
      <section class="tw-mt-3 tw-max-w-5xl tw-mx-auto nuxt-content">
        <h2>List of {{ $route.params.topic }}s in Marwari</h2>
        <ol class="tw-list-decimal tw-grid tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-1 lg:tw-gap-3 tw-p-2">
          <li
            v-for="word in words"
            :key="word.slug"
            class="tw-m-4"
          >
            <nuxt-link
              :to="`/${$i18n.locale}/dictionary/marwari-english/${word.slugurl}/`"
              class=""
            >
              {{ word.title ? word.title : word.slugurl }} ({{ word.transliteration }})
            </nuxt-link>
          </li>
        </ol>
      </section>
    </div>
  </article>
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

<style lang="sass" src="~/assets/css/layout/article-heading.sass" scoped>
</style>

<style lang="sass" src="~/assets/css/all.sass" scoped>
</style>