import { createStore } from "vuex";
import axios from "axios";
import router from '@/router';
const BASE_URL="http://localhost:3001";
axios.defaults.withCredentials = true

export default createStore({
  state: {
    loggedIn: false,
  },
  getters: {
  },
  mutations: {
    setLogged(state,data){
      state.loggedIn=data
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
    }
  },
  modules: {
  }
})
