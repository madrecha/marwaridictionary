<template>
  <div class="nuxt-content tw-max-w-screen-lg tw-mx-auto">
    <article class="article-post">
      <header class="article-post_header">
        <h1 class="article-post_header--h1">Marwari Dictionaries</h1>
        <p class="article-post_header--description"></p>
      </header>

      <section>
        <h2>Introduction</h2>
        <p>While Marwari Dictionaries can be monolingual or bilingual, we have started with preparing a <strong>bilingual Marwari to English dictionary</strong>. Why? Because we feel that with this approach, we can quickly reach out to the English speakers who wish to learn Marwari language.</p>

        <p>Of course, we will also try to prepare a bilingual English to Marwari dictionary. You too can help us to contribute to the community.</p>

      </section>

      <section>
        <h2>List of Marwari Dictionaries</h2>
        <ol>
          <li class="tw-">
            <nuxt-link :to="`/${$i18n.locale}/dictionary/marwari-english/`">Marwari-English dictionary</nuxt-link>
          </li>
          <li class="tw-text-gray-500">English-Marwari dictionary (WIP)</li>
          <li class="tw-text-gray-500">Marwari-Hindi dictionary (planned)</li>
          <li class="tw-text-gray-500">Hindi-Marwari dictionary (planned)</li>
          <li class="tw-text-gray-500">Marwari dictionary (planned) (monolingual)</li>
        </ol>
        <p class="tw-text-sm">WIP = Work in Progress</p>
      </section>

      <section>
        <h2>Long-term Vision</h2>
        <p>Read our <a
            href="https://github.com/madrecha/marwaridictionary/blob/master/PLAN.md"
            ref="noopener noreferer"
            target="_blank"
          >plan on Github</a> on how we aim to implement these extensively comphrensive Marwari Dictionaries.</p>
      </section>

      <!-- <section class="tw-flex tw-justify-evenly tw-items-center">

      <nuxt-link
        class="tw-w-48 tw-h-48 tw-rounded-lg tw-border tw-border-gray-200 tw-bg-yellow-50 tw-flex tw-justify-center tw-items-center"
        :to="`/${$i18n.locale}/dictionary/word/`"
      >
        Words
      </nuxt-link>
      <nuxt-link
        class="tw-w-48 tw-h-48 tw-rounded-lg tw-border tw-border-gray-200 tw-bg-yellow-50 tw-flex tw-justify-center tw-items-center"
        :to="`/${$i18n.locale}/dictionary/topic/`"
      >
        Topics
      </nuxt-link>
    </section> -->
      <!-- <article>
      <nuxt-content :document="post"></nuxt-content>
    </article> -->
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: null,
      post: null
    };
  },
  async fetch() {
    this.posts = await this.$content(this.$i18n.locale)
      .where({
        slug: "dictionary"
      })
      .fetch();

    this.post = this.posts[0];
  }
};
</script>