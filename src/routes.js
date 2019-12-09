import home from './components/home.vue'
import fighters from './components/fighters.vue'
import contact from './components/contact.vue'

export const routes = [
    {path: '', component: home},
    {path: '/fighters', component: fighters},
    {path: '/contact', component: contact},

]