<template>
  <v-app>
    <projHeader></projHeader>
    <v-content>
      <v-row>
        <v-col class="pt-0 pb-0">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-content>
    <projFooter></projFooter>
  </v-app>
</template>

<script>
import header from './components/header';
import footer from './components/footer';

export default {
  name: 'App',

  components: {
    projHeader: header,
    projFooter: footer
  },

  data: () => {
    return {
      
    }
  },
};
</script>

<style scoped>

</style>
