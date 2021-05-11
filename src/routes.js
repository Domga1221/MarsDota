import Heroes from './components/Heroes.vue'
import Hero from './components/Hero.vue'

export default[
    {path: '/', component: Heroes},
    {path: '/hero/:id', component: Hero}
]