import Vue from 'vue'
import Router from 'vue-router'


import Example from '@/components/Example';

// Global components
import Login from '@/components/Login';

// App components
import Home from '@/components/app/Home';

// Backoffice components
import Dashboard from '@/components/backoffice/Dashboard';
import Backoffice from '@/components/layouts/Backoffice';
import CreateUser from '@/components/backoffice/users/Create';
import ListUsers from '@/components/backoffice/users/List';
import ListProject from '@/components/backoffice/projects/List';



Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Login',
      component: Login
    },



    {
      path: '/example',
      name: 'Example',
      component: Example
    },

    {
      path: "/backoffice/",
      name: "Backoffice",
      component: Backoffice,
      children: [
        {
          path: "users/create",
          name: "CreateUser",
          component: CreateUser
        },

        {
          path: "users/list",
          name: "ListUsers",
          component: ListUsers
        },
        {
          path: "project/list",
          name: "ListProject",
          component: ListProject
        },
      ]
    }

  ]
})
