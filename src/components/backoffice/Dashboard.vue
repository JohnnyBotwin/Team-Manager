<template>
  <div class="app" id="dashboard">
    Dashboard
    <router-link to="/bo/training/list">List Training</router-link>
    <router-link to="/bo/training/create">Create Training</router-link>
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


