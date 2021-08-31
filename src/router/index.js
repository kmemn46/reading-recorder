import Vue from 'vue'
import VueRouter from 'vue-router'
import BookSearch from '../components/BookSearch.vue'
import BookForm from '../components/BookForm.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // トップページ
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Googleブックスの検索フォーム
  {
    path: '/search',
    name: 'Search',
    component: BookSearch
  },
  // 書籍レビューの為のフォーム
  {
    path: '/form',
    name: 'Form',
    component: BookForm
  },
  // 最終的な受け皿
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
