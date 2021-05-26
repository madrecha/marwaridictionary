<template>
  <div class="tw-pt-8">
    <section class="tw-py-6 tw-bg-gradient-to-br tw-from-white tw-via-white tw-to-pink-50 tw-text-center">
      <div class="tw-max-w-4xl tw-mx-auto">
        <div class="md:tw-flex md:tw-justify-center">
          <div class="md:tw-w-1/3">
            <svg-girl-learning-paper-letters class="tw-w-48 tw-h-48 md:tw-w-60 md:tw-h-60 tw-mx-auto"></svg-girl-learning-paper-letters>
          </div>
          <h1 class="h1-title-custom md:tw-w-2/3 tw-mt-1 md:tw-mt-3 tw-text-5xl md:tw-text-8xl tw-text-secondary-focus tw-tracking-wide">
            Marwari Dictionary
          </h1>
        </div>
        <p class="h1-description-custom tw-mb-8 tw-text-3xl md:tw-text-6xl tw-text-primary-focus tw-leading-3">
          Learn Marwari language
        </p>
        <div class="tw-divider tw-mt-20 tw-mb-16">
          <nuxt-link
            :to="`/${$i18n.locale}/browse/`"
            class="marwari-browse-link tw-group"
          > Browse Marwari Words <fa-icon
              :icon="faSearch"
              class="fa-lg fa-flip-horizontal tw-ml-2 tw-hidden group-hover:tw-block "
            ></fa-icon>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="tw-bg-gradient-to-bl tw-from-pink-50 tw-via-white tw-to-white tw-pt-3 tw-pb-12 sm:tw-flex tw-justify-center tw-items-start ">
      <div class="tw-max-w-4xl tw-mx-auto">
        <div class="tw-flex tw-items-center tw-justify-between">
          <img
            src="~/assets/images/girl-holding-documents.svg"
            alt=""
            width="200"
            loading="lazy"
          />
          <blockquote class="tw-px-4 tw-py-10 tw-my-4 tw-text-xl md:tw-text-3xl tw-italic  tw-text-red-800 tw-text-center tw-border-b-2 tw-border-t-2 tw-border-yellow-500">
            <span>

            </span>
            Learn Marwari / Marwadi, Rajasthani, Mewadi languages and dialects. Improve
            your vocabulary of Marwari words.
          </blockquote>
        </div>
        <h2 class="marwari-aims-heading">We aim to</h2>
        <div class="tw-my-4 sm:tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          <div
            class="marwari-aim-div tw-group"
            v-for="aim in aims"
            :key="aim.text"
          >
            <fa-icon
              :icon="['far', 'check-circle']"
              class="marwari-aim-icon fa-lg"
            ></fa-icon>
            <p class="marwari-aim-text">{{aim.text}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="help-others-section-background tw-min-h-[40vh] tw-py-3 tw-flex tw-flex-col tw-items-center tw-justify-center">
      <div class="tw-max-w-4xl tw-mx-auto">
        <div class="sm:tw-flex tw-items-center tw-justify-evenly tw-mt-3">
          <div>
            <h3 class="tw-text-3xl tw-text-gray-700">
              <fa-icon
                :icon="['fas', 'heart']"
                class="fa-fw tw-text-red-500"
              ></fa-icon> Help others to learn Marwari better.
            </h3>

            <p class="tw-mt-6 tw-text-lg tw-text-gray-500">
              Currently, the entire code and all the words we have added is available for <span class="tw-font-medium tw-uppercase">free</span> on our <fa-icon
                :icon="faGithub"
                class="fa-fw tw-text-gray-800"
              ></fa-icon> Github repository. You can easily contribute by adding more words as we strive to build several largest bilingual Marwari dictionaries. Join us on <a
                href="https://github.com/madrecha/marwaridictionary"
                target="_blank"
                rel="noopener noreferrer"
                class="tw-link tw-link-secondary"
              >Github (marwaridictionary)</a> to help others learn.
            </p>
          </div>
          <div class="tw-px-2">
            <svg-father-son class="tw-w-48 tw-mx-auto"></svg-father-son>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SvgGirlLearningPaperLetters from "~/components/svg/svg-girl-learning-paper-letters.vue";
import SvgFatherSon from "~/components/svg/svg-father-son.vue";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default {
  name: "HomeIndexPage",
  components: { SvgGirlLearningPaperLetters, SvgFatherSon },
  data() {
    return {
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
  },
  computed: {
    faSearch() {
      return faSearch;
    },
    faGithub() {
      return faGithub;
    }
  },
  head() {
    const website = "https://marwari.info";
    if (this.$route) {
      return {
        link: [
          {
            hid: "canonical",
            rel: "canonical",
            href: this.$route.path.endsWith("/")
              ? `${website}/${this.$route.path}`
              : `${website}/${this.$route.path}/`
          }
        ]
      };
    }
  }
};
</script>

<style lang="sass" scoped>
.h1-title-custom
  animation: enterfromright 0.5s forwards
  @apply tw-transform tw-transition-all

.h1-description-custom
  animation: enterfromleft 0.5s forwards
  @apply tw-transform tw-transition-all

@keyframes enterfromright
  from
    @apply tw-translate-x-5
  to
    @apply tw-translate-x-0

@keyframes enterfromleft
  from
    @apply tw--translate-x-5
  to
    @apply tw-translate-x-0

.marwari-browse-link
  @apply tw-btn tw-p-10 tw-flex-nowrap tw-rounded-xl tw-font-medium tw-shadow-xl tw-text-xl
  @apply tw-bg-gradient-to-br tw-from-white tw-to-green-50 tw-text-green-600 tw-border tw-border-green-200
  @apply tw-transform hover:tw-text-green-600 hover:tw-border-green-200 hover:tw-scale-110
  &:hover
    background: rgb(236,255,249)
    background: linear-gradient(110deg, rgba(236,255,249,1) 0%, rgba(229,255,250,1) 50%, rgba(228,250,255,1) 100%)

.marwari-aims-heading
  @apply tw-text-center tw-text-xl tw-my-8 tw-uppercase tw-tracking-wide tw-text-pink-500 tw-max-w-max tw-mx-auto tw-font-medium
.marwari-aim-div
  background: rgb(255,255,255)
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,251,255,1) 100%)
  @apply tw-mx-3 tw-flex tw-gap-4 tw-items-center tw-min-h-16 tw-px-4 tw-py-2 tw-rounded-2xl tw-border tw-border-blue-100 hover:tw-scale-110 tw-transform tw-transition-transform
  &:hover
    background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,255,250,1) 100%)
    @apply tw-shadow tw-border-green-300
.marwari-aim-icon
  @apply tw-text-blue-500 group-hover:tw-text-green-600 group-hover:tw-scale-110 tw-transform
.marwari-aim-text
  @apply tw-flex-grow tw-text-lg tw-text-blue-900 group-hover:tw-text-green-800

.help-others-section-background
  background: rgb(248,254,255)
  background: linear-gradient(135deg, rgba(248,254,255,1) 0%, rgba(234,255,255,1) 100%)
// .github-repo-section-background
//   background: rgb(248,254,255)
//   background: linear-gradient(135deg, rgba(248,254,255,1) 0%, rgba(255,251,238,1) 100%)
</style>

