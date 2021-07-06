<template>


    <b-navbar toggleable="lg" type="dark" class="back-navy">
      <b-container>
        <b-navbar-brand href="#">
          <span class="text-redLight">Jobs</span>Donner</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Projects</b-nav-item>
            <b-nav-item to="/project">My Projects</b-nav-item>
            <b-nav-item href="#">My Offers</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Requests</b-nav-item>
            <b-nav-item-dropdown right>
              <template #button-content>
                Username
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.navbar {
  background-color: #284b63 !important;
}
.menue {
  font-size: 25px;
  margin-right: 20px;
}
</style>