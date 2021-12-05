<template>
  <div class="hardware">
    <div class="title-container">
      <h2 class="title" style="text-align:center; margin:20px;">Build Your System:</h2>
      <h4 class="cost" style="text-align:center;">Current Cost: ${{cost}}</h4>
      <b-button class="color-bg-dblue btn">Check Out</b-button>
    </div>
    <div id="config"> <!-- make flex -->
      <div class="config-group" id="ram-config">
        <div class="config-image-wrapper" id="ram-image">
          <img src="../assets/logo.png" class="config-image">
        </div>
        <h3>RAM</h3>
        <p><b-button class="color-bg-dblue" v-b-toggle.helpMeRAM>
          Help Me Choose
        </b-button></p>
        <b-collapse id="helpMeRAM">
          <div class="config-help color-bg-lbemphasis card card-body">
            RAM helps your server to do more at once and to run faster while doing so. If you are planning on heavily using your server, choose more RAM.
          </div>
        </b-collapse>
        <div class="config-option" v-for="r in ram" :key="r.rid" v-bind:class="{ 'config-selected': ramID === r.rid }" v-on:click="ramClick(r)">
          <p> {{ r.name }} </p>
        </div>
      </div>
      <div class="config-group" id="hdd-config">
        <div class="config-image-wrapper" id="ram-image">
          <img src="../assets/harddrive.png" class="config-image">
        </div>
        <h3>Hard Drive</h3>
        <p><b-button class="color-bg-dblue" v-b-toggle.helpMeHDD>
          Help Me Choose
        </b-button></p>
        <b-collapse id="helpMeHDD">
          <div class="config-help color-bg-lbemphasis card card-body">
            The Hard Drive that your server maintians are where the files that you store on the server will be kept. The pictures you upload from your phone here, the receies organized here, and anything else you keep here are stored on the Hard Drive. If you plan on storing a lot on your server, choose a larger Hard Drive.
          </div>
        </b-collapse>
        <div class="config-option" v-for="h in hdd" :key="h.hid" v-bind:class="{ 'config-selected': hddID === h.hid }" v-on:click="hddClick(h)">
          <p> {{ h.name }} </p>
        </div>
      </div>
      <div class="config-group" id="ssd-config">
        <div class="config-image-wrapper" id="ram-image">
          <img src="../assets/appSpace.png" class="config-image">
        </div>
        <h3>App Space</h3>
        <p><b-button class="color-bg-dblue" v-b-toggle.helpMeApp>
          Help Me Choose
        </b-button></p>
        <b-collapse id="helpMeApp">
          <div class="config-help color-bg-lbemphasis card card-body">
            The App Space on your server is the amount of storage space on your server for installing appications. A list of presently available applications is contained on the Software tab of this website. If you plan on using your server for several different applications, choose more App Space.
          </div>
        </b-collapse>
        <div class="config-option" v-for="s in ssd" :key="s.sid" v-bind:class="{ 'config-selected': ssdID === s.sid }" v-on:click="ssdClick(s)">
          <p> {{ s.name }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Hardware',
  created() {
    console.log("Before listings");
    this.getListings();
    console.log("After Listings");
  },
  computed: {
    cost: function() {
      try {
        return (this.ram[this.ramID-1].price + this.hdd[this.hddID-1].price + this.ssd[this.ssdID-1].price).toFixed(2)
      } catch (error) {
        console.log("error calculating cost");
        return ("0.00")
      }
    }
  },
  methods: {
    ramClick(ramClass) {
      this.ramID = ramClass.rid
    },
    hddClick(hddClass) {
      this.hddID = hddClass.hid
    },
    ssdClick(ssdClass) {
      this.ssdID = ssdClass.sid
    },
    async getListings() {
      console.log("Before try");
      try {
        let response = await axios.get('/api/hardware/listings');
        console.log(response);
        this.ram = response.data.ram;
        this.hdd = response.data.hdd;
        this.ssd = response.data.ssd;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return { 
      ramID: 1,
      hddID: 1,
      ssdID: 1,
      ram: [],
      hdd: [],
      ssd: []
    }
  }
}
</script>
