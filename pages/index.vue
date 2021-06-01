<template>
  <div class="tw-pt-4 md:tw-pt-8">
    <section class="tw-py-3 tw-bg-gradient-to-br tw-from-white tw-via-white tw-to-pink-50 tw-text-center">
      <div class="tw-max-w-screen-lg tw-mx-auto">
        <div class="tw-mx-3 tw-my-3 tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center tw-gap-4">
          <div class="tw-w-full md:tw-w-1/3 tw-flex tw-justify-center tw-items-center">
            <svg-girl-learning-paper-letters class="tw-w-[70%] md:tw-w-full tw-h-auto tw-mx-auto"></svg-girl-learning-paper-letters>
          </div>
          <h1 class="tw-w-full md:tw-w-2/3 tw-text-5xl md:tw-text-8xl tw-text-pink-700 tw-tracking-wide tw-text-center">
            Marwari Dictionary
          </h1>
        </div>
        <p class=" tw-my-8 tw-text-2xl md:tw-text-6xl tw-text-blue-800 ">
          Learn Marwari language
        </p>
        <div class="tw-my-8 md:tw-my-10">
          <nuxt-link
            :to="localePath(`/browse`)"
            class="marwari-browse-link tw-inline-block tw-p-5 md:tw-scale-110 tw-rounded-xl tw-font-medium tw-shadow-xl tw-text-xl tw-bg-gradient-to-br tw-from-white tw-to-green-50 !tw-text-green-600 tw-border tw-border-green-200 tw-transform hover:!tw-text-green-600 hover:tw-border-green-200 hover:tw-scale-125 tw-transition-all"
          > Browse Marwari Words
            <v-icon
              right
              color="green darken-3"
            >{{mdiMagnify}}</v-icon>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="tw-bg-gradient-to-bl tw-from-pink-50 tw-via-white tw-to-white tw-py-3 tw-pb-12 sm:tw-flex tw-justify-center tw-items-start ">
      <div class="tw-max-w-screen-lg tw-mx-auto">
        <div class="tw-mx-3 tw-flex tw-flex-col-reverse md:tw-flex-row md:tw-justify-between md:tw-items-center tw-gap-6">
          <div class="tw-w-full md:tw-w-1/3 tw-flex tw-justify-center tw-items-center">
            <svg-girl-holding-documents class="tw-w-[60%] md:tw-w-full tw-h-auto tw-mx-auto">
            </svg-girl-holding-documents>
          </div>
          <blockquote class="tw-w-full md:tw-w-2/3 tw-px-4 tw-py-10 tw-text-xl md:tw-text-3xl tw-italic  tw-text-red-800 tw-text-center tw-border-b-2 tw-border-t-2 tw-border-yellow-500">
            Learn Marwari / Marwadi, Rajasthani, Mewadi languages and dialects. Improve
            your vocabulary of Marwari words.
          </blockquote>
        </div>
        <h2 class="tw-text-center tw-text-xl tw-my-8 tw-uppercase tw-tracking-wide tw-text-pink-500 tw-max-w-max tw-mx-auto tw-font-medium">We aim to</h2>
        <div class="tw-mx-3 tw-my-4 sm:tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4">
          <div
            class="marwari-aim-div tw-group tw-m-3 tw-flex tw-gap-4 tw-items-center tw-px-4 tw-py-2 tw-rounded-2xl tw-border tw-border-blue-100 hover:tw-scale-110 tw-transform tw-transition-transform"
            v-for="aim in aims"
            :key="aim.text"
          >
            <v-icon class="!tw-text-blue-500 group-hover:!tw-text-green-600 group-hover:tw-scale-110 tw-transform">{{mdiCheckCircle}}</v-icon>
            <p class="tw-flex-grow tw-text-lg tw-text-blue-900 group-hover:tw-text-green-800">{{aim.text}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="help-others-section-background tw-py-3 tw-flex tw-flex-col tw-items-center tw-justify-center">
      <div class="tw-max-w-screen-lg tw-mx-auto">
        <div class="tw-mx-3 tw-flex tw-flex-col-reverse md:tw-flex-row tw-items-center tw-justify-evenly tw-gap-4">
          <div class="tw-w-full md:tw-w-2/3">
            <h3 class="tw-text-2xl md:tw-text-3xl tw-text-gray-700 tw-text-center">
              <v-icon class="!tw-text-red-500">{{mdiHeart}}</v-icon> Help others to learn Marwari better.
            </h3>
            <p class="tw-mt-6 tw-text-lg tw-text-gray-600 tw-text-justify">
              Currently, the entire code and all the words we have added is available for <span class="tw-font-medium tw-uppercase">free</span> on our <v-icon class="!tw-text-gray-800">{{mdiGithub}}</v-icon> Github repository. You too can contribute by adding more words as we strive to build several largest bilingual Marwari dictionaries. Join us on <a
                href="https://github.com/madrecha/marwaridictionary"
                target="_blank"
                rel="noopener noreferrer"
                class="tw-link tw-link-secondary"
              >Github (marwaridictionary)</a> to help others learn.
            </p>
          </div>
          <div class="tw-w-full md:tw-w-1/3 tw-flex tw-justify-center tw-items-center">
            <svg-father-son class="tw-w-[70%] md:tw-w-full tw-h-auto tw-mx-auto"></svg-father-son>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SvgGirlLearningPaperLetters from "~/assets/images/girl-learning-paper-letters.svg?inline";
import SvgFatherSon from "~/assets/images/father-son.svg?inline";
import SvgGirlHoldingDocuments from "~/assets/images/girl-holding-documents.svg?inline";

import { mdiGithub, mdiHeart, mdiMagnify, mdiCheckCircle } from "@mdi/js";

export default {
  name: "HomeIndexPage",
  components: {
    SvgGirlLearningPaperLetters,
    SvgFatherSon,
    SvgGirlHoldingDocuments
  },
  data() {
    return {
      mdiGithub,
      mdiMagnify,
      mdiHeart,
      mdiCheckCircle,
      aims: [
        {
          icon: "",
          text: "help people learn Marwari language with ease and convenience"
        },
        {
          icon: "",
          text: "create an all-in-one resource portal for Marwari language"
        },
        {
          icon: "",
          text: "conserve Marwari language u/ Article 29 of Indian Constitution"
        },
        {
          icon: "",
          text: "preserve the community's cultural heritage for posterity"
        },
        {
          icon: "",
          text: "popularize Marwari for pseudo-native speakers of the future"
        },
        {
          icon: "",
          text: "avert the declining usage of Marwari language"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
// .h1-title-custom
//   will-change: transform
//   animation: enterfromright 0.5s forwards
//   @apply tw-transform tw-transition-transform

// .h1-description-custom
//   will-change: transform
//   animation: enterfromleft 0.5s forwards
//   @apply tw-transform tw-transition-transform

// @keyframes enterfromright
//   from
//     @apply tw-translate-x-5
//   to
//     @apply tw-translate-x-0

// @keyframes enterfromleft
//   from
//     @apply tw--translate-x-5
//   to
//     @apply tw-translate-x-0

.marwari-browse-link
  &:hover
    background: rgb(236,255,249)
    background: linear-gradient(110deg, rgba(236,255,249,1) 0%, rgba(229,255,250,1) 50%, rgba(228,250,255,1) 100%)

.marwari-aim-div
  background: rgb(255,255,255)
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,251,255,1) 100%)
  &:hover
    background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,255,250,1) 100%)
    @apply tw-shadow tw-border-green-300

.help-others-section-background
  background: rgb(248,254,255)
  background: linear-gradient(135deg, rgba(248,254,255,1) 0%, rgba(234,255,255,1) 100%)
// .github-repo-section-background
//   background: rgb(248,254,255)
//   background: linear-gradient(135deg, rgba(248,254,255,1) 0%, rgba(255,251,238,1) 100%)
</style>

