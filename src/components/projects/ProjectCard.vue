<template>
  <b-card body-class="p-0  px-3 py-2 " class="my-1 shadow border-0">
    <b-row no-gutters>
      <b-col cols="1">
        <b-card-img
          class="user-img"
          src="https://southernplasticsurgery.com.au/wp-content/uploads/2013/10/user-placeholder.png"
          left
        >
        </b-card-img>
      </b-col>
      <b-col cols="11" class="pl-3">
        <div class="project-header d-flex flex-column">
          <div class="d-flex justify-content-between">
            <b-card-title class="p-0 m-0 text-navy">
              {{ project.title }}
            </b-card-title>
            <b-button-group class="contact">
              <b-button @click="navigate" class="back-navy">Add Offer</b-button>
              <b-button class="back-navy">
                <span class="mdi mdi-bookmark"></span
              ></b-button>
            </b-button-group>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-start">
              <span class="text-redLight"
                ><span class="mdi mdi-account"></span>{{ project.publisher }}
              </span>
              <span class="mdi mdi-clock text-redLight ml-3"> 2 Hours Ago</span>
            </div>
          </div>
        </div>
        <div class="project-desc py-2 text-dark">
          {{ project.description }}
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
props:['project'],
methods:{
  navigate(){
    this.$router.push('/offer/'+this.project.id)
  }
}
};
</script>

<style lang='scss'>
.user-img {
  border-radius: 50%;
  width: 100%;
}
.card-img-left {
  border-top-left-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}
.contact {
  height: 35px;
}
</style>