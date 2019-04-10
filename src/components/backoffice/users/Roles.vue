<template>
  <div>
    <template v-if="error">{{error}}</template>
    <template v-else>
      <label for>Role:</label>
      <template v-if="role">
        <select v-model="role">
          <option v-for="(role, key) in roles" :value="role" :key="key">{{role}}</option>
        </select>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "UserRole",
  props: {
    email: null
  },
  data() {
    return {
      role: null,
      loading: true,
      roles: [],
      error: ""
    };
  },
  mounted() {
    //get all roles fill select select result from getRole(email)
    this.getRoles();
    this.getRole(this.email);
  },
  methods: {
    getRole(email) {
      let me = this;

      me.$root.userRoles().userRoles(
        email,
        function(response) {
          me.role = response.rows;
          me.loading = false;
          console.log(response);
        },
        function(error) {
          me.loading = false;
          me.error = error;
          console.log(error);
        }
      );
    },
    getRoles() {
      let me = this;

      me.$root.roles().getRoles(
        function(response) {
          me.roles = response.rows;
          me.loading = false;
          console.log(response);
        },
        function(error) {
          me.error = error;
          console.log(error);
        }
      );
    }
  }
};
</script>
