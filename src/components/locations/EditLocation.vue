<template>
  <div id="add-location">
    <h1>Edit Location</h1>
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

      <div class="form-group" :class="{invalid: latValidate==='invalid'||lngValidate==='invalid'}">
        <label for="lat">Co-ordinates</label>
        <input type="text" class="form-control" id="lat"
               :class="latValidate==='invalid'?'invalid-input':''" v-model="lat" @blur="validateLatInput" />
        <p v-if="latValidate==='invalid'"  :class="latValidate==='invalid'?'invalid-text':''">
          Please enter a valid Latitude
        </p>
        <input type="text" class="form-control" id="lng"
               :class="lngValidate==='invalid'?'invalid-input':''" v-model="lng" @blur="validateLngInput" />
        <p v-if="lngValidate==='invalid'"  :class="lngValidate==='invalid'?'invalid-text':''">
          Please enter a valid longitude
        </p>
      </div>

      <div class="form-group form-check" v-for="item in categoryList" v-bind:key="item" aria-required="true">
        <input type="checkbox"  v-model="categoriesSelected" :id="item.title" :value="item.title">&nbsp;
        <label :for="item">{{ item.title }}</label>
      </div>
<!--      <div class="form-group" :class="{invalid: categoryValidate==='invalid'}">-->
<!--        <label for="category">Category</label>-->
<!--        <input type="text" class="form-control" id="category"-->
<!--               :class="categoryValidate==='invalid'?'invalid-input':''" v-model.trim="category" @blur="validateCategoryInput" />-->
<!--        <p v-if="categoryValidate==='invalid'" :class="categoryValidate==='invalid'?'invalid-text':''">-->
<!--          Please enter a valid Category-->
<!--        </p>-->
<!--      </div>-->
    </form>

    <button type="submit" class="badge badge-primary" @click="submitForm">
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: "editLocation",
  data() {
    return {
      title: this.$store.state.locations[this.$store.state.selectedLocation].title,
      titleValidate: '',
      address: this.$store.state.locations[this.$store.state.selectedLocation].address,
      addressValidate: '',
      lat: this.$store.state.locations[this.$store.state.selectedLocation].lat,
      latValidate: '',
      lng: this.$store.state.locations[this.$store.state.selectedLocation].lng,
      lngValidate: '',
      categoriesSelected: this.$store.state.locations[this.$store.state.selectedLocation].categoriesSelected,
      categoryValidate: '',
      categoryList: this.$store.state.categories,
      message: ''
    };
  },
  methods: {
    submitForm() {
      let newData = {title: this.title, address: this.address, lat: this.lat, lng: this.lng, categoriesSelected: this.categoriesSelected};
      this.$store.commit('editLocation', newData);
      this.title = '';
      this.address = '';
      this.coordinates = '';
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
    validateLatInput() {
      if (!this.lat) {
        this.latValidate = 'invalid';
      } else {
        this.latValidate = 'valid';
      }
    },
    validateLngInput() {
      if (!this.lng) {
        this.lngValidate = 'invalid';
      } else {
        this.lngValidate = 'valid';
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
