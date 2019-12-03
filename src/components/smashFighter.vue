<template>
    <!-- <v-container>
        <v-expansion-panels focusable>
            <v-expansion-panel>
      
            <v-expansion-panel-header> <h3> {{ character.id }} {{ character.name | allCaps}} </h3> </v-expansion-panel-header>
            
            <v-expansion-panel-content> </v-expansion-panel-content>
    
            </v-expansion-panel>
        </v-expansion-panels>
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

