<template>
    
  <!-- <v-container>
  <v-row>
    <v-col cols="4" v-for="character in characters" :key="character.name">
      <smashFighter :character="character"></smashFighter>
    </v-col>
  </v-row>
</v-container> -->

  <v-card>
    <v-card-title>
            <div>
                <h3> {{ character.id }} {{ character.name | allCaps}} </h3>
            </div>
    </v-card-title>

        <v-card-actions>

        </v-card-actions>
</v-card>
</template>

<script>
export default {
    props: ["character"],
    filters: {
        allCaps(value) {
            return value.toUpperCase();
        }
    }
}
</script>

<style scoped>

</style>

