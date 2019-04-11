<template>
  <div>
    <h1>Users</h1>
    <!-- user list should be able to delete -->
    <template v-if="loading">Loading...</template> <!-- JMORAIS: Porquê é que não está dentro de uma <div> ?
      A <div> só entra se a variável "loading" estiver a true. 
      O output vai ser <h1>Users</h1>Loading...<ul.../ul>, e não queremos ter o loading ali perdido no meio, mas sim prepará-lo para a função dele.
    --> 

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
