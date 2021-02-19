<template>
  <div id="add-category">
    <h1>Add New Category</h1>

    <form>
      <div class="form-group" :class="{invalid: categoryTitleValidate==='invalid'}">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
               :class="categoryTitleValidate==='invalid'?'invalid-input':''"
               v-model.trim="categoryTitle" @blur="validateInput" />
        <p v-if="categoryTitleValidate==='invalid'" :class="categoryTitleValidate==='invalid'?'invalid-text':''">
          Please enter a valid title
        </p>
      </div>
    </form>

    <button type="submit" class="badge badge-primary" @click="submitForm">
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: "addCategory",
  data() {
    return {
      categoryTitle: '',
      categoryTitleValidate: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      this.validateInput();

      if (this.categoryTitleValidate=='valid') {
        this.$store.commit('addCategory', this.categoryTitle);
        this.categoryTitle = '';
      }
    },
    validateInput() {
      if (this.categoryTitle.length<2) {
        this.categoryTitleValidate = 'invalid';
      }
      else {
        this.categoryTitleValidate = 'valid';
      }
    }
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}

.invalid-input {
  border-color: red;
}
.invalid-text {
  color: red;
}
</style>
