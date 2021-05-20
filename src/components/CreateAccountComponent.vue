<template>
  <div>
    <div class="container">
      <div class="row valign-wrapper">
        <div class="col s12">
          <h2>Créer un compte client</h2>
          <p>(Remplissez le formulaires ci-dessous)</p>
          <br /><br /><br />
          <form @submit.prevent="registerUser">
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input
                type="text"
                name="lastname"
                v-model="register.lastname"
                id="lastname"
                required
                placeholder="Nom"
              />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input
                class=""
                type="text"
                name="firstname"
                v-model="register.firstname"
                id="firstname"
                required
                placeholder="Prénom"
              />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">email</i>
              <input
                class=""
                type="text"
                name="email"
                v-model="register.email"
                id="email"
                required
                placeholder="Email"
              />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">create</i>
              <input
                class=""
                type="password"
                name="password"
                v-model="register.password"
                id="password"
                required
                placeholder="Mot-de-passe"
              />
            </div>
            <br />
            <div id="create-account">
              <button
                type="submit"
                class="orange darken-2 waves-effect waves-light btn-large"
              >
                Inscription
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  name: "CreateAccountComponent",
  data: () => {
    return {
      errors: [],
      register: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.post("/api/users", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
          swal("Success", "Registration Was successful", "success");
        } else {
          swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
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

#create-account {
  padding-bottom: 8%;
}
.container {
  padding-top: 5%;
}
</style>
