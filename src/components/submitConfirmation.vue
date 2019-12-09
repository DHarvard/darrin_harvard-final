<template>
    <v-container>
        <v-row>
            <v-col class="text-center">
                <h1>Thank You for your Submission</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-center">
                <p><strong>Name</strong><br>{{ this.$store.state.userInfo[0].name }}</p>
                <p><strong>Email</strong><br>{{ this.$store.state.userInfo[0].email }}</p>
                <p><strong>Favorite Character</strong><br>{{ this.$store.state.userInfo[0].favChar }}</p>
                <p><strong>Least Favorite Character</strong><br>{{ this.$store.state.userInfo[0].leastFavChar }}</p>
                <p><strong>Your Message</strong><br>{{ this.$store.state.userInfo[0].message }}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style scoped>

</style>