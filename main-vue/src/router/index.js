import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hardware from '../views/Hardware.vue'
import Software from '../views/Software.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Account from '../views/Account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hardware',
    name: 'Hardware',
    component: Hardware
  },
  {
    path: '/software',
    name: 'Software',
    component: Software
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
