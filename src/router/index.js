import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/Books'
import BootstrapVue from 'bootstrap-vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.use(BootstrapVue);
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books
    }
  ]
})
