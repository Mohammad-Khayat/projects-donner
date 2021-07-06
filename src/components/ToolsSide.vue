<template>
  <aside class="d-flex">
    <div class="content">
      <div class="search d-inline-flex">
        <b-form-input
          placeholder="Search for a project"
          class="rounded-left"
        ></b-form-input>
        <b-button class="back-navy w-25 search-btn rounded-right"
          ><span class="mdi mdi-magnify"></span
        ></b-button>
      </div>

      <b-form-group
        class="mt-4"
        label="Filter Projects :"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="flavour-1"
          class="flex flex-column my-buttons"
        ></b-form-checkbox-group>
      </b-form-group>
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Web Development", value: "orange" },
        { text: "Android Development", value: "apple" },
        { text: "Ui Ux Design", value: "pineapple" },
        { text: "Social Media Markting", value: "grape" },
      ],
    };
  },
};
</script>
<style  lang="scss">
@import '../vars.scss';
aside {
  .search {
    height: 40px;
    input {
      height: 100%;
      border-radius: 0;
    }
    .mdi {
      font-weight: bold;
      font-size: 20px;
    }
    .search-btn {
      padding: 0 !important;
      height: 100%;
      border-radius: 0;
    }
  }

}
.custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    border-color: $teal !important;
    background-color: $teal !important;
}

</style>