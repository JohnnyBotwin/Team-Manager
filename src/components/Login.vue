<template>
<div class="outterForm">
  <div class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" v-model="user.email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" v-model="user.password" class="form-control" placeholder="Password" required="">
      <div class="checkbox mb-3">
      </div>
      <button class="btn btn-lg btn-primary btn-block" @click="login()">Sign in</button>
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
      } else {
        me.emptyField = false;
        me.loginError = false;
        me.$root.users().getUser(
          me.user.email,

          function(user) {
            if (user.password == me.user.password) {
              me.$root.userRoles().userRoles(me.user.email,
                (success => {
                  if (success.docs && success.docs.length && success.docs[0].role_name === 'ADMIN') {
                      me.$router.push({ name: "Dashboard" });
                    } else {
                      me.$router.push({ name: "Home", params: { userId: user.name } });
                  }
                }),
                (failure => {
                  console.log('Error getting user roles.');
                })
              );

            } else {
              me.loginError = true;
            }
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

<style>
html,
#app {
  height: 100%;
}

.outterForm {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  height: 100%;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>


