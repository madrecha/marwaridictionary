<template>
  <div class="tw-mx-auto">
    <div id="first-section" class="tw-text-center">
      <div class="tw-max-w-4xl tw-mt-2 sm:tw-mt-6 tw-mx-auto">
        <div class="sm:tw-flex sm:tw-justify-center">
          <div class="sm:tw-w-1/3">
            <girl-learning-paper-letters
              class="tw-w-48 tw-h-48 sm:tw-w-60 sm:tw-h-60 tw-mx-auto"
            ></girl-learning-paper-letters>
          </div>
          <h1
            class="sm:tw-w-2/3 tw-mt-1 sm:tw-mt-3 tw-text-5xl md:tw-text-8xl tw-text-blue-900 tw-tracking-wide"
          >
            Marwari Dictionary
          </h1>
        </div>
        <h2
          class="tw-mt-8 sm:tw-mt-0 tw-text-3xl md:tw-text-6xl tw-text-pink-700 tw-leading-3"
        >
          Learn Marwari language
        </h2>
      </div>
      <div
        class="tw-mt-16 sm:tw-mt-16 tw-border-t-4 tw-border-dashed tw-border-blue-800"
      >
        <nuxt-link
          to="/word"
          class="tw-p-6 tw-rounded-xl tw-text-white tw-font-medium tw-bg-gradient-to-br tw-from-pink-500 tw-to-pink-700 hover:tw-from-white hover:tw-to-pink-100 hover:tw-shadow-2xl tw-border-t-2 hover:tw-border-pink-200 hover:tw-text-pink-800 tw-text-xl"
          >Browse Marwari Words</nuxt-link
        >
      </div>
      <div class="tw-max-w-4xl tw-mt-12 tw-mx-auto">
        <p class="tw-text-2xl tw-text-pink-900">
          A place to learn Marwari / Marwadi, Rajasthani, Mewadi and improve
          your vocabulary of Marwari words.
        </p>
        <p class="tw-mt-3 tw-text-xl tw-text-gray-700">
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
    </div>
  </div>
</template>

<script>
import GirlLearningPaperLetters from "~/components/svg/girl-learning-paper-letters.vue";
export default {
  components: { GirlLearningPaperLetters },
};
</script>

<style lang="postcss" scoped>
.title {
  girllearningpaperlettersfont-family: "Quicksand", "Source Sans Pro",
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
