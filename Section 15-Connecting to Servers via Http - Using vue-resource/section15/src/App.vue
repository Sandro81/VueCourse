<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <img alt="Vue logo" src="./assets/logo.png" style="width: 50px; height: auto;">
        </div>
        <div class="w-100"></div>
        <div class="col">
          <h1>Section 15: Connecting to Servers via Http - Using vue-resource</h1>
          <p>https://github.com/pagekit/vue-resource</p>
          <p> npm install --save vue-resource</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="Username">Username</label>
            <input type="text" class="form-control" id="Username" placeholder="Enter your Username" v-model="user.username">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email">
          </div>
          <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
        </div>
        <div class="w-100"></div>
        <div class="col"><button type="button" class="btn btn-dark" @click="fetchData">Get Data</button></div>
        <div class="col">
          <ul class="list-group">
            <li class="list-group" v-for="(u, index) in users" :key="index">
              {{u.username}} - {{u.email}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr>

    <div class="container">
      <div class="row">
        <div class="col">col</div>
        <div class="col">col</div>
        <div class="w-100"></div>
        <div class="col">col</div>
        <div class="col">col</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        users: []
      }
    },
    name: 'app',
    components: {
    },
    methods: {
      submit() {
        this.$http.post('', this.user)
                .then(response => {
                  console.log(response)
                }, error => {
                  console.log(error)
                });
      },
      fetchData() {
        this.$http.get('')
                .then(response => {
                 return response.json();
                })
                .then(data => {
                  const resultArray = [];
                  for (let key in data) {
                    resultArray.push(data[key]);
                  }
                  this.users = resultArray;
                });
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

