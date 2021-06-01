<template>
  <v-app class="tw-text-base md:tw-text-lg">
    <the-header></the-header>
    <v-main class="!tw-min-h-screen">
      <Nuxt
        keep-alive
        :keep-alive-props="{ max: 10 }"
      ></Nuxt>
    </v-main>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import TheHeader from "~/components/templates/TheHeader";
import TheFooter from "~/components/templates/TheFooter";

export default {
  components: { TheHeader, TheFooter }
  // data() {
  //   return {
  //     // showFooter: false,
  //   };
  // }
  // methods: {
  //   showElements() {
  //     this.showFooter =
  //       pageYOffset > 20 ||
  //       document.documentElement.clientHeight < 900 ||
  //       screen.width > 768;
  //   },
  // },
  // mounted() {
  //   window.addEventListener("pageshow", this.showElements);
  // },
};
</script>

