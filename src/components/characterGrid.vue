<template>
  <v-container>
        <v-expansion-panels focusable dark>
            <v-expansion-panel v-for="character in characters" :key="character.name">
      
            <v-expansion-panel-header :character="character"> <h1> {{ character.id }} {{ character.name | allCaps}} </h1> </v-expansion-panel-header>
            
            <v-expansion-panel-content> 
              <v-img src="character.image"></v-img>
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
