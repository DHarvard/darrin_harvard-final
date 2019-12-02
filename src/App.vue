<template>
  <v-app>

    <v-content>
      <Smash/>
    </v-content>

  </v-app>
</template>

<script>
import Smash from './components/smash';

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
