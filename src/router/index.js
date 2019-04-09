import Vue from 'vue'
import Router from 'vue-router'


import Example from '@/components/Example';

// Global components
import Login from '@/components/Login';

// App components
import Home from '@/components/app/Home';

// Backoffice components
import Dashboard from '@/components/backoffice/Dashboard';
import BOListTraining from '@/components/backoffice/training/List';
import BOCreateTraining from '@/components/backoffice/training/Create';


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Login', component: Login },
    {
      path: '/bo', component: Dashboard,
      children: [{
        path: '/bo/training/list',
        component: BOListTraining
      },
      {
        path: '/bo/training/create',
        component: BOCreateTraining
      }]
    },
  ]
})
