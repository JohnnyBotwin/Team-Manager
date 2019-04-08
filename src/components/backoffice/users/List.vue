<template>
  <div>user list</div>
</template>

<script>
export default {
  name: "user-list",
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
