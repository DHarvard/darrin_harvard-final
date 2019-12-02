<template>
  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 80"
      :key="i"
    >
      <v-expansion-panel-header></v-expansion-panel-header>
      <v-expansion-panel-content>
        
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'Smash',

  data: () => ({
    
  }),
};
</script>
