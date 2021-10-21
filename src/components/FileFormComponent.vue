<template>
  <div class="container">
    <sidebar-menu :menu="menu" />
    <div class="row valign-wrapper">
      <div class="col s12">
        <br /><br /><br /><br />
        <h3>Envoyez-vos fichiers</h3>
        <p>(Remplissez le formulaires ci-dessous)</p>
        <br /><br />
        <form @submit.prevent="onSubmit">
          <div class="col s12">
            <div class="file-input">
              <h5>
                <input
                  type="file"
                  v-on:change="onFileUpload"
                  id="file"
                  class="file"
                  required
                  accept="image/jpeg , image/ai , application/pdf "
                />
              </h5>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input
                type="text"
                name="nom"
                v-model="lastname"
                id="nom"
                required
                placeholder="Nom"
              />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input
                class=""
                type="text"
                name="prenom"
                v-model="firstname"
                id="prenom"
                required
                placeholder="Prénom"
              />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">local_shipping</i>
              <input
                class=""
                type="text"
                name="commande"
                v-model="n_commande"
                id="commande"
                required
                placeholder="N°commande"
              />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">crop_original</i>
              <input
                class=""
                type="text"
                name="produit"
                v-model="product"
                id="produit"
                required
                placeholder="Produit"
              />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">build</i>
              <input
                class=""
                type="text"
                name="finitions"
                v-model="finitions"
                id="finitions"
                required
                placeholder="Finitions"
              />
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">format_shapes</i>
              <input
                class=""
                type="text"
                name="format"
                v-model="format"
                id="format"
                required
                placeholder="Format"
              />
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <button class="btn waves-effect waves-light orange darken-3">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

const API_ENDPOINT = "http://51.38.224.116:3000/api/upload";

export default {
  name: "FileFormComponent",
  components: {
    axios,
    swal,
  },
  data: () => {
    return {
      errors: [],
      FILE: null,
      firstname: "",
      lastname: "",
      n_commande: "",
      product: "",
      finitions: "",
      format: "",
      menu: [
        {
          header: true,
          title: "Menu",
          hiddenOnCollapse: true,
        },
        {
          href: "/form",
          title: "Envoyer un fichier",
          icon: "fa fa-user",
        },
        {
          href: "/profil",
          title: "Mon profil",
          icon: "fa fa-chart-area",
        },
      ]
    };
  },
  methods: {
    onFileUpload(event) {
      this.FILE = event.target.files[0];
    },
    async onSubmit() {
      try {
        const formData = new FormData();
        formData.append("file", this.FILE);
        formData.append("firstname", this.firstname);
        formData.append("lastname", this.lastname);
        formData.append("n_commande", this.n_commande);
        formData.append("product", this.product);
        formData.append("finitions", this.finitions);
        formData.append("format", this.format);
        await axios.post(API_ENDPOINT, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (err) {
          return res.json(err);
        }
      } catch (success) {
        swal("Success", "Le formulaire à été envoyé !!!", "success");
        this.$router.push("/success");
      }
    },
  },
};
</script>
<style scoped>
</style>
