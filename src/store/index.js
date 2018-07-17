import Vue from 'vue';
import Vuex from 'vuex';
import $ from 'axios';
Vue.use(Vuex);
import mutations from './mutation';
import getters from './getters';
import actions from './actions';
const state={
    title:'',
    listtile:{},
    position:0,
    triplist:{
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