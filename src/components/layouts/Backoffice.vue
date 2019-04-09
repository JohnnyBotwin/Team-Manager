<template>
  <div id="backoffice">
    <router-link to="/backoffice">Dashboard</router-link>
    <router-link to="/backoffice/training/list">List Training</router-link>
    <router-link to="/backoffice/training/create">Create Training</router-link>
    <router-link to="/backoffice/users/list">List Users</router-link>
    <router-link to="/backoffice/users/create">Create Users</router-link>
    <router-link to="/backoffice/project/list">List Projects</router-link>
    
    <router-view/>
    
  </div>
</template>

<script>
export default {

  name: 'Backoffice',

}
</script>