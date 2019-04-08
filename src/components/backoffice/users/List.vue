<template>
  <div>user list should be able to delete</div>
</template>

<script>
export default {
  name: "user-list",
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      let me = this;

      me.$root.users().getUsers(
        function(users) {
          console.log(users);
        },
        function(error) {
          console.log(error);
        }
      );
    }
  }
};
</script>
