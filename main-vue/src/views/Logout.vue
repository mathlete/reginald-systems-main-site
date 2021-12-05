<template>
  <div class="logout">
    <div class="title-container">
      <h2 class="title" style="text-align:center; margin:20px;"></h2>
    </div>
    <div class="content center-container">
      <div class="centered color-bg-lbemphasis">
        <h4>You have successfully logged out!</h4>
        <h6>Thank you for choosing Reginald Systems.</h6>
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
import axios from 'axios';
export default {
  name: 'Logout',
  created() {
    this.logout();
  },
  methods: {
    async logout() {
      await axios.delete("/api/account");
      this.$root.$data.user = null;
    }
  }
}
</script>
