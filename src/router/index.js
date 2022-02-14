import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('components/Login')
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')

Vue.use(Router)

const routes = [
  {
    path: '',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  }
]

export default new Router({
  routes,
  mode: 'history'
})
