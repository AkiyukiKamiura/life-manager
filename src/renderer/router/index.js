import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'personal-summery',
      component: require('@/components/PersonalSummery').default
    },
    {
      path: '/task',
      name: 'task-page',
      component: require('@/components/Task').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
