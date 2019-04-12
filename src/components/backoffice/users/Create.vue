<template>
  <div class="create">
    <h1 align="center">
      <small class="text-muted">Create</small>
    </h1>
    <div class="card  border-primary mb-3 bg-light">
      <div class="card-body">
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Name:</label>
            <div class="col-sm-10">                                     <!-- JMORAIS: o v-model é uma directiva custom do VueJS. Não necessita de :  -->
              <input type="text" class="form-control" placeholder="Role" :v-model="name">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Email:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" placeholder="Role" :v-model="email">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Password:</label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                :v-model="password"
              >
            </div>
          </div>
          <UserRole :email="null"/>
          <div align="center">
            <button class="btn btn-info">Add</button>
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
    return { // JMORAIS: questão de ter as propriedades dentro de um objeto que o identifique.
      name: "",
      email: "",
      password: "",
      role: ""
    };
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

