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
                v-model="selectOne"
                :items="characters"
                :error-messages="selectOneErrors"
                label="Favorite Character"
                required
                @change="$v.selectOne.$touch()"
                @blur="$v.selectOne.$touch()"
              ></v-select>

              <v-select
                v-model="selectTwo"
                :items="characters"
                :error-messages="selectTwoErrors"
                label="Least Favorite Character"
                required
                @change="$v.selectTwo.$touch()"
                @blur="$v.selectTwo.$touch()"
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
              <v-btn color="primary" text @click="submit">Submit</v-btn>
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
      selectOne: { required },
      selectTwo: { required },
    },

    data: () => ({
      characters: ['Mario', 'Donkey Kong', 'Link', 'Samus', 'Dark Samus', 'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Luigi', 'Ness', 'Captain Falcon', 'Jigglypuff', 'Peach', 'Daisy', 'Bowser', 'Ice Climbers', 'Sheik', 'Zelda', 'Dr. Mario', 'Pichu', 'Falco', 'Marth', 'Lucina', 'Young Link', 'Ganondorf', 'Mewtwo', 'Roy', 'Chrom', 'Mr. Game & Watch', 'Meta Knight', 'Pit', 'Dark Pit', 'Zero Suit Samus', 'Wario', 'Snake', 'Ike', 'Pokemon Trainer', 'Diddy Kong', 'Lucas', 'Sonic', 'King Dede', 'Olimar', 'Lucario', 'R.O.B.', 'Toon Link', 'Wolf', 'Villager', 'Mega Man', 'Wii Fit Trainer', 'Rosalina & Luma', 'Little Mac', 'Greninja', 'MII Brawler', 'MII Swordfighter', 'MII Gunner', 'Palutena', 'Pac-Man', 'Robin', 'Shulk', 'Bowser Jr.', 'Duck Hunt', 'Ryu', 'Ken', 'Cloud', 'Corrin', 'Bayonetta', 'Inkling', 'Ridley', 'Simon', 'Richter', 'King K. Rool', 'Isabelle', 'Incineroar', 'Piranha Plant', 'Joker', 'Hero', 'Banjo & Kazooie', 'Terry'],
      errorMessages: '',
      name: '',
      email: '',
      selectOne: null,
      selectTwo: null,
      message: null,
    }),

    computed: {
      selectOneErrors () {
        const errors = []
        if (!this.$v.selectOne.$dirty) return errors
        !this.$v.selectOne.required && errors.push('Item is required')
        return errors
      },
      selectTwoErrors () {
        const errors = []
        if (!this.$v.selectTwo.$dirty) return errors
        !this.$v.selectTwo.required && errors.push('Item is required')
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
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.selectOne = null
        this.selectTwo = null
        this.message = null
      },
      
    },
  }
</script>

<style scoped>

</style>