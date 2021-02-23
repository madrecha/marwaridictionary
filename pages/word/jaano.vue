<template>
  <div>
    <h1>{{ post.word.title }}</h1>
    <ul>
      <li v-for="heading in post.toc" :key="heading.id">
        {{ heading.text }}
      </li>
    </ul>
    <NuxtContent :document="post"></NuxtContent>
  </div>
</template>

<script>
import all from "~/components/all.vue";

export default {
  components: { all },
  data() {
    return {
      post: null,
    };
  },
  async fetch() {
    this.post = await this.$content("words/jaano").fetch();
  },
};
</script>

<style src="@/assets/css/nuxtcontent.postcss" lang="postcss">
</style>