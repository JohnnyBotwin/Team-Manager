<template>
  <div> role: {{role}}</div>
</template>

<script>
export default {
  name: "UserRole",
  props: {
    email:null,
  },
  data() {
    return {
      role: null,
      loading: true
    };
  },
  mounted() {
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
          console.log(error);
          alert(error);
        }
      );
    }
  }
};
</script>
