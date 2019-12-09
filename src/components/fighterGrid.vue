<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" md="6" lg="4" xl="3" v-for="fighter in fighters" :key="fighter.name">
        <v-expansion-panels focusable dark multiple>
          <v-expansion-panel>
              <v-expansion-panel-header :fighter="fighter" hide-actions> <h1> {{ fighter.id }} <br> {{ fighter.name | allCaps}} </h1> <img class="images" :src="fighter.image" /></v-expansion-panel-header>
                <v-expansion-panel-content>
                    
                      <h2> {{ fighter.series }} <br><br> </h2>
                      
                        <div>
                          <h3>Information</h3>
                            <span>Tier: {{ fighter.tier }}<br></span>
                            <span>Difficulty: {{ fighter.difficulty }}<br></span> 
                            <span>Weight: {{ fighter.weight }}</span> <br><br>
                        </div>

                        <div>
                          <h3>Special Moves</h3>
                            <span>Standard Special: {{ fighter.standard_special }} <br> </span> 
                            <span>Up Special: {{ fighter.up_special }} <br> </span> 
                            <span>Side Special: {{ fighter.side_special }} <br> </span> 
                            <span>Down Special: {{ fighter.down_special }} <br> </span>  
                        </div>
                    
                </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
  props: ["fighters"],

  filters: {
    allCaps(value) {
    return value.toUpperCase();
    },
  },
}
</script>

<style scoped>
  .images {
    height: 150px;
    width: 150px;
    max-height: 150px;
    max-width: 150px;
  }
</style>