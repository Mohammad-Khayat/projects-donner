<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/ui/NavBar.vue'
export default {
  components:{NavBar}
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

body{
font-family: 'Quicksand', sans-serif !important;
  background-color: #eee !important;
}
</style>
