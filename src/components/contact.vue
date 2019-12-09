<template>
  <v-row justify="center">
      <v-col cols="12" sm="10" md="10" lg="10">
        <v-card ref="form">
          <v-card-text>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="25"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>

              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                :counter="25"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
            
              <v-select
                v-model="favChar"
                :items="characters"
                :error-messages="favCharErrors"
                label="Favorite Character"
                required
                @change="$v.favChar.$touch()"
                @blur="$v.favChar.$touch()"
              ></v-select>

              <v-select
                v-model="leastFavChar"
                :items="characters"
                :error-messages="leastFavCharErrors"
                label="Least Favorite Character"
                required
                @change="$v.leastFavChar.$touch()"
                @blur="$v.leastFavChar.$touch()"
              ></v-select>

              <v-textarea
                label="Write a message..."
                auto-grow
                v-model="message" 
              ></v-textarea>
          </v-card-text>

      <v-divider class="mt-12"></v-divider>
          <v-card-actions>
              <v-btn icon @click="clear">
                  <v-icon>mdi-refresh</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="mr-4" text @click="storeInfo(), submit()">Submit</v-btn>
          </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(25) },
      email: { required, email, maxLength: maxLength(25)},
      favChar: { required },
      leastFavChar: { required },
    },

    data: () => ({
      characters: ['Mario', 'Donkey Kong', 'Link', 'Samus', 'Dark Samus', 'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Luigi', 'Ness', 'Captain Falcon', 'Jigglypuff', 'Peach', 'Daisy', 'Bowser', 'Ice Climbers', 'Sheik', 'Zelda', 'Dr. Mario', 'Pichu', 'Falco', 'Marth', 'Lucina', 'Young Link', 'Ganondorf', 'Mewtwo', 'Roy', 'Chrom', 'Mr. Game & Watch', 'Meta Knight', 'Pit', 'Dark Pit', 'Zero Suit Samus', 'Wario', 'Snake', 'Ike', 'Pokemon Trainer', 'Diddy Kong', 'Lucas', 'Sonic', 'King Dede', 'Olimar', 'Lucario', 'R.O.B.', 'Toon Link', 'Wolf', 'Villager', 'Mega Man', 'Wii Fit Trainer', 'Rosalina & Luma', 'Little Mac', 'Greninja', 'MII Brawler', 'MII Swordfighter', 'MII Gunner', 'Palutena', 'Pac-Man', 'Robin', 'Shulk', 'Bowser Jr.', 'Duck Hunt', 'Ryu', 'Ken', 'Cloud', 'Corrin', 'Bayonetta', 'Inkling', 'Ridley', 'Simon', 'Richter', 'King K. Rool', 'Isabelle', 'Incineroar', 'Piranha Plant', 'Joker', 'Hero', 'Banjo & Kazooie', 'Terry'],
      name: '',
      email: '',
      favChar: null,
      leastFavChar: null,
      message: '',
    }),

    computed: {
      favCharErrors () {
        const errors = []
        if (!this.$v.favChar.$dirty) return errors
        !this.$v.favChar.required && errors.push('Item is required')
        return errors
      },
      leastFavCharErrors () {
        const errors = []
        if (!this.$v.leastFavChar.$dirty) return errors
        !this.$v.leastFavChar.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 25 characters long'),
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.name.maxLength && errors.push('Name must be at most 25 characters long'),
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
        this.$router.push({name: 'confirmation'})
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.favChar = null
        this.leastFavChar = null
        this.message = null
      },
      storeInfo () {
        const userInfo = {
          name: this.name,
          email: this.email,
          favChar: this.favChar,
          leastFavChar: this.leastFavChar,
          message: this.message
        }
        this.$store.state.userInfo.pop()
        this.$store.state.userInfo.push(userInfo)
      },
    },
  }
</script>

<style scoped>

</style>
