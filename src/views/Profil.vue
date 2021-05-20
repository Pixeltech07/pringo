<template>
  <div>
      <sidebar-menu :menu="menu" />
  </div>
</template>

<script>
import UserProfilComponent from '../components/UserProfilComponent'
export default {
  name: 'SideNav',
  components:{
    UserProfilComponent
  },
  data() {
    return {
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
      ],
    };
  }
}
</script>

<style scoped>

</style>
