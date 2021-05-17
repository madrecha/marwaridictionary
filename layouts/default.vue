<template>
  <div>
    <TheHeader></TheHeader>
    <main class="tw-bg-gray-50">
      <Nuxt
        class="tw-max-w-screen-lg tw-mx-auto tw-px-2 tw-py-4 "
        keep-alive
        :keep-alive-props="{ max: 10 }"
      ></Nuxt>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "../components/templates/TheHeader";
import TheFooter from "../components/templates/TheFooter";

export default {
  components: { TheHeader, TheFooter },
  data() {
    return {
      // showFooter: false,
    };
  }
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