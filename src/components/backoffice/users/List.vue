<template>
  <div class="content">
    <Create/>
    <h1>
      <small class="text-muted">Manage Users</small>
    </h1>
    <div v-if="loading" class="alert alert-primary" role="alert">Loading...</div>
    <template v-if="users !== null">
      <ul v-for="user in users" :key="user.id">
        <div class="card bg-light mb-3">
          <div class="card-body">
            <li>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Name:</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    :v-model="user.doc.name"
                    :value="user.doc.name"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Email:</label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    :v-model="user.doc.email"
                    :value="user.doc.email"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Password:</label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    :v-model="user.doc.password"
                    :value="user.doc.password"
                  >
                </div>
              </div>
              <UserRole :email="user.doc.email"/>
              <div align="center">
                <button @click.prevent="edit(user.id)" class="btn btn-info">Edit</button>
                <button @click.prevent="del(user.id)" class="btn btn-outline-danger">Delete</button>
              </div>
            </li>
          </div>
        </div>
      </ul>
    </template>
  </div>
</template>

<script>
import UserRole from "@/components/backoffice/users/Roles";
import Create from "@/components/backoffice/users/Create";

export default {
  name: "user-list",
  components: {
    UserRole,
    Create
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
    },
    edit(id) {
      console.log(id);
    },
    del(id) {
      console.log(id);
    },
  }
};
</script>

<style lang="css" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
}
ul {
  padding: 0;
  width: 90%;
}
li {
  list-style: none;
}
label {
  font-weight: bold;
}
</style>

