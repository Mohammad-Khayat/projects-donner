<template>
  <div class="wrapper">
      <b-container>
          <sign-up class="mx-auto"></sign-up>
      </b-container>


  </div>
</template>

<script>
import SignUp from './SignUp.vue';
export default {
    components:{
        SignUp
    }

}
</script>

<style lang="scss">
.wrapper{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: dodgerblue;
}
</style>