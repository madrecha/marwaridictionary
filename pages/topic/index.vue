<template>
  <div>
    <h1>Topics</h1>
    <ol>
      <li v-for="(topic, i) in topics" :key="i">
        <nuxt-link :to="`/topic/${topic.url.slugurl}`" class="tw-capitalize">
          {{ topic.url.slugurl }}
        </nuxt-link>

        <ol v-if="topic.children && topic.children.length > 0">
          <li v-for="children in topic.children" :key="children">
            <nuxt-link :to="`/topic/${children}`" class="tw-capitalize">
              {{ children }}
            </nuxt-link>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [],
    };
  },
  async fetch() {
    this.topics = await this.$content("topics").fetch();
  },
};
</script>

<style lang="postcss" scoped>
@import url(~assets/css/nuxtcontent.postcss);
</style>