<template>
<div class="products">
 <div class="row">
    <div class="col">
      <input v-model="searchQuery" type="text" placeholder="Search product by name" class="form-control">
    </div>
    <div class="col">
      <button @click="toggleSorting"  class="btn btn-success" style="border: solid 1px; padding: 6px;">{{ sorting ? 'Sorting by Highest' : 'Sorting by lowest' }}</button>
    </div>
 </div>

 <div class="row mt-3" v-if="products">
    <div class="col-md-4" v-for="product in filteredProducts" :key="product.id">
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="p-8 rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-110" :src="product.prod_url" alt="Product Image">
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.prod_name }}</h5>
          </a>
          <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-gray-900 dark:text-white">R{{ product.price }}.00</span>
            <button><img src="https://i.postimg.cc/N0LNn04v/icons8-cart-100.png" style="height: 20px;"></button>
          </div>
        </div>
      </div>
    </div>
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
.products{
  margin-top: 5.5rem;
  text-align: center;
  height: 100%;
  font-family: "Thasadith", sans-serif !important;
}



.row{
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
}
</style>
