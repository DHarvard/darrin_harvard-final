<template>
  <v-app>

    <v-content>
      <Smash/>
    </v-content>

  </v-app>
</template>

<script>
import Smash from './components/Smash';

export default {
  name: 'App',

  components: {
    Smash,
  },

  data: () => ({
    //
  }),
};
</script>
