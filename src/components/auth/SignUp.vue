<template>
  <div class="signup">
    <h3 class="text-center">CREATE ACCOUNT</h3>
    <form action="">
      <b-row>
        <b-col>
          <b-input type="text" placeholder="First Name"></b-input>
        </b-col>

        <b-col>
          <b-input type="text" placeholder="First Name"></b-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-input type="email" placeholder="Email"> </b-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-input type="email" placeholder="Phone Number"> </b-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-input type="email" placeholder="Password"> </b-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-input type="email" placeholder="Confirm Password"> </b-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button variant="primary" pill block>SIGN UP</b-button>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
form {
    padding: 20px;
  background-color: #eee;
  margin: auto;
  width: 500px !important;
}
</style>