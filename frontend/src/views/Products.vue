<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <input v-model="searchQuery" type="text" placeholder="Search product by name" class="form-control">
      </div>
      <div class="col">
        <button @click="toggleSorting" class="btn btn-success">{{ sorting ? 'Sorting by price' : 'Sorting by name' }}</button>
      </div>
    </div>
    <div class="row mt-3" v-if="products">
      <div class="col-md-4" v-for="product in filteredProducts" :key="product.id">
        <div class="card">
          <img :src="product.prod_url" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ product.prod_name }}</h5>
            <p class="card-text">Price: R{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-3" v-else>
      <p class="lead">Loading</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      let filtered = this.products;
      if (this.searchQuery) {
        filtered = filtered.filter(product => product.prod_name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
      if (this.sorting) {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else {
        filtered = filtered.sort((a, b) => a.prod_name.localeCompare(b.prod_name));
      }
      return filtered;
    },
  },
  data() {
    return {
      searchQuery: '',
      sorting: false,
    };
  },
  methods: {
    toggleSorting() {
      this.sorting = !this.sorting;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>
.container{
  background-color: blue;
  margin-top: 10rem;
  height: 100vh;
  border: solid 1px;
}

.card {
  margin-bottom: 20px;
}
.product-image {
  max-width: 100px;
  max-height: 100px;
  border-radius: 10px;
}
</style>
