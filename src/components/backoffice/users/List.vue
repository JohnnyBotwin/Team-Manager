<template>
  <div>
    <h1>Users</h1>
    <!-- user list should be able to delete -->
    <template v-if="loading">Loading...</template>

    <template v-if="users !== null">
      <ul v-for="user in users" :key="user.id">
        <li>
          <label>name:</label>
          <span>{{user.doc.name}}</span>
        </li>
        <li>
          <label>email:</label>
          <span>{{user.doc.email}}</span>
        </li>
        <li>
          <UserRole :email="user.doc.email"/>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import UserRole from "@/components/backoffice/users/Roles";
export default {
  name: "user-list",
  components: {
    UserRole
  },
  data() {
    return {
      users: null,
      loading: true
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      let me = this;

      me.$root.users().getUsers(
        function(response) {
          me.users = response.rows;
          me.loading = false;
          console.log(response);
        },
        function(error) {
          me.loading = false;
          console.log(error);
          alert(error);
        }
      );
    }
  }
};
</script>
