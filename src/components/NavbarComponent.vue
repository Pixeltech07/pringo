<template>
  <div>
    <nav>
      <div class="nav-wrapper amber darken-3 z-depth-2">
        <router-link to="/" class="brand-logo">LOGO</router-link>
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/"><i class="material-icons prefix">home</i></router-link></li>
          <li><a @click="logUserOut" class="dropdown-button">Déconnexion</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode"

export default {
  name: 'Navbar',
  data() {
    return {
      user: {}
    }
  }, 
  methods: {
    /*getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },*/
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
  }/*
  created() {
    this.getUserDetails();
  }*/
}
</script>

<style scoped>

</style>
