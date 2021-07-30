import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        activeIndex:""
    },
    getters:{
        getActiveIndex(state){
            return state.activeIndex;
        }
    },
    mutations:{
        setActiveIndex(state,currIndex){
            state.activeIndex = currIndex;
        }
    }
})