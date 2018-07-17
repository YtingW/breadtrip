<template>
    <div class="recommend">
        <div class="swiper">
            <swipe />
        </div>
        
        <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
            <li>Item5</li>
            <li>Item6</li>
            <li>Item7</li>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
            <li>Item5</li>
            <li>Item6</li>
            <li>Item7</li>
        </ul>
    </div>
    
</template>
<script>
import Swipe from './common/Swipe.vue'
   export default{
       name:"recommend",
       components:{
           Swipe
       }
   } 
</script>
<style lang="scss" scoped>
    @import '@/styles/usage/core/reset.scss';
    .recommend{
        .swiper{
            box-sizing:border-box;
            height:200px;
            width:100%;
            padding: 15px 15px 0;
            background:#fdf;
            overflow:hidden;
        }
        li{
            height:60px;
            font-size:30px;
            width:100%;
            border-bottom:1px solid black;
        }
    }
</style>