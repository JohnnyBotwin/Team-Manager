<template>
  <div class="app" id="login">
    <template>
      <div class="app" id="login">
        <div class="row form-group">
          <div class="col-md-4 offset-md-3">
            <input class="form-control" v-model="user.name" type="textfield" name="username">
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-4 offset-md-3">
            <input class="form-control" v-model="user.password" type="password" name="password">
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-4 offset-md-3 text-right">
            <input type="submit" @click="login()" value="login">
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Login",

  data() {
    return {
      user: {
        name: "",
        password: "",
        email: ""
      }
    };
  },

  created() {
    this.loadTrainings();
  },

  mounted() {},

  methods: {
    login() {
      const me = this;
      /*me.$root.users().createUser({email: 'diogo.tavares@findmore.pt', password: '123',
      name: 'Diogo Tavares'})*/

      me.$root.users().getUser(
        me.user.name,

        function(user) {
          me.$router.push({ name: "Home", params: { userId: user.name } });
        },

        function(error) {
          alert("User not found");
        }
      );
    },

    loadTrainings: function() {
      const me = this;
      let users = me.$root.users().getUsers();
      console.log(users);
      /*me.$root.trainings().createTraining({id: 1, title: 'test', description: 'new description'});
      let trainings = me.$root.trainings().getTrainings();
      console.log(trainings);*/
    }
  }
};
</script>


