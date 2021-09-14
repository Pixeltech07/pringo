<template>
  <div id="profil">
    <div class="container">
      <div class="row valign-wrapper">
    <div class="col-s12">
      <h3>Mon Profil</h3>
      <br>
    <div class="col-s4 text-right">
      <a @click="disabled = (disabled + 1) % 2" class="btn btn-sm btn-primary">Modifier mes informations</a>
    </div>
    <br><br>
    <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Nom"
                :disabled="disabled == 0"
              />
            </div>
    <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input
                class=""
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Prénom"
                :disabled="disabled == 0"
              />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">email</i>
              <input
                class=""
                type="text"
                name="email"
                id="email"
                required
                placeholder="Email"
                :disabled="disabled == 0"
              />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">create</i>
              <input
                class=""
                type="password"
                name="password"
                id="password"
                required
                placeholder="Mot-de-passe"
                :disabled="disabled == 0"
              />
            </div>
  </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";

//const BASE_URL = "http://localhost:3000/api/"

export default {
  name: "UserProfil",
  data() {
    return {
      userData: "",
      disabled:0
    };
  },
  props: {
    firstName: String,
    lastName: String,
    email: String,
    password: String
  },
  methods: {
    sendUserData() {
      this.$emit("userdata", {
        message: this.userData,
        user: {
          firstname: this.firstName,
          lastname: this.lastName,
          email: this.email,
          password: this.password
        },
      });
      this.userData = "";
    },
  },
};
</script>

<style scoped>
template {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}

.container {
  padding-top: 7%;
  padding-left: 10%;
}
</style>
