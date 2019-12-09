<template>
    <v-content>
        <v-row>
            <v-col class="pt-0 pb-0">
                <div class="back"></div>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style scoped>
    .back {
        background-image: url("../assets/homeBanner.jpg");
        min-height: 845px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>