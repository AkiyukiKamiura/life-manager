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
      name: 'task',
      component: require('@/components/Task').default
    },
    {
      path: '/record',
      name: 'record',
      component: require('@/components/Record').default
    },
    {
      path: '/time',
      name: 'time',
      component: require('@/components/Time').default
    },
    {
      path: '/setting',
      name: 'setting',
      component: require('@/components/Setting').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
