import home from './components/home.vue'
import fighters from './components/fighters.vue'
import contact from './components/contact.vue'
import submitConfirmation from './components/submitConfirmation.vue'

export const routes = [
    {path: '', component: home},
    {path: '/fighters', component: fighters},
    {path: '/contact', component: contact},
    {path: '/confirmation', name: 'confirm', component: submitConfirmation},

]