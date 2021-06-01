<template>
  <div>
    <v-navigation-drawer
      app
      v-model="toggleMenu"
      class="!tw-z-50"
      clipped
    >
      <template #prepend>
        <v-card v-if="$vuetify.breakpoint.smAndDown">
          <v-card-title>
            <nuxt-link
              :to="localePath('/')"
              class="pink--text text--darken-2"
            >
              <v-icon color="pink">{{mdiHome}}</v-icon>

              Marwari Dictionary

            </nuxt-link>
          </v-card-title>
        </v-card>
      </template>

      <ul class="nav tw-flex tw-flex-col tw-my-2 !tw-px-1">
        <li
          v-for="menu in menus"
          :key="menu.text"
          :class="`hover:${menu.bgcolor}`"
          
        >
          <nuxt-link
            exact
            :to="localePath(menu.link)"
            class="tw-block tw-p-4 !tw-text-gray-500"
          >
            <v-icon
              left
              :color="menu.color"
            >{{ menu.icon }}</v-icon>{{ menu.text }}
          </nuxt-link>
        </li>
      </ul>

      <template #append>
        <footer class="tw-p-2">
          &copy; Manas Madrecha
        </footer>
        <div
          class="tw-flex tw-mx-2"
          v-if="$vuetify.breakpoint.smAndDown"
        >
          <a
            href="https://github.com/madrecha/marwaridictionary"
            target="_blank"
            rel="noopener noreferrer"
            class="tw-block tw-p-2 tw-rounded-xl hover:tw-bg-gray-50 hover:tw-shadow"
            title="Marwari Dictionary Github repository"
          >
            <v-icon color="grey darken-3">{{mdiGithub}}</v-icon>
          </a>

          <a
            href="https://instagram.com/ManasMadrecha"
            target="_blank"
            rel="noopener noreferrer"
            class="tw-block tw-p-2 tw-rounded-xl hover:tw-bg-pink-50 hover:tw-shadow"
            title="Manas Madrecha Instagram follow"
          >
            <v-icon color="pink darken-3">{{mdiInstagram}}</v-icon>
          </a>
        </div>
      </template>

    </v-navigation-drawer>

    <v-app-bar
      app
      class="!tw-z-40"
      clipped-left
      flat
    >
      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to right, white, #E0F7FA"
        >
        </v-img>
      </template>

      <v-app-bar-nav-icon
        role="menu"
        @click.stop="toggleMenu = !toggleMenu"
        color="grey"
      ></v-app-bar-nav-icon>

      <div class="tw-w-full tw-flex tw-justify-between tw-items-center">
        <div class="tw-w-[90%] md:tw-w-[30%] tw-mx-2">
          <nuxt-link
            :to="localePath('/')"
            class="tw-block tw-p-2 !tw-text-pink-700 tw-font-semibold  tw-text-xl md:tw-text-2xl"
          >Marwari Dictionary</nuxt-link>
        </div>

        <div
          class="tw-w-[10%] tw-mx-2"
          v-if="$vuetify.breakpoint.smAndDown"
        >
          <v-btn
            text
            icon
            color="blue darken-4"
            @click="toggleSearch = true"
          >
            <v-icon>{{mdiMagnify}}</v-icon>
          </v-btn>
        </div>

        <div
          class="tw-w-[60%] tw-mx-2"
          v-if="$vuetify.breakpoint.mdAndUp"
        >
          <search-words-full width="tw-w-full"></search-words-full>
        </div>

        <div
          class="tw-w-[10%] tw-flex tw-mx-2"
          v-if="$vuetify.breakpoint.mdAndUp"
        >
          <a
            href="https://github.com/madrecha/marwaridictionary"
            target="_blank"
            rel="noopener noreferrer"
            class="tw-block tw-p-2 tw-rounded-xl hover:tw-bg-gray-50 hover:tw-shadow"
            title="Marwari Dictionary Github repository"
          >
            <v-icon color="grey darken-3">{{mdiGithub}}</v-icon>
          </a>

          <a
            href="https://instagram.com/ManasMadrecha"
            target="_blank"
            rel="noopener noreferrer"
            class="tw-block tw-p-2 tw-rounded-xl hover:tw-bg-pink-50 hover:tw-shadow"
            title="Manas Madrecha Instagram follow"
          >
            <v-icon color="pink darken-3">{{mdiInstagram}}</v-icon>
          </a>
        </div>
      </div>

    </v-app-bar>

    <v-dialog
      v-model="toggleSearch"
      scrollable
      v-if="$vuetify.breakpoint.smAndDown"
      eager
    >
      <section class="tw-min-h-[80vh] tw-flex tw-flex-col tw-bg-white">

        <h2 class="tw-p-2 tw-m-1 tw-text-center tw-text-xl tw-font-medium">Search for Marwari words </h2>

        <!-- <search-words-full
          @linkClicked="toggleSearch = false"
          @searchButtonClicked="toggleSearch = true"
        ></search-words-full> -->

        <div class="tw-w-[80%] tw-mx-auto">
          <search-words-full
            width="tw-w-full"
            @linkClicked="toggleSearch = false"
          ></search-words-full>
        </div>

        <v-spacer></v-spacer>

        <v-btn
          color="blue darken-1"
          text
          @click="toggleSearch = false"
        >
          Close
        </v-btn>
      </section>
    </v-dialog>
  </div>
  <!-- <LanguageInput></LanguageInput> -->
</template>

<script>
import LanguageInput from "~/components/organisms/LanguageInput";
import SearchWordsFull from "~/components/organisms/SearchWordsFull";

import {
  mdiMenu,
  mdiHome,
  mdiMagnify,
  mdiBookEditOutline,
  mdiSortAlphabeticalVariant,
  mdiTagMultiple,
  mdiPackage,
  mdiGithub,
  mdiInstagram
} from "@mdi/js";

export default {
  components: { LanguageInput, SearchWordsFull },
  data() {
    return {
      mdiMenu,
      mdiHome,
      mdiMagnify,
      mdiGithub,
      mdiInstagram,
      toggleMenu: false,
      toggleSearch: false,
      menus: [
        {
          icon: mdiHome,
          text: `Home`,
          link: `/`,
          color: `yellow darken-3`,
          bgcolor: `tw-bg-yellow-50`
        },
        {
          icon: mdiBookEditOutline,
          text: `Dictionary`,
          link: `/dictionary`,
          color: `blue`,
          bgcolor: `tw-bg-blue-50`
        },
        {
          icon: mdiSortAlphabeticalVariant,
          text: `Browse all words`,
          link: `/browse`,
          color: `pink`,
          bgcolor: `tw-bg-pink-50`
        },

        {
          icon: mdiPackage,
          text: `Topics`,
          link: `/topic`,
          color: `green`,
          bgcolor: `tw-bg-green-50`
        },
        {
          icon: mdiTagMultiple,
          text: `Labels`,
          link: `/label`,
          color: `indigo`,
          bgcolor: `tw-bg-blue-50`
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
// .header-custom
//   background: rgb(236,255,249)
//   background: linear-gradient(110deg, rgba(236,255,249,1) 0%, rgba(229,255,250,1) 50%, rgba(228,250,255,1) 100%)
.nav .nuxt-link-exact-active
  @apply tw-font-bold tw-bg-gray-100
</style>