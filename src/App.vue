<template>
<div max-width="100px">
  <v-app>
    <v-app-bar dark>
      <v-toolbar-title>
        <projHeader></projHeader>
      </v-toolbar-title>
    </v-app-bar>
  
    <div class="banner">
    <v-content>
      <v-row class="push">
        <v-col>
          <fighterGrid :fighters="fighters"></fighterGrid>
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
import fighterGrid from './components/fighterGrid';
import { fighters } from './assets/fighters';
import header from './components/header';
import footer from './components/footer';

export default {
  name: 'App',

  components: {
    fighterGrid,
    projHeader: header,
    projFooter: footer
  },

  data: () => {
    return {
      fighters
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
    padding-top: 615px;
  }
</style>
