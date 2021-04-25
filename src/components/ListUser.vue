<template>
  <div class="hello">
    <div class="top-bar">
      <img alt="Vue logo" src="../assets/logo.png" width="5%"/>
      <h1 class="wellcome">Wellcom to dashboard</h1>
      <button
      @click="doLogOut"
      type="button"
      class="btn btn-primary btn-rounded btn-fw">Logout</button>
    </div>
    <div class="container-scroller">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">LIST USER</h4>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in listUser" :key="index">
                    <td>{{user.id}}</td>
                    <td class="py-1">
                      <img
                        src="../assets/template/images/faces/face1.jpg"
                        alt="image"
                      />
                      <!-- <img
                        :src="user.avatar"
                        alt="image"
                      /> -->
                    </td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/index";
import { getSESSION, removeSESSION, setAxiosAuthorizationHeader } from "../utils";
export default {
  name: "ListUser",
  data() {
    return {
      listUser: [],
    }
  },
  methods: {
    loadList() {
      api.getList().then(response => {
        this.listUser = response
      })
      .catch(err => {
        alert(err);
      })
    },
    doLogOut() {
      removeSESSION('token');
      this.$router.push('/login');
    }
  },
  created() {
    let token = getSESSION('token')
    if(token) {
      setAxiosAuthorizationHeader(token);
    }
  },
  mounted() {
    this.loadList();
  },
};
</script>

<style scoped>
.hello {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  
}
.top-bar {
  display: flex;
  justify-content: space-between;
  margin: 15px;
}
.wellcome {
  font-size: 20px;
}
</style>
