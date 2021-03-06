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
import Backoffice from '@/components/layouts/Backoffice';
import CreateUser from '@/components/backoffice/users/Create';
import ListUsers from '@/components/backoffice/users/List';
import ListProject from '@/components/backoffice/projects/List';
import CreateProject from '@/components/backoffice/projects/Create';
import ShowProject from '@/components/backoffice/projects/Show';
import UpdateProject from '@/components/backoffice/projects/Update';
import ListTask from '@/components/backoffice/tasks/List';
import ListTeam from '@/components/backoffice/teams/list';
import CreateTeam from '@/components/backoffice/teams/create';
import ShowTeam from '@/components/backoffice/teams/show';
import UpdateTeam from '@/components/backoffice/teams/update';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  {
      path: '/example',
      name: 'Example',
      component: Example
    },

    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: "/backoffice/", // JMORAIS: recomendation: always start the paths with the slash and finish with no slash: [/backoffice ; /backoffice/users ; /] 
      name: "Backoffice",
      component: Backoffice,
      children: [
        {
          path: '',
          component: Dashboard
        },
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
        {
          path: "project/create",
          name: "CreateProject",
          component: CreateProject
        },
        {
          path: "project/show/:id",
          name: "ShowProject",
          component: ShowProject
        },
        {
          path: "project/update/:id",
          name: "UpdateProject",
          component: UpdateProject
        },
        {
          path: "task/list",
          name: "ListTask",
          component: ListTask
        },
        {
          path: 'training/list',
          component: BOListTraining
        },
        {
          path: 'training/create',
          component: BOCreateTraining
        },
        {
          path: "team/list",
          name: "ListTeam",
          component: ListTeam
        },
        {
          path: "team/create",
          name: "CreateTeam",
          component: CreateTeam
        },
        {
          path: "team/show/:id",
          name: "ShowTeam",
          component: ShowTeam
        },
        {
          path: "team/update/:id",
          name: "UpdateTeam",
          component: UpdateTeam
        },
      ]
    },
    { 
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})


