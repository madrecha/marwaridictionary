<template>
  <div>
    <TheHeader></TheHeader>
    <Nuxt class="tw-mx-2" keep-alive :keep-alive-props="{ max: 10 }"></Nuxt>
    <TheFooter v-if="showFooter"></TheFooter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFooter: false,
    };
  },
  methods: {
    showElements() {
      this.showFooter =
        pageYOffset > 20 ||
        document.documentElement.clientHeight < 900 ||
        screen.width > 768;
    },
  },
  mounted() {
    window.addEventListener("pageshow", this.showElements);
  },
};
</script>