<template>
  <section class="word-component word-pos-section">
    <header
      class="word-component-header word-pos-header"
      @click="togglePos = !togglePos"
    >
      <h2 class="word-component-heading word-pos-heading"><span class="word-pos-heading-span-word">{{word}}</span> <span></span>
        <span
          lang="mwr-Latn"
          class="word-pos-heading-span-word-trans"
          v-if="wordFetched && wordFetched.transliteration"
        >({{wordFetched.transliteration}})</span>
        <span
          class="word-component-heading-span word-pos-heading-span-pos"
          :title="`part of speech ${pos}`"
        >{{pos}}</span>
      </h2>
      <span class="word-component-collapse-icon word-pos-collapse-icon">{{togglePos ? `+` : `-`}}</span>
    </header>
    <!-- <span class="tw-text-gray-500">Pronunciation</span> -->

    <p class="tw-mx-2 tw-text-gray-500 tw-bg-gray-50 tw-max-w-max tw-px-2 tw-py-0.5">
      <span v-if="this.partOfSpeech === 'adjective'">
        {{adjective}}
      </span>
      <span v-if="this.partOfSpeech === 'noun'">
        <span>{{noun}}</span> <span v-if="nounCounterpartFetched">| opposite of {{word}}: <nuxt-link
            :to="localePath(`/dictionary/${$route.params.dict}/${nounCounterpartFetched.slugurl}`)"
            class="tw-link tw-link-secondary"
          >
            {{nounCounterpartFetched.slugurl}}
          </nuxt-link>
        </span>
      </span>
      <span v-if="this.partOfSpeech === 'verb'">
        {{verb}}
      </span>
    </p>

    <div
      class="word-component-slot-wrapper word-pos-slot"
      v-show="!togglePos"
    >
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "WordPos",
  props: {
    pos: { type: String },
    close: { type: Boolean, default: false }
  },
  data() {
    return {
      wordFetched: null,
      nounCounterpartFetched: null,
      togglePos: this.close
    };
  },
  async fetch() {
    this.wordFetched = await this.$content(
      `dictionary/${this.$route.params.dict}`,
      { deep: true }
    )
      .where({ slugurl: this.word })
      .without(["body", "toc"])
      .fetch();
    this.wordFetched = this.wordFetched[0];

    if (this.nounCounterpart) {
      this.nounCounterpartFetched = await this.$content(
        `dictionary/${this.$route.params.dict}`,
        { deep: true }
      )
        .where({
          $and: [{ slug: { $ne: "AAA" } }, { slugurl: this.nounCounterpart }]
        })
        .without(["body", "toc"])
        .fetch();
      this.nounCounterpartFetched = this.nounCounterpartFetched[0];
    }
  },
  computed: {
    word() {
      return this.$route.params.slugurl;
    },
    partOfSpeech() {
      // let pos = {
      //   noun: ["noun", "n"],
      //   verb: ["verb", "v"],
      //   adjective: ["adjective", "adj"],
      //   adverb: ["adverb", "adv"],
      //   preposition: ["preposition", "prep"],
      //   conjuction: ["conjuction", "conj"]
      // };

      let pos = this.pos;
      if (pos === "noun" || pos === "n") {
        return "noun";
      } else if (pos === "verb" || pos === "v") {
        return "verb";
      } else if (pos === "pronoun" || pos === "pro") {
        return "pronoun";
      } else if (pos === "adjective" || pos === "adj") {
        return "adjective";
      } else if (pos === "adverb" || pos === "adv") {
        return "adverb";
      } else if (pos === "preposition" || pos === "prep") {
        return "preposition";
      } else if (pos === "conjunction" || pos === "conj") {
        return "conjunction";
      } else if (pos === "interjection") {
        return "interjection";
      } else return pos;
    },
    adjective() {
      let word = this.wordFetched;
      if (word && this.partOfSpeech === "adjective") {
        let genderVar =
          word?.grammar?.adjective?.gender ?? word?.grammar?.adjective?.g;
        let numberVar =
          word?.grammar?.adjective?.number ?? word?.grammar?.adjective?.n;

        let gender = null;
        let number = null;
        gender =
          genderVar === "m"
            ? "masculine"
            : genderVar === "f"
            ? "feminine"
            : null;
        number =
          numberVar === "s" ? "singular" : numberVar === "p" ? "plural" : null;

        return gender + " " + number;
      }
    },
    noun() {
      let word = this.wordFetched;
      if (word && this.partOfSpeech === "noun") {
        let genderVar = word?.grammar?.noun?.gender ?? word?.grammar?.noun?.g;
        let numberVar = word?.grammar?.noun?.number ?? word?.grammar?.noun?.n;

        let gender = null;
        let number = null;
        gender =
          genderVar === "m"
            ? "masculine"
            : genderVar === "f"
            ? "feminine"
            : null;
        number =
          numberVar === "s" ? "singular" : numberVar === "p" ? "plural" : null;

        return gender + " " + number;
      }
    },
    nounCounterpart() {
      let word = this.wordFetched;
      if (word && this.partOfSpeech === "noun") {
        let genderVar = word?.grammar?.noun?.gender ?? word?.grammar?.noun?.g;
        let femaleCounterpart = word?.grammar?.noun?.gender_f;
        let maleCounterpart = word?.grammar?.noun?.gender_m;
        if (genderVar === "m" && femaleCounterpart) {
          return femaleCounterpart;
        }
        if (genderVar === "f" && maleCounterpart) {
          return maleCounterpart;
        }
      }
    },
    verb() {
      let word = this.wordFetched;
      let type = null;
      if (word && this.partOfSpeech === "verb") {
        if (
          typeof word?.grammar?.verb?.type === "object" &&
          word?.grammar?.verb?.type.length > 0
        ) {
          return (type = word?.grammar?.verb?.type.join(", "));
        }
      }
      return type;
    }
  }
};
</script>

<style lang="sass" scoped>
.word-pos-section
  @apply tw-my-2 tw-py-1 tw-px-2 sm:tw-px-6
.word-pos-header
  @apply tw-border tw-border-gray-300 tw-rounded tw-px-2 sm:tw-px-6 tw-py-3 tw-my-2
  @apply tw-bg-gradient-to-r tw-from-white tw-via-white tw-to-pink-50
  @apply tw-cursor-pointer tw-flex tw-justify-between tw-items-center hover:tw-shadow-lg
.word-pos-collapse-icon
  @apply tw-text-pink-500 tw-text-2xl
// .word-pos-heading
.word-pos-heading-span-word
  text-shadow: 1px 1px 2px #ffdcdc
  @apply tw-text-pink-600 tw-font-semibold tw-text-2xl
.word-pos-heading-span-word-trans
  @apply tw-italic tw-text-base tw-text-pink-800
.word-pos-heading-span-pos
  @apply tw-text-gray-500 tw-italic tw-text-sm
</style>