<template>
<div id="app">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Software</b-nav-item>
        <b-nav-item href="#">Hardware</b-nav-item>
        <b-nav-item-dropdown text="Account">
          <b-dropdown-item href="#">My Account</b-dropdown-item>
          <b-dropdown-item href="#"><hr></b-dropdown-item>
          <b-dropdown-item href="#">Log In</b-dropdown-item>
          <b-dropdown-item href="#">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view/>
  <footer class="footer color-bg-dgreen">
    <div class="footer-container">
      <h5 id="footer-title">Contact info:</h5>
      <a href="https://www.linkedin.com/in/joel-hirschmann-0142911b8/" class="text-light">Linkedin</a>
      <a href="https://github.com/mathlete/reginald-systems-main-site" class="text-light">Github</a>
      <p>Phone: (888)123-4567</p>
      <p>Address: 1234 N. 567 E. Example City</p>
    </div>
  </footer>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
