<template>
  <div class="home">
    <b-container>
      <b-row class="mt-5">
        <b-col lg="3" class="d-lg-block d-sm-none">
          <h1 class="text-teal">All Projects</h1>
          <tools-side></tools-side>
        </b-col>
        <b-col lg="9" md="12">
          <b-row class="my-2">
            <b-col>
              <div class="d-flex justify-content-between">
                <b-form-select
                  class="w-25"
                  v-model="selected"
                  :options="options"
                ></b-form-select>
                <new-project></new-project>
              </div>
            </b-col>
          </b-row>
          <main>
            <b-row>
              <b-col
                cols="12"
                v-for="project in projects.slice(
                  (currentPage - 1) * perPage,
                  currentPage * perPage
                )"
                :key="project.id"
              >
                <project-card :project="project"></project-card>
              </b-col>
            </b-row>
            <b-pagination
              class="mt-1"
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
            >
            </b-pagination>
          </main>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NewProject from "./NewProject.vue";
import ProjectCard from "../components/projects/ProjectCard.vue";
import ToolsSide from "../components/ToolsSide.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: { ProjectCard, ToolsSide, NewProject },
  data: () => ({
    currentPage: 1,
    perPage: 7,
    selected: "new",
    options: [
      { value: "new", text: "Newest " },
      { value: "old", text: "Oldest" },
    ],
  }),
  computed: {
    ...mapState({ projects: (state) => state.ProjectsModule.projects }),
    rows() {
      return this.projects.length;
    },
  },
};
</script>
<style lang="scss">

@import "../vars.scss";
main {
  min-height: 100vh;
}
.pagination {
  .page-link {
    color: $redLight;
    transition: 0.6s ease;
    &:focus {
      box-shadow: none;
    }
    &:hover {
      background-color: #fff;
      color: $teal;
    }
  }
}

.page-item.active {
  .page-link {
    background-color: $teal !important;
    border-color: $teal !important;
    color: #eee !important;
    &:focus {
      box-shadow: none;
    }
  }
  &:focus {
    box-shadow: none;
  }
}
</style>