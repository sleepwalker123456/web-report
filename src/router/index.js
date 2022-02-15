import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('components/Login')
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')
const HomePage = () => import('views/HomePage')

Vue.use(Router)

const routes = [
  {
    path: '',
    component: Login
  },
  {
    path: '/home',
    component: HomePage,
    children: [
      {
        path: '/',
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
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
