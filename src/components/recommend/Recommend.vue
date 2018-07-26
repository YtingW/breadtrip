<template>
 <mt-loadmore v-show="isShowList" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <div class="recommend" :style="wrapperHeight">
            <div class="swiper">
                <swipe />
            </div>
            <ul>
                <li v-for="(v,i) of triplist" :key="i" @click="handleItemClick(v.data[0].waypoints)">
                    <div>
                    <img :src="v.data[0].cover_image" />
                    
                        <div>
                            <h2>{{v.data[0].name}}</h2>
                            <p>{{v.data[0].first_day}}  <span>{{v.data[0].day_count}}天</span><span>{{v.data[0].view_count}}次浏览</span></p>
                            <p>{{v.data[0].popular_place_str}}</p>
                            <p>
                                <img :src="v.data[0].user.avatar_s">
                                <span>{{v.data[0].user.name}}</span>
                            </p>
                        </div>
                        
                    </div>
                </li>
            </ul>
        
    </div>
</mt-loadmore>  
</template>
<script>
import Swipe from './Swipe.vue';
import {Loadmore,Indicator} from 'mint-ui';
import $ from 'axios';
import { mapState } from 'vuex';
export default {
       name:"recommend",
       data:()=>({
           isShowList:false,
           allLoaded: false,
           Loadmorelist:[],
           wrapperHeight: {
            'min-height': window.innerHeight + 'px'
        } 
    }),
    created() {
        this.start='';
        this.next_start='';
    },
       components:{
           Swipe,
           [Loadmore.name]:Loadmore
       },
       methods:{
            handleItemClick(waypoints){
               this.scrollTop=this.loadmore.scrollTop;
               this.$router.push({
                   name:'detail',
                   query:{
                       waypoints
                   }
               })
           },
            loadBottom(){
                if(this.start==''){
                    this.start=this.next_start;
                }
                $.get('/api/v2/index?next_start='+this.start)
                    .then((result)=>{
                        this.Loadmorelist.push(...result.data.data.elements);
                        this.$refs.loadmore.onBottomLoaded();
                        this.start=result.data.data.next_start;
                }) 
            }
       },
       computed:{
           triplist(){
               let data=this.$store.state.triplist.recommend;
               this.isShowList=data.length?false:true;
                if(data.data==undefined){
                    Indicator.open();
                    return false;
                    
                }else{
                    Indicator.close();
                    this.next_start=data.data.next_start;
                    return [...data.data.elements,...this.Loadmorelist];
                }
                
           }   
       },
       activated() {
           this.loadmore=this.loadmore || document.querySelector('.mint-loadmore');
           this.loadmore.scrollTop = this.scrollTop;
           console.log(this.loadmore.scrollTop);
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
    .mint-loadmore{
        height: 100%;
        overflow: scroll;
        .p_style{
            border-left: 4px solid #00afc7;
            padding-left: .04rem;
            height: .14rem;
            line-height: .14rem;
        }
    ul{
        li{
            height:1.86rem;
            width:100%;
            padding-left: .10rem;
            padding-right: .10rem;
            padding-top: .10rem;
           
            div{
                position: relative;
                height:100%;
                width:100%;
                border-radius: .08rem;
                 img{
                    width: 100%;
                    height: 100%;
                    border-radius: .08rem;
                }
                div{
                    top: 0;
                    left: 0;
                    position: absolute;
                    font-size: 20px;
                    color: #fff;
                    padding: .10rem;
                    background: rgba(0,0,0,0.2);
                    p{
                        font-size: 12px;
                        span{
                            margin-left: .10rem;
                        }
                        &:nth-child(2){
                            @extend .p_style;
                        }
                        &:nth-child(3){
                             @extend .p_style;
                        }
                        &:nth-child(4){
                            position: absolute;
                            bottom: .10rem;
                        } 
                        img{
                            width: .30rem;
                            height: .30rem;
                            border-radius: 50%;
                        }
                    }
                }
                
            }
        }
    }  
    }
</style>