import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import BlogIndex from '../components/BlogIndex'
import BlogHome from '../components/BlogHome'
import BlogArticle from '../components/BlogArticle'
import BlogAbout from '../components/BlogAbout'
import BlogGallary from '../components/BlogGallary'
import ArticleContent from '../components/ArticleContent'
import BlogMemo from '../components/BlogMemo'
import MemoContent from '../components/MemoContent'
import BlogStudy from '../components/BlogStudy'
import Error403 from '../components/403'
import Error404 from '../components/404'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'blogindex',
      component: BlogIndex
    }, {
      path: '/home',
      name: 'bloghome',
      component: BlogHome,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/article',
          component: BlogArticle
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/study',
          component: BlogStudy
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/article/:id',
          component: ArticleContent
        },
        {
          path: '/memo',
          component: BlogMemo
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/memo/:id',
          component: MemoContent
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: '/gallary',
          component: BlogGallary
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: '/about',
          component: BlogAbout
        }
      ]
    }, {
      path: '/error403',
      component: Error403
    }, {
      path: '/error404',
      component: Error404
    }
  ]
})
