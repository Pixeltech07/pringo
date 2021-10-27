<template>
  <div class="loginComponent">
    <div class="container">
      <div class="row valign-wrapper">
        <div class="col s12">
          <form @submit.prevent="loginUser">
            <h2>Bienvenue sur Pringo Démo !</h2>
            <p>(Veuillez vous connecter pour envoyer vos fichiers)</p>
            <br /><br />
            <h4>Connexion</h4>
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <input
                type="text"
                name="email"
                v-model="login.email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">create</i>
              <input
                class=""
                type="password"
                name="password"
                v-model="login.password"
                id="password"
                placeholder="Mot de passe"
              />
            </div>
            <br />
            <div id="connexion">
              <button
                type="submit"
                class="orange darken-2 waves-effect waves-light btn-large"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer class="page-footer myblue" z-depth-2>
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Pringo App</h5>
            <p class="grey-text text-lighten-4">
              Pixeltech App for Switch & Flux automation
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a
                  class="grey-text text-lighten-3"
                  href="http://pixeltech.fr/pixelpresta/index.php"
                  target="_blank"
                >
                  Our Shop
                </a>
              </li>
              <li>
                <a
                  class="grey-text text-lighten-3"
                  href=" mailto: support@pixeltech.fr"
                  >support@pixeltech.fr</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2020 Copyright Pringo
          <a
            class="grey-text text-lighten-4 right"
            href="https://pixeltech.fr/"
            target="_blank"
            >Our website</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "LoginComponent",
  data: () => {
    return {
      login: {
        email: "",
        password: "",
      },
      info: "",
    };
  },
  components: {
    swal,
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/api/users/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Success", "Login Successful", "success");
          this.$router.push("/form");
        }
      } catch (err) {
        swal("Error", "Something Went Wrong ...!", "error");
        console.log(this.errors);
      }
    },
  },
};
</script>
<style scoped>
.input-field input:focus + label {
  color: #f57c00 !important;
}

.input-field input:focus {
  border-bottom: 1px solid #f57c00 !important;
  box-shadow: 0 1px 0 0 #f57c00 !important;
}

body {
  height: 100vh;
}

.container {
  padding-top: 3%;
  width: 100%;
  text-align: center;
}
#connexion {
  padding-bottom: 8%;
}
.myblue {
  background-color: #2c3e50;
}
</style>
