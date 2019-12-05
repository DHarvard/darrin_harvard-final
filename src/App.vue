<template>
<div max-width="100px">
  <v-app id="back">
    <v-app-bar dark>
      <v-toolbar-title>
        <projHeader></projHeader>
      </v-toolbar-title>
    </v-app-bar>
  
    <div class="banner">
    <v-content>
      <v-row class="push">
        <v-col>
      <characterGrid :characters="characters"></characterGrid>
        </v-col>
      </v-row>
    </v-content>
    </div>
  
    <v-footer padless dark>
    <projFooter></projFooter>
  </v-footer>
  </v-app>
</div>
</template>

<script>
import characterGrid from './components/characterGrid';
import { characters } from './assets/characters';
import header from './components/header';
import footer from './components/footer';

export default {
  name: 'App',

  components: {
    characterGrid,
    projHeader: header,
    projFooter: footer
  },

  data: () => {
    return {
      characters
    }
  },
};
</script>

<style scoped>
  .banner {
    background-image: url("./assets/banner.png");
    background-position: center top;
  }
  .push {
    padding-top: 625px;
  }

  #back {
    background: none;
    background-color: red;
}
</style>
