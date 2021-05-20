<template>
  <div id="app">
    <NavbarComponent/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent'
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  components:{
    NavbarComponent,
    SidebarMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
