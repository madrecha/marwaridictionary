<template>
  <ol>
    {{links.length}}
    <li
      v-for="(link,i) in links"
      :key="i"
    >
      {{link}},
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      links: [],
      posts: null,
      topics: null
    };
  },
  async fetch() {
    this.posts = await this.$content(`dictionary/marwari-english`, {
      deep: true
    })
      .where({
        $and: [
          // {
          //   dir: `/dictionary/marwari-dictionary`
          // },
          { slug: { $ne: "AAA" } }
        ]
      })
      .without(["body", "toc"])
      .sortBy("transliteration")
      .fetch();

    let postlinks = this.posts.map(post => {
      // return {
      //   source: `/dictionary/words/${post.url.slugurl}`,
      //   destination: `/en/dictionary/words/${post.url.slugurl}`,
      //   type: 301
      // };
      return {
        // source: `/word/${post.slugurl}/`,
        source: `/en/dictionary/word/${post.slugurl}/`,
        destination: `/en/dictionary/marwari-english/${post.slugurl}/`,
        type: 301
      };
    });

    this.links = [
      ...postlinks
      // {
      //   source: `/dictionary/words`,
      //   destination: `/en/dictionary/words`,
      //   type: 301
      // },
      // {
      //   source: `/dictionary/topics`,
      //   destination: `/en/dictionary/topics`,
      //   type: 301
      // }
    ];
  }
};
</script>