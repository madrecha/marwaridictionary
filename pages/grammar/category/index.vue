<template>
  <div>
    Category Index page
    <ol class="tw-px-16">
      <li
        v-for="word in words"
        :key="word.slug"
      >
        {{word.slug}}
      </li>
    </ol>

  </div>

</template>

<script>
export default {
  data() {
    return {
      words: []
    };
  },
  async fetch() {
    this.words = await this.$content(`dictionary/marwari-english`)
      .where({
        $and: [
          {
            "grammar.verb.type": { $regex: "intransitive" }
          }
        ]
      })
      .fetch();
  }
};
</script>