<template>
  <div class="create">
    <h1 align="center">
      <small class="text-muted">Create</small>
    </h1>
    <div class="card border-primary mb-3 bg-light">
      <div class="card-body">
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Name:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Role" v-model="user.name">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Email:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" placeholder="Role" v-model="user.email">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Password:</label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="user.password"
              >
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Role:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Role" v-model="user.role">
            </div>
          </div>
          <div align="center">
            <button @click.prevent="create()" class="btn btn-info">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import UserRole from "@/components/backoffice/users/Roles";

export default {
  name: "create-user",
  components: {
    UserRole
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        role: ""
      }
    };
  },
  methods: {
    create() {
      let me = this;

      console.log(me.user);

      me.$root.users().createUser(
        this.user,
        function(response) {
          console.log(response);
          me.$emit("created", true);
        },
        function(error) {
          console.log(error);
        }
      );
    }
  }
};
</script>



<style lang="css" scoped>
.create {
  padding: 0;
  width: 90%;
}
label {
  font-weight: bold;
}
</style>

