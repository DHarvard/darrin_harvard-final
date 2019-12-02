<template>
    <v-card>
        <v-card-title>
            <div>
                <h3> {{ character.id }} {{ character.name | allCaps}} </h3>
            </div>
            <div>

            </div>
        </v-card-title>

        <v-card-actions>

        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ["character"],
    filters: {
        allCaps(value) {
            return value.toUpperCase();
        }
    }
}
</script>

<style scoped>

</style>