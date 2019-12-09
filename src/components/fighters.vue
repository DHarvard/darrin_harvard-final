<template>
    <v-container class="pt-0">
        <v-row>
            <v-col class="pt-0">
                <v-parallax height="600" src="../assets/banner.png" justify="center" align="center">
                    <h1 Class="text-center display-3">FIGHTERS</h1>
                </v-parallax>
                <fighterGrid :fighters="fighters"></fighterGrid>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
import fighterGrid from './fighterGrid.vue';
import { fighters } from '../assets/fighters.js';

export default {
    props: [fighters],
    components: {
        fighterGrid,
    },
    data: () => {
    return {
      fighters
    }
  },
}
</script>

<style scoped>

</style>