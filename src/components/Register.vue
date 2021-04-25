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
              <h4>New here?</h4>
              <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
              <form id="register" method="POST" class="pt-3">
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
                  v-on:click="checkForm"
                  >SIGN UP</button>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Already have an account?
                  <router-link :to="{ path: '/login'}" replace>Login</router-link>
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
export default {
  name: "Register",
  data: function () {
    return {
      username: null,
      password: null,
      errors: [],
    };
  },
  methods: {
    checkForm(e) {
      if (this.username && this.password) {
        return true;
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
