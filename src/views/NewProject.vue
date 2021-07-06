<template>
  <div>
    <b-button
      class="back-redLight border-0"
      id="show-btn"
      @click="$bvModal.show('bv-modal-example')"
    >
      <span class="mdi mdi-plus-box-multiple"> New Project </span></b-button
    >
    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title>New Project</template>

      <ValidationObserver v-slot="{ invalid }">
        <b-row>
          <b-col>
            <label class="mb-1 mt-3 text-teal" for="title "
              >Project Title :</label
            >
            <ValidationProvider
              required
              rules="min:3"
              name="Title"
              v-slot="{ errors }"
            >
              <b-form-input
                id="title"
                type="text"
                placeholder="Enter a Title"
                required
                v-model="title"
              ></b-form-input>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <label for="title" class="mb-1 mt-3 text-teal"
              >Project Description :</label
            >
            <ValidationProvider
              rules="min:20"
              name="Description"
              v-slot="{ errors }"
            >
              <b-form-textarea
                id="textarea"
                placeholder="Enter Description..."
                rows="3"
                v-model="description"
              ></b-form-textarea>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-col>
        </b-row>
        <label for="tags" class="mb-1 mt-3 text-teal">Project Tags :</label>
        <b-form-tags
          input-id="tags"
          v-model="tags"
          separator=" ,;"
          placeholder="example : Web-development"
        ></b-form-tags>

        <div class="d-flex justify-content-between align-items-end">
          <div>
            <label for="tags" class="mb-1 mt-3 text-teal"> Price : </label>
            <b-form-input
              type="number"
              min="1"
              max="10000"
              v-model="price"
            ></b-form-input>
          </div>
          <b-button
            class="back-redLight w-25 border-0"
            :disabled="
              invalid || title === '' || description === '' || price == null
            "
            >Publish</b-button
          >
        </div>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
extend("min", {
  validate(value, { length }) {
    return value.length >= length;
  },
  params: ["length"],
  message: "The {_field_}  must have at least {length} characters",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    title: "",
    description: "",
    price: null,
    tags: [],
  }),
};
</script>

<style lang='scss'>
@import "../vars.scss";
.badge {
  background-color: $redLight !important;
}
</style>