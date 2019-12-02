<template>
  <v-app>

    <v-content>
      <characterGrid :characters="characters"></characterGrid>
    </v-content>

  </v-app>
</template>

<script>
import characterGrid from './components/characterGrid';
import { characters } from './assets/characters';

export default {
  name: 'App',

  components: {
    characterGrid,
  },

  data: () => {
    return {
      characters
    }
  },
};
</script>
