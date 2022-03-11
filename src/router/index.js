import Vue from 'vue'
import Router from 'vue-router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import store from '../store'

const Login = () => import('components/common/login/Login')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')
const HomePage = () => import('views/HomePage')
const Middle = () => import('views/middle/Middle')

Vue.use(Router)
Vue.use(ViewUI)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    component: HomePage,
    name: 'Home',
    children: [
      {
        path: 'middle',
        name: 'Middle',
        component: Middle,
        meta: {requiresAuth: true}
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: {requiresAuth: true}
      },
      {
        path: 'category',
        name: 'Category',
        component: Category,
        meta: {requiresAuth: true}
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart,
        meta: {requiresAuth: true}
      }
    ]
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start()
  console.info(to.name)
  if (to.name !== 'Login' && !isAuthenticated()) {
    next({path: '/login'})
  } else {
    next()
  }
})

router.afterEach(to => {
  ViewUI.LoadingBar.finish()
})

function isAuthenticated() {
  return store.state.adminInfo.token !== ''
}

export default router
