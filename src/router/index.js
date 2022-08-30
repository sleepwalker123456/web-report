import Vue from 'vue'
import Router from 'vue-router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

const HomePage = () => import('views/home/HomePage')
const Login = () => import('components/common/login/Login')

const Middle = () => import('views/problems/middle/Middle')
const Rework = () => import('views/problems/rework/Rework')
const Rotation = () => import('views/problems/rotation/Rotation')

const Out = () => import('views/query/out/OutBound')
const BomComponent = () => import('views/query/bom/BomComponent')
const Storage = () => import('views/query/storage/Storage')
const MiddleQuery = () => import('views/query/middle/MiddleQuery')

// 测试使用
const LoginPage = () => import('components/common/login/LoginPage')
const HomeComponent = () => import('components/common/layout/HomeComponent')
const Cart = () => import('views/test/cart/Cart')
const Profile = () => import('views/test/profile/Profile')
const MainPage = () => import('views/MainPage')

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
    component: HomeComponent,
    name: 'Home',
    children: [
      {
        path: 'middle',
        name: 'Middle',
        component: Middle,
        meta: {requiresAuth: true}
      },
      {
        path: 'out',
        name: 'Out',
        component: Out,
        meta: {requiresAuth: true}
      },
      {
        path: 'storage',
        name: 'Storage',
        component: Storage,
        meta: {requiresAuth: true}
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: {requiresAuth: true}
      },
      {
        path: 'rework',
        name: 'Rework',
        component: Rework,
        meta: {requiresAuth: true}
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart,
        meta: {requiresAuth: true}
      },
      {
        path: 'bom',
        name: 'Bom',
        component: BomComponent,
        meta: {requiresAuth: true}
      },
      {
        path: 'rotation',
        name: 'Rotation',
        component: Rotation,
        meta: {requiresAuth: true}
      },
      {
        path: 'middleQuery',
        name: 'MiddleQuery',
        component: MiddleQuery,
        meta: {requiresAuth: true}
      }
    ]
  },
  {path: '/loginPage', component: LoginPage},
  {
    path: '/mainPage',
    name: 'mainPage',
    component: MainPage,
    meta: {requiresAuth: true}
  },
  {
    path: '/homeLess',
    component: HomePage,
    children: [
      {
        path: 'middleTest',
        name: 'MiddleTest',
        component: Middle,
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
  return sessionStorage.getItem('Authentication') !== null
}

export default router
