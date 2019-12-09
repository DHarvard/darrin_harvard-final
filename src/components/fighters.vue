<template>
    <v-container>
        <v-row>
            <v-col>
                <v-parallax height="600" src="../assets/banner.png" justify="center" align="center" >
                    <h1 Class="text-center display-4">FIGHTERS</h1>
                </v-parallax>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
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