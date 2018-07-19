<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(v,i) of swiperlist" :key="i">
            <a :href="v.html_url"><img :src="v.image_url" /></a>
        </mt-swipe-item>
    </mt-swipe>   
</template>
<script>
    import { Swipe, SwipeItem } from 'mint-ui';
    export default{
        name:'swipe',
        computed:{
            swiperlist(){
               let data=this.$store.state.triplist.swiper;
               if( data.banners===undefined){
                   return false;
               }
                if(data.banners.length){
                    return data.banners;
                } 
           }
        },
        components:{
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem
        }
    }
</script>
<style lang="scss" scoped>
    .common{
       width: 100%;
        height: 100%;
        border-radius: .08rem; 
    }
    a{
        @extend .common;
        display: block;
        img{
            @extend .common;
        }
    }
    
</style>

