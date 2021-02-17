<template>
  <div id="add-location">
    <h1>Add New Location</h1>

    <form>
      <div class="form-group" :class="{invalid: titleValidate==='invalid'}">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
               :class="titleValidate==='invalid'?'invalid-input':''" v-model.trim="title" @blur="validateTitleInput" />
        <p v-if="titleValidate==='invalid'" :class="titleValidate==='invalid'?'invalid-text':''">
          Please enter a valid title
        </p>
      </div>

      <div class="form-group" :class="{invalid: addressValidate==='invalid'}">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address"
               :class="addressValidate==='invalid'?'invalid-input':''" v-model.trim="address" @blur="validateAddressInput" />
        <p v-if="addressValidate==='invalid'"  :class="addressValidate==='invalid'?'invalid-text':''">
          Please enter a valid address
        </p>
      </div>

      <div class="form-group" :class="{invalid: coordinatesValidate==='invalid'}">
        <label for="coordinates">Co-ordinates</label>
        <input type="text" class="form-control" id="coordinates"
               :class="coordinatesValidate==='invalid'?'invalid-input':''" v-model.trim="coordinates" @blur="validateCoordinatesInput" />
        <p v-if="coordinatesValidate==='invalid'"  :class="coordinatesValidate==='invalid'?'invalid-text':''">
          Please enter a valid Co-ordinates
        </p>
      </div>

      <div class="form-group" :class="{invalid: categoryValidate==='invalid'}">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category"
               :class="categoryValidate==='invalid'?'invalid-input':''" v-model.trim="category" @blur="validateCategoryInput" />
        <p v-if="categoryValidate==='invalid'" :class="categoryValidate==='invalid'?'invalid-text':''">
          Please enter a valid Category
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
  name: "addLocation",
  data() {
    return {
      title: '',
      titleValidate: '',
      address: '',
      addressValidate: '',
      coordinates: '',
      coordinatesValidate: '',
      category: '',
      categoryValidate: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      let newData = {title: this.title, address: this.address, coordinates: this.coordinates, category: this.category};
      this.$store.commit('addLocation', newData);
      this.title = '';
      this.address = '';
      this.coordinates = '';
      this.category = '';
    },
    validateTitleInput() {
      if (this.title.length < 2) {
        this.titleValidate = 'invalid';
      } else {
        this.titleValidate = 'valid';
      }
    },
    validateAddressInput() {
      if (this.address.length < 4) {
        this.addressValidate = 'invalid';
      } else {
        this.addressValidate = 'valid';
      }
    },
    validateCoordinatesInput() {
      if (this.coordinates.length < 5) {
        this.coordinatesValidate = 'invalid';
      } else {
        this.coordinatesValidate = 'valid';
      }
    },
    validateCategoryInput() {
      if (this.category.length===0) {
        this.categoryValidate = 'invalid';
      }
      else {
        this.categoryValidate = 'valid';
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
