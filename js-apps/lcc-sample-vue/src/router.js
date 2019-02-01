import Vue from 'vue'
import Router from 'vue-router'
import RecordList from './components/RecordList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RecordList',
      component: RecordList
    },
    {
      path: '/:recordId',
      name: 'RecordDetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "RecordDetail" */ './components/RecordDetail.vue')
    }
  ]
})
