<template>
  <div id="profil">
  </div>
</template>

<script>
import axios from "axios";

//const BASE_URL = "http://localhost:3000/api/"

export default {
  name: 'UserProfil',
  data() {
    return {
      userData: ''
    };
  },
  props : {
      firstName: String,
      lastName: String,
      email: String
  },
  methods : {
      sendUserData(){
          this.$emit('userdata', {
              message: this.userData,
              user: {
                  firstname:this.firstName,
                  lastname:this.lastName,
                  email:this.email
              }
          })
          this.userData = ''
      }
  }
}
</script>

<style scoped>

</style>
