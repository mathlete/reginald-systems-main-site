<template>
  <div class="login">
    <div class="title-container">
      <h2 class="title" style="text-align:center; margin:20px;">Testing Space</h2>
      <b-button class="color-bg-dblue">Edit</b-button>
    </div>
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
</template>

<style>
</style>

<script>
export default {
  name: 'Account',
  data() {
    return {
      devices: [],
    }
  },
  created() {
    //Temp for layout testing. Will make calls to backend for data
    this.devices.push({name: "device1", stat:"Good", ram:15, hdd:42, ssd:73, did:1});
    this.devices.push({name: "device2", stat:"Warning", ram:76, hdd:43, ssd:75, did:2});
    this.devices.push({name: "device3", stat:"Error", ram:99, hdd:89, ssd:85, did:3});
  },
  methods: {},
  //@click="setEdit"
  //v-if & v-else
}
</script>
