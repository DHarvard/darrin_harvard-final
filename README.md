# darrin_harvard_final

## Vues.js project using Vuetify

### Netlify Link
```
https://darrin-harvard-dgm3790final.netlify.com/#/
```

### Effectively use conditional logic and JavaScript array methods to render large lists.
```
I use an array of Super Smahs Bros. Ultimate fighters and call the array in multiple occurences.

export const fighters = [
{
    "id": "01",
    "name": "Mario",
    "series": "Super Mario",
    "tier": "A",
    "difficulty": "Intermediate",
    "weight": "98",
    "standard_special": "Fireball",
    "up_special": "Super Jump Punch",
    "side_special": "Cape",
    "down_special": "F.L.U.D.D",
    "image": "https://i.imgur.com/U0d0p32.jpg"
    
},
...
<v-expansion-panel-header :fighter="fighter" hide-actions>
<h1> {{ fighter.id }} <br> {{ fighter.name | allCaps}} </h1>
...
```

### Encapsulate your code as VueJS single-file components.
```
app.vue contains all of the other components compiling it into a single-file component.

<template>
  <v-app>
    <projHeader></projHeader>
    <v-content>
      <v-row>
        <v-col class="pt-0 pb-0">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-content>
    <projFooter></projFooter>
  </v-app>
</template>
```

### Allow communication between components using props, custom events, or local store.
```
I communicate between my fighters.js to my fighterGrid.vue and then to my fighters.vue using props and components.

import fighterGrid from './fighterGrid.vue';
import { fighters } from '../assets/fighters.js';

export default {
    props: [fighters],

    components: {
        fighterGrid,
    },
...
I also use a store folder which contains store.js which handles my contact page's form and the submission.
    <v-row>
            <v-col class="text-center">
                <p><strong>Name</strong><br>{{ this.$store.state.userInfo[0].name }}</p>
                <p><strong>Email</strong><br>{{ this.$store.state.userInfo[0].email }}</p>
                <p><strong>Favorite Character</strong><br>{{ this.$store.state.userInfo[0].favChar }}</p>
                <p><strong>Least Favorite Character</strong><br>{{ this.$store.state.userInfo[0].leastFavChar }}</p>
                <p><strong>Your Message</strong><br>{{ this.$store.state.userInfo[0].message }}</p>
            </v-col>
        </v-row>
```

### Present a form for user input that provides useful form validation and feedback.
```
My contact page contains a form that uses error messages for required fields and has a refresh button and a submit button. When submitted a confirmation page pops up.

```

### Provide at least 3 different routes with navigation between them using vue-router.
```
I use VueRouter to handle my routes in which I have a home, firghters, and contact page

export const routes = [
    {path: '', component: home},
    {path: '/fighters', component: fighters},
    {path: '/contact', component: contact},
    {path: '/confirmation', name: 'confirm', component: submitConfirmation},
]
```

### Manage your application's state using vuex.
```
I use Vuex and store to get the information input from the contact form and submit it storing it into an array of userInfo

add () {
        const userInfo = {
          name: this.name,
          email: this.email,
          favChar: this.favChar,
          leastFavChar: this.leastFavChar,
          message: this.message
        }
        this.$store.state.userInfo.pop()
        this.$store.state.userInfo.push(userInfo)
        this.$router.push({name: 'confirm'})
      },
```
