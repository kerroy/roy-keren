<template>
  <div id="add-category">
    <h1>Edit Category</h1>

    <form>
      <div class="form-group" :class="{invalid: categoryTitleValidate==='invalid'}">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
               v-model.trim="categoryTitle" @blur="validateInput" />
        <p v-if="categoryTitleValidate==='invalid'">Please enter a valid title</p>
      </div>
    </form>

    <button type="submit" class="badge badge-primary" @click="submitForm">
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: "editCategory",
  data() {
    return {
      categoryTitle: this.$store.state.categories[this.$store.state.selectedCategory].title,
      categoryTitleValidate: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // console.log("add: "+this.categoryTitle);
      this.$store.commit('editCategory', this.categoryTitle);
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

.form-control.invalid input {
  border-color: red;
}
</style>
