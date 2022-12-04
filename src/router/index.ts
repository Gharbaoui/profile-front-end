import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UserRoute from '../components/user/user.vue'
import ArticlesRoute from '../components/articles/articles_root.vue'
import ArticleBlock from '../components/articles/article.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {name: 'aboutme'}
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: UserRoute
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesRoute
  },
  {
    path: '/article',
    name: 'article',
    component: ArticleBlock
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
