import { createStore } from 'vuex'
import axios from 'axios'
const lifeURL = "https://capstone-project-3diq.onrender.com"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users){
      state.users =users
    },
    setUser(state, user){
      state.user =user
    },
    setProducts(state, products){
      state.products =products
    },
    setProduct(state, product){
      state.product = product
    },
    setSpinner(state, value){
      state.spinner = value
    },
    setToken(state, token){
      state.token = token
    },
    setDeletionStatus(state, status) {
      state.deletionStatus = status;
    },
    deleteUser(state, userID) {
      const index = state.users.findIndex(user => user.userId === userID);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
  },
  actions: {
    async fetchUsers(context) {
      try{
        const {data} = await axios.get(`${lifeURL}users`)
        // console.log(data)
        context.commit("setUsers", data.results)
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occured.")
      }
    },
    
    async fetchProducts(context) {
      try{
        const {data} = await axios.get(`${lifeURL}products`)
        console.log(data);
        context.commit("setProducts", data)
      }catch(e){
        context.commit("setMsg", "An error occured.")
      }
    },
    async fetchProduct(context, id) {
      try {
        const { data } = await axios.get(`${lifeURL}products/${id}`);
        context.commit("setProduct", data.result[0]);
        console.log(data.result);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },

     // Action to delete a user
     async deleteUser(context, userID) {
      try {
        context.commit("setDeletionStatus", null);

        const response = await axios.delete(`${lifeURL}user/${userID}`);

        if (response.status !== 200) {
          throw new Error(`Failed to delete user. Status: ${response.status}`);
        }

        // You don't need to commit "deleteUser" mutation here
        context.commit("setDeletionStatus", "success");
      } catch (error) {
        console.error("Error deleting user:", error);
        context.commit("setDeletionStatus", "error");
      }
    },

    
    async deleteProduct(context, id) {
      try {
        context.commit("setDeletionStatus", null);
        
        const response = await axios.delete(`${lifeURL}products/${id}`);
        
        if (response.status !== 200) {
          throw new Error(`Failed to delete product. Status: ${response.status}`);
        }
        
        context.commit("removeProduct", id);
        context.commit("setDeletionStatus", "success");
      } catch (error) {
        console.error("Error deleting product:", error);
        context.commit("setDeletionStatus", "error");
      }
    },
     updateProduct(context, updatedData) {
      try {
        const response = axios.put(`${lifeURL}products/${updatedData.prodID}`, updatedData);
        
        if (response.status !== 200) {
          throw new Error(`Failed to update product. Status: ${response.status}`);
        }
        
        context.commit("updateProduct", { id, updatedData });
        context.commit("setEditStatus", "success");
      } catch (error) {
        console.error("Error editing product:", error);
        context.commit("setEditStatus", "error");
      }
    },
    async updateUser(context, { id, updatedData }) {
      try {
        const response = await axios.patch(`${lifeURL}/user/${userID}`, updatedData);
        
        if (response.status !== 200) {
          throw new Error(`Failed to update user. Status: ${response.status}`);
        }
        context.commit("updateUser", { id, updatedData });
        context.commit("setEditStatus", "success");
      } catch (error) {
        console.error("Error editing product:", error);
        context.commit("setEditStatus", "error");
      }
    }
  },
  modules: {
  }
})


