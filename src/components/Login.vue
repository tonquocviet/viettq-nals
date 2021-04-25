<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <img src="../assets/logo.svg" alt="logo" />
              </div>
              <h4>Hello! let's get started</h4>
              <h6 class="font-weight-light">Sign in to continue.</h6>
              <form id="login" method="POST" class="pt-3">
                <!-- for error -->
                <p v-if="errors.length">
                  <b>Please correct the following error(s):</b>
                  <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                  </ul>
                </p>
                <div class="form-group">
                  <input
                    id="username"
                    v-model="username"
                    type="username"
                    class="form-control form-control-lg"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    minlength="4"
                    maxlength="10"
                    class="form-control form-control-lg"
                    placeholder="Password"
                  />
                </div>
                <div class="mt-3">
                  <button
                  class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                  v-on:click="submitForm"
                  >SIGN IN</button>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Don't have an account?
                  <router-link :to="{ path: '/register'}" replace>Create</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/index";
import { setSESSION } from "../utils";
export default {
  name: "Login",
  data: function () {
    return {
      username: null,
      password: null,
      errors: [],
    };
  },
  methods: {
    submitForm(e) {
      if (this.username && this.password) {
        let data = {
          'username' : this.username,
          'password' : this.password
        }
        api.doLogin(data).then(response => {
          let token = response.token;
          setSESSION('token', token);
          this.$router.push('/list-user');
        })
        .catch(err => {
           alert(err);
        })
      }
      this.errors = [];
      if (!this.username) {
        this.errors.push("Username is required");
      }
      if (!this.password) {
        this.errors.push("Password is required");
      }
      e.preventDefault();
    },
  },
};
</script>
