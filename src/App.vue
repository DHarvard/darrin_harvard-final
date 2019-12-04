<template>
<div max-width="100px">
  <v-app id="clearBack">
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
    background-image: url("https://cdn.vox-cdn.com/thumbor/8od-gSnsLWWN-9xb-8bC2r_OPxQ=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/62634456/Nov_SSB_scrn115.0.jpg");
    background-position: center top;
    padding-bottom: 100px;
}

  .push {
    padding-top: 550px;
  }

  #clearBack {
    background: none;
}
</style>
