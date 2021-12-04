<template>
  <div class="login">
    <div class="title-container">
      <h2 class="title" style="text-align:center; margin:20px;">Testing Space</h2>
      <div class="slidcontainer">
        <input type="range" min="1" max="100" v-bind:value="sliderVal" class="slider" id="myRange" @oninput="updateSliderVal">
        <p>{{ sliderVal }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.slidecontainer {
  width: 100%; 
}

/* The slider itself */
.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1;
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'Account',
  methods: {
    updateSliderVal() {
      let slider=document.getElementById("myRange");
      this.$root.$data.sliderVal = slider.value;
    }
  },
  data() {
    return {
      sliderVal: 35,
    }
  }
}
</script>
