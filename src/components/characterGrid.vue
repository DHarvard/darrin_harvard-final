<template>
<!-- <v-container>
  <v-row>
    <v-col cols="4" v-for="character in characters" :key="character.name">
      <smashFighter :character="character"></smashFighter>
    </v-col>
  </v-row>
</v-container> -->
<v-container>
        <v-expansion-panels focusable>
            <v-expansion-panel v-for="character in characters" :key="character.name">
      
            <v-expansion-panel-header :character="character"> <h3> {{ character.id }} {{ character.name | allCaps}} </h3> </v-expansion-panel-header>
            
            <v-expansion-panel-content> 
              
              <h2> {{ character.series }} <br><br> </h2>

                <div>
                  <h4>Information</h4>
                  <span>Tier: {{ character.tier }}<br></span>
                  <span>Difficulty: {{ character.difficulty }}<br></span> 
                  <span>Weight: {{ character.weight }}</span> <br><br>
                </div>

              <div>
                <h4>Special Moves</h4>
              <span>Standard Special: {{ character.standard_special }} <br> </span> 
              <span>Up Special: {{ character.up_special }} <br> </span> 
              <span>Side Special: {{ character.side_special }} <br> </span> 
              <span>Down Special: {{ character.down_special }} <br> </span>  
              </div>
              
              </v-expansion-panel-content>
    
            </v-expansion-panel>
        </v-expansion-panels>
  </v-container>
</template>

<script>


export default {
  props: ["characters"],
  components: {
    
  }
}
</script>
