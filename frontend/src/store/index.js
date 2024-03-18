import { createStore } from "vuex";
import axios from "axios";
import router from '@/router';
const BASE_URL="http://localhost:3001";
axios.defaults.withCredentials = true

export default createStore({
  state: {
    loggedIn: false,
    watches: []
  },
  getters: {
  },
  mutations: {
    setLogged(state,data){
      state.loggedIn=data
    },
    setWatches(state,data){
      state.watches = data;
    }
  },
  actions: {
    async checkPassword({commit},user) {
      let {data}=await axios.post(BASE_URL+'/login',user);
      $cookies.set('jwt',data.token)
      alert(data.msg)
      commit('setLogged',true)
      router.push('/')
      window.location.reload()
    },
    async getWatches({ commit }){
      let {data}=await axios.get(BASE_URL+ "/Products");
      console.log(data);
      commit("setWatches",data)
    }
  },
  modules: {
  }
})
