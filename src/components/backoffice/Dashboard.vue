<template>
  <div class="app" id="dashboard">
    Dashboard
    <router-link to="/backoffice/training/list">List Training</router-link>
    <router-link to="/backoffice/training/create">Create Training</router-link>
    <router-link to="/backoffice/users/list">List Users</router-link>
    <router-link to="/backoffice/users/create">Create Users</router-link>
    <router-link to="/backoffice/project/list">List Projects</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Dashboard",

  created() {},

  methods: {}
};
</script>


