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

      <div class="form-group" :class="{invalid: latValidate==='invalid'||lngValidate==='invalid'}" >
        <label for="lat">Co-ordinates</label>
          <input type="text" class="form-control" id="lat" placeholder="latitude"
                v-model.trim="lat"  @blur="validateLatInput" :class="latValidate==='invalid'?'invalid-input':''"/>
          <p v-if="latValidate==='invalid'"  :class="latValidate==='invalid'?'invalid-text':''">
            Please enter a valid Co-ordinates</p>
          <input type="text" class="form-control" id="lng" placeholder="longitude"
                v-model.trim="lng" @blur="validateLngInput" :class="lngValidate==='invalid'?'invalid-input':''" />
          <p v-if="lngValidate==='invalid'"  :class="lngValidate==='invalid'?'invalid-text':''">
                  Please enter a valid Co-ordinates</p>
      </div>

      <div>
        <div class="form-group form-check" v-for="item in categoryList" v-bind:key="item" :required="true">
          <input type="checkbox"  v-model="categoriesSelected" :id="item" :value="item">&nbsp;
          <label :for="item">{{item}}</label>
        </div>
        <p v-if="categoryValidate==='invalid'"  :class="categoryValidate==='invalid'?'invalid-text':''">
          Must select at least 1 category
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
      lat: 0,
      lng: 0,
      latValidate: '',
      lngValidate: '',
      categoryList: this.$store.state.categories,
      categoriesSelected: [],
      categoryValidate: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      this.validateTitleInput();
      this.validateAddressInput();
      this.validateLatInput();
      this.validateLngInput();
      this.validateCategoryInput();

      if (this.categoryValidate==="valid") {
        let newData = {title: this.title, address: this.address, lat: this.lat, lng: this.lng, categoriesSelected: this.categoriesSelected};
        this.$store.commit('addLocation', newData);
        this.title = '';
        this.address = '';
        this.coordinates = '';
        this.category = '';
      }
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
      if (this.categoriesSelected.length===0) {
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
