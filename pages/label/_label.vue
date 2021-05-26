<template>
  <article class="article-post">
    <header class="article-post_header">
      <h1 class="article-post_header--h1"><span class="tw-capitalize">{{labelTitle}}</span> Marwari words</h1>
    </header>
    <div class="tw-max-w-screen-lg tw-mx-auto nuxt-content">
      <div class="tags-list-div-wrapper">
        <ol class="tags-list tags-list__ol">
          <li
            v-for="word in words"
            :key="word.slug"
            class="tags-list__li"
          >
            <nuxt-link
              :to="`/${$i18n.locale}/dictionary/marwari-english/${word.slugurl}/`"
              class="tags-list__li--link nuxt-link"
            >

              {{word.slugurl}} {{word.transliteration}}
            </nuxt-link>

          </li>
        </ol>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "LabelPage",
  data() {
    return {
      labels: [],
      words: []
    };
  },
  async fetch() {
    this.labels = await this.$content(`${this.$i18n.locale}/labels`)
      .where({ slug: this.labelParam })
      .fetch();

    this.words = await this.$content(`dictionary/marwari-english`)
      .where({ ["labels"]: { $contains: this.labelParam } })
      .fetch();
  },
  computed: {
    labelParam() {
      return this.$route.params.label;
    },
    label() {
      return this.labels.length > 0 ? this.labels[0] : this.labelParam;
    },
    labelTitle() {
      if (typeof this.label === "object") {
        return this.label.title ? this.label.title : this.label.slug;
      } else {
        return this.label;
      }
    },
    labelSlugurl() {
      if (typeof this.label === "object") {
        return this.label.slugurl ? this.label.slugurl : this.label.slug;
      } else {
        return this.label;
      }
    }
  }
};
</script>

<style lang="sass" src="~/assets/css/layout/article-heading.sass" scoped>
</style>

<style lang="sass" src="~/assets/css/layout/article-tags-list.sass" scoped>
</style>