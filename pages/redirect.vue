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
    this.posts = await this.$content(`en/dictionary`, {
      deep: true
    })
      .where({
        $and: [
          {
            dir: `/en/dictionary/words`
          },
          { slug: { $ne: "AAA" } }
        ]
      })
      .without(["body", "toc"])
      .sortBy("url.transliteration")
      .fetch();

    let postlinks = this.posts.map(post => {
      // return {
      //   source: `/dictionary/words/${post.url.slugurl}`,
      //   destination: `/en/dictionary/words/${post.url.slugurl}`,
      //   type: 301
      // };
      return {
        source: `/word/${post.url.slugurl}`,
        destination: `/en/dictionary/word/${post.url.slugurl}`,
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