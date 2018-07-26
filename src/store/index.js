import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import $ from 'axios'
import mutations from './mutation';
import getters from './getters';
import actions from './actions';
const state={
    title:'',
    listtile:{},
    position:0,
    triplist:{
        swiper:[],
        recommend:[],
        discovery:[]
    }
}
const store=new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
export default store;