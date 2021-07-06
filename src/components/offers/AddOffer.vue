<template>
  <div class="offer">
    <b-container class="mt-5">
      <b-row>
        <b-col lg="6" md="5" xs="12">
          <div class="project-details">
            <h1 class="text-navy">{{ project.title }}</h1>
            <h4 class="text-redLight">2 Hours Ago</h4>
            <p>
              {{ project.description }}
            </p>
          </div>
          <div class="publisher">
            <h3 class="text-navy">{{ project.publisher }}</h3>
            <b-row no-gutters>
              <b-col cols="2" lg="2" md="4" sm="2" xs="12" class="mt-2">
                <b-img
                  height="80px"
                  class="rounded-circle"
                  src="https://southernplasticsurgery.com.au/wp-content/uploads/2013/10/user-placeholder.png"
                >
                </b-img
              ></b-col>
              <b-col lg="10" md="8" sm="10" xs="12" class="mt-2">
                <h6><span class="text-teal">Total Projects : </span> 6</h6>
                <h6>
                  <span class="text-teal"> Phone Number : </span>
                  +963956954441
                </h6>
                <h6>
                  <span class="text-teal">Email : </span>
                  ms.sy.k@outlook.com
                </h6>
              </b-col>
            </b-row>
          </div>
        </b-col>

        <b-col lg="6" md="7" xs="12">
          <div class="offer-form">
            <h3 class="text-teal">Add Your Offer</h3>
            <label for="">Message : </label>
            <b-textarea
              placeholder="Enter Your Offer Caption"
              v-model="offer.message"
            ></b-textarea>
            <label for="">Finishing Time : </label>
            <div class="d-flex justify-content-between">
              <div class="d-flex w-75">
                <input
                  type="number"
                  class="border-0 mr-2 w-25"
                  v-model="offer.finishTime.value"
                />
                <b-select
                  class="border-0 text-redLight w-25"
                  v-model="offer.finishTime.select"
                >
                  <b-select-option value="Hours"> Hours </b-select-option>
                  <b-select-option value="Days"> Days </b-select-option>
                  <b-select-option value="Monthes"> Monthes </b-select-option>
                </b-select>
              </div>
              <b-button class="back-navy w-25" @click="addOffer">
                <span class="mdi mdi-comment-check"></span> Post
              </b-button>
            </div>
          </div>
          <h4 class="text-teal mt-4">Latest Offers :</h4>
          <div class="offers-list">
            <b-row cols="1">
              <b-col v-for="offer in offers" :key="offer">
                <offer-card :offer="offer"></offer-card>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import OfferCard from "./OfferCard.vue";
export default {
  components: {
    OfferCard,
  },
  props: ["projectId"],
  data: () => ({
    project: {},
    offer: {
      message: "",
      finishTime: {
        value: "",
        select: "hours",
      },
    },
  }),
  computed: {
    ...mapState(
      { projects: (state) => state.ProjectsModule.projects}),

    ...mapState({offers: (state) => state.OffersModule.offers })
  },
  created() {
    this.getProject();
  },
  methods: {
    ...mapActions(["add_offer"]),
    getProject() {
      this.project = this.projects.find((el) => el.id == this.projectId);
    },
    addOffer(){
      this.addOffer(this.offer);
      console.log(this.offers)
    }
  },
};
</script>

<style lang="scss">
.project-details {
}
.offer-form {
}
</style>

