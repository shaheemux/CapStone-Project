<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <input v-model="searchQuery" type="text" placeholder="Search product by name" class="form-control">
        </div>
        <div class="col">
          <button @click="toggleSorting" class="btn btn-success" style="border: solid 1px; padding: 6px;">{{ sorting ? 'Sorting by price' : 'Sorting by name' }}</button>
        </div>
      </div>
      <div class="row" v-if="products">
        <table class="table">
          <thead>
            <tr>
              <th @click="sort('prod_name')">Name</th>
              <th>Image</th>
              <th @click="sort('price')">Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.id">
              <td>{{ product.prod_name }}</td>
              <td><img :src="product.prod_url" alt="Product Image" class="product-image"></td>
              <td>{{ product.price }}</td>
              <td>{{ product.quantity }}</td>
            </tr>
          </tbody>
        </table>
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
      sort(prop) {
        this.sorting = !this.sorting;
        if (this.sorting) {
          this.products.sort((a, b) => a[prop] - b[prop]);
        } else {
          this.products.sort((a, b) => b[prop] - a[prop]);
        }
      },
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
    },
  };
  </script>
  
  <style scoped>

  .container{
    margin-top: 6rem;
    padding: 1rem;
  }
  .product-image {
    max-width: 100px;
    max-height: 100px;
    border-radius: 10px;
  }
  </style>
  