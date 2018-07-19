<template>
    <div class="recommend">
        <div class="swiper">
            <swipe />
        </div>
        
        <div>
            <re-list></re-list>
        </div>
    </div>
    
</template>
<script>
import Swipe from './Swipe.vue';
import $ from 'axios'
import ReList from './ReList.vue';
   export default{
       name:"recommend",
       components:{
           Swipe,ReList
       }
   } 
</script>
<style lang="scss" scoped>
    @import '@/styles/usage/core/reset.scss';
    .swiper{
        height:1.76rem;
        width:100%;
        padding-left: .10rem;
        padding-right: .10rem;
        padding-top: .10rem;
        div{
            border-radius: .08rem; 
        }
        
    } 
</style>