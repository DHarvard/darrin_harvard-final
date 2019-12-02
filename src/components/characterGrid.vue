<template>
<v-container>
  <v-row>
    <v-col cols="3" v-for="character in characters" :key="character.name">
      <smashFighter :character="character"></smashFighter>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import smashFighter from '../components/smashFighter'

export default {
  props: ["characters"],
  components: {
    smashFighter
  }
}
</script>
