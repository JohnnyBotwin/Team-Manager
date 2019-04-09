import Vue from 'vue'
import Router from 'vue-router'


import Example from '@/components/Example';

// Global components
import Login from '@/components/Login';

// App components
import Home from '@/components/app/Home';

// Backoffice components
import Dashboard from '@/components/backoffice/Dashboard';





Vue.use(Router)

export default new Router({
  routes: [

    { path: '/', name: 'Login', component: Login },

    { path : '/example', name: 'Example', component: Example },

    { path : '/home', name: 'Home', component: Home }

  ]
})
