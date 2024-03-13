import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async signupUser({ commit }, userData) {
      try {
        const response = await axios.post('/users/signup', userData);
        // Handle successful signup (e.g., commit to state)
        console.log(response.data);
      } catch (error) {
        // Handle errors (e.g., show an error message)
        throw error;
      }
    },
  },
  modules: {
  }
})
