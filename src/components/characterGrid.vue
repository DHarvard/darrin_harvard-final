<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" md="6" lg="4" xl="3" v-for="character in characters" :key="character.name">
        <v-expansion-panels focusable dark multiple>
          <v-expansion-panel>
              <v-expansion-panel-header :character="character" hide-actions> <h1> {{ character.id }} <br> {{ character.name | allCaps}} </h1> <img class="images" :src="character.image" /></v-expansion-panel-header>
                <v-expansion-panel-content>
                    
                      <h2> {{ character.series }} <br><br> </h2>
                      
                        <div>
                          <h3>Information</h3>
                            <span>Tier: {{ character.tier }}<br></span>
                            <span>Difficulty: {{ character.difficulty }}<br></span> 
                            <span>Weight: {{ character.weight }}</span> <br><br>
                        </div>

                        <div>
                          <h3>Special Moves</h3>
                            <span>Standard Special: {{ character.standard_special }} <br> </span> 
                            <span>Up Special: {{ character.up_special }} <br> </span> 
                            <span>Side Special: {{ character.side_special }} <br> </span> 
                            <span>Down Special: {{ character.down_special }} <br> </span>  
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
  props: ["characters"],
  components: {
    
  },
  filters: {
        allCaps(value) {
            return value.toUpperCase();
        }
  }
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