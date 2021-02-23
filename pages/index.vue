<template>
  <div class="tw-mx-auto">
    <div id="first-section" class="tw-text-center tw-mt-3">
      <div
        class="tw-pb-20 tw-border-b-2 tw-border-dashed tw-border-blue-800 tw-bg-gradient-to-br tw-from-white tw-via-white tw-to-pink-50"
      >
        <div class="tw-max-w-4xl tw-mx-auto">
          <div class="md:tw-flex md:tw-justify-center">
            <div class="md:tw-w-1/3">
              <svg-girl-learning-paper-letters
                class="tw-w-48 tw-h-48 md:tw-w-60 md:tw-h-60 tw-mx-auto"
              ></svg-girl-learning-paper-letters>
            </div>
            <h1
              class="md:tw-w-2/3 tw-mt-1 md:tw-mt-3 tw-text-5xl md:tw-text-8xl tw-text-blue-900 tw-tracking-wide"
            >
              Marwari Dictionary
            </h1>
          </div>
          <h2
            class="tw-mt-8 md:tw-mt-0 tw-text-3xl md:tw-text-6xl tw-text-pink-700 tw-leading-3"
          >
            Learn Marwari language
          </h2>
        </div>
      </div>
      <div class="tw--mt-5">
        <nuxt-link
          to="/word"
          class="tw-p-6 tw-rounded-xl tw-text-white tw-font-medium tw-bg-gradient-to-br tw-from-pink-500 tw-to-pink-700 hover:tw-from-white hover:tw-to-pink-100 tw-shadow-xl tw-border-t-2 hover:tw-border-pink-200 hover:tw-text-pink-800 tw-text-xl"
          >Browse Marwari Words</nuxt-link
        >
      </div>
      <div
        class="tw-py-2 tw-mt-10 md:tw-mt-3 md:tw-flex tw-justify-center tw-items-start tw-bg-gradient-to-br tw-from-white tw-via-white tw-to-blue-50"
      >
        <div
          class="tw-px-3 md:tw-w-10/12 md:tw-flex tw-justify-center tw-items-center md:tw-pt-8"
        >
          <p class="tw-text-2xl tw-text-pink-900">
            A place to learn Marwari / Marwadi, Rajasthani, Mewadi and improve
            your vocabulary of Marwari words.
          </p>
          <p class="tw-mt-3 md:tw-mt-0 tw-text-xl tw-text-gray-700">
            If you already know better, then
            <a
              href="https://github.com/madrecha/marwaridictionary"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-text-blue-800 tw-border-b tw-border-blue-800"
            >
              join us</a
            >
            to help others learn.
          </p>
        </div>
        <div class="md:tw-w-2/12 md:tw-px-2 md:tw--mt-4 tw-mt-3">
          <svg-father-son
            class="tw-w-48 tw-h-36 md:tw-w-40 lg:tw-w-48 tw-mx-auto"
          ></svg-father-son>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgGirlLearningPaperLetters from "~/components/svg/svg-girl-learning-paper-letters.vue";
import SvgFatherSon from "~/components/svg/svg-father-son.vue";

export default {
  components: { SvgGirlLearningPaperLetters, SvgFatherSon },
};
</script>
