<template>
  <div class="login">
    <div class="title-container">
      <h2 class="title" style="text-align:center; margin:20px;">Log in to manage your account</h2>
    </div>
    <div class="content center-container">
      <div class="centered color-bg-lbemphasis" id="login-box">
        <label for="username"><b>Username</b></label>
        <input type="text" name="username" placeholder="Username or Email" required v-model="username">
        <label for="password"><b>Password</b></label>
        <input type="password" name="password" placeholder="Password" required v-model="password">

        <button class="color-bg-dblue btn" type="submit" id="login-button" @click.prevent="login">Log In</button>
      </div>
    </div>
  </div>
</template>

<style>
.center-container {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 40px;
  margin-top: 5%;
}

.centered {
  display: flex;
  flex-direction: column;
  border: black 2px solid;
  padding: 30px;
  border-radius: 10px;
}

.centered > * {
  margin-bottom: 10px;
}

.centered > button {
  margin-top: 10px;
}
</style>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
     if (!this.usernameLogin || !this.passwordLogin)
        return;
      try {
        let response = await axios.post('/api/account/login', {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        //this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      } 
    }
  }
}
</script>
