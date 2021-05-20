<template>
    <div class="container">
        <div class="section no-pad-bot" id="index-banner">
            <div class="container">
            <br><br>
            <h2 class="header center orange-text">Vos fichiers ont été envoyé !</h2>
            <br><br>
            <div class="row center">
                <h5 class="header col s12 light">Merci d'avoir utilisé Pringo pour l'envoie de vos fichiers</h5>
            </div>
            <br>
            </div>
        </div>
        <div class="container">
            <div class="section">

            <!--   Icon Section   -->
            <div class="row">
                <div class="col s12 m5">
                <div class="icon-block">
                    <router-link to="/form">
                    <h2 class="center light-blue-text"><i class="material-icons">attach_file</i></h2>
                    <h5 class="center">Envoyez un nouveau fichier</h5>
                    </router-link>
                </div>
                </div>
                
                <div class="col s12 m2">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="material-icons"></i></h2>
                    <h5 class="center"></h5>
                </div>
                </div>

                <div class="col s12 m5">
                <div class="icon-block">
                    <router-link to="/profil" >
                    <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
                    <h5 class="center">Mon espace client</h5>
                    </router-link>
                </div>
                </div>

                
            </div>
            </div>
        </div>		
    </div>
</template>

<script>
export default {
  name: 'SuccessComponent',
    data: () => {
		return{
			
        }
    },
	methods: {
		
	}	
}
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

.icon-block {
  padding: 0 15px;
}
.icon-block .material-icons {
	font-size: inherit;
}
</style>
