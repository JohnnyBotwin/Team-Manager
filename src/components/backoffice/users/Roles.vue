<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Role:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder="Role" v-model="role">
    </div>
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
      loading: true,
      roles: [],
      error: "",
      role: null
    };
  },
  mounted() {
    this.getRole(this.email);
  },
  methods: {
    getRole(email) {
      let me = this;

      if (this.email !== null)
        me.$root.userRoles().userRoles(
          email,
          function(response) {
            me.role = response.docs;
            me.loading = false;
            console.log(response);
          },
          function(error) {
            me.loading = false;
            me.error = error;
            console.log(error);
          }
        );
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
}
</style>

