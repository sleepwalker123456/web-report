import Vue from 'vue'
import Router from 'vue-router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

const Login = () => import('components/common/login/Login')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')
const HomePage = () => import('views/HomePage')
const Middle = () => import('views/middle/Middle')
const TableData = () => import('components/common/table/tableData')

Vue.use(Router)
Vue.use(ViewUI)

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
        path: 'middle',
        component: Middle
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
  },
  {
    path: '/query',
    component: TableData
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start()
  next()
})

router.afterEach(route => {
  ViewUI.LoadingBar.finish()
})

export default router
