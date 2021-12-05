<template>
  <div class="login">
    <div class="title-container">
      <h2 class="title" style="text-align:center; margin:20px;">Your Devices:</h2>
      <b-button class="color-bg-dblue" v-if="editing" @click="saveEdit">Save</b-button>
      <b-button class="color-bg-dblue" v-else @click="setEdit">Edit</b-button>
    </div>
    <div v-if="editing">
      <div v-for="device in devices" v-bind:key="device.did">
        <h4>{{device.name}}</h4>
        <h5>Status: {{device.stat}}</h5>
        <div id="usage">
          <h5>Usage:</h5>
          <p>RAM: <input type="number" v-model="device.ram">%</p>
          <p>HDD: <input type="number" v-model="device.hdd">%</p>
          <p>SSD: <input type="number" v-model="device.ssd">%</p>
        </div>
        <hr>
      </div>
    </div>
    <div v-else>
      <div v-for="device in devices" v-bind:key="device.did">
        <h4>{{device.name}}</h4>
        <h5>Status: {{device.stat}}</h5>
        <div id="usage">
          <h5>Usage:</h5>
          <p>RAM: {{device.ram}}%</p>
          <p>HDD: {{device.hdd}}%</p>
          <p>SSD: {{device.ssd}}%</p>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios'
export default {
  name: 'Account',
  data() {
    return {
      editing: false,
      devices: [],
    }
  },
  created() {
    if (this.$root.$data.user == null) {
      this.$router.push('/login');
    }
    //Temp for layout testing. Will make calls to backend for data
    //this.devices.push({name: "device1", stat:"Good", ram:15, hdd:42, ssd:73, did:1});
    //this.devices.push({name: "device2", stat:"Warning", ram:76, hdd:43, ssd:75, did:2});
    //this.devices.push({name: "device3", stat:"Error", ram:99, hdd:89, ssd:85, did:3});
    this.getDevices();
  },
  methods: {
    getDevices() {
      if (this.$root.$data.user != null) {
        this.devices = this.$root.$data.user.devices;
      } else {
        this.devices.push({name: "Error No Data", stat: "", ram: 0, hdd: 0, ssd: 0, did: 1});
      }
    },
    setEdit() {
      this.editing = true;
    },
    saveEdit() {
      this.sendUpdate();
      this.editing = false;
    },
    async sendUpdate() {
      try{
        await axios.put("/api/account", { devices: this.devices });
        this.$root.$data.user = axios.get("/api/account");
      } catch (error) {
        return false;
      }
    }
  },
  //@click="setEdit"
  //v-if & v-else
}
</script>
