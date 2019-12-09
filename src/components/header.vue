<template>
    <div>
        <v-toolbar dark>
            <router-link to="/" active-class="active" exact>
                <a href="#">
                    <v-img class="logo" src="../assets/logo.png"> </v-img>
                </a>
            </router-link>
                <v-spacer></v-spacer>
            <v-toolbar-items>

                <v-btn to="/" exact text >HOME</v-btn>

                <v-divider class="white" vertical></v-divider>

                <v-btn to="/fighters" exact text >FIGHTERS</v-btn>

                <v-divider class="white"  vertical></v-divider>

                <v-btn to="/contact" exact text >CONTACT</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        
    </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style scoped>
    .logo {
        height: 60px;
        width: 155px;
    }
</style>
