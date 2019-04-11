<template>
  <div class="app" id="login">
    <div class="app" id="login">
      <div class="row form-group">
        <div class="col-md-4 offset-md-3">
          <input class="form-control" v-model="user.email" type="textfield" name="username">
        </div>
      </div>
      <div class="row form-group">
        <div class="col-md-4 offset-md-3">
          <input class="form-control" v-model="user.password" type="password" name="password">
        </div>
      </div>
      <div class="row form-group">
        <div class="col-md-4 offset-md-3" v-if="emptyField">E-mail is empty</div>
        <div class="col-md-4 offset-md-3"  v-if="loginError">Login error</div>
      </div>
      <div class="row form-group">
        <div class="col-md-4 offset-md-3 text-right">
          <input type="submit" @click="login()" value="login">
        </div>
      </div>
    </div>
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
      },
      emptyField: false,
      loginError: false
    };
  },

  created() {
    this.loadTrainings();
  },

  mounted() {},

  methods: {
    login() {
      const me = this;
      if (me.user.email == "") {
        me.emptyField = true;
      }
      else {
        me.emptyField = false;
        me.loginError = false;
        me.$root.users().getUser(
          me.user.email,

          function(user) {
            if(user.password == me.user.password)
              me.$router.push({ name: "Home", params: { userId: user.name } });
            else  me.loginError = true;
          },

          function(error) {
            me.loginError = true;
          }
        );
      }
    },

    loadTrainings: function() {
      const me = this;
      let users = me.$root.users().getUsers();
      console.log(users);
    }
  }
};
</script>


