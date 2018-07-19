<template>
        <ul>
            <li v-for="v of triplist" :key="v.data[0].waypoints" @click="handleItemClick(v.data[0].waypoints)">
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
</template>
<script>
   import $ from 'axios';
//    import {mapState} from 'vuex'
   export default{
       name:"relist",
       methods:{
           handleItemClick(waypoints){
               this.$router.push({
                   name:'detail',
                   query:{
                       waypoints
                   }
               })
           }
       },
       computed:{
           triplist(){
               let data=this.$store.state.triplist.recommend;
               if( data.data===undefined){
                   return false;
               }
                if(data.data.elements.length){
                    return data.data.elements;
                } 
           }   
       }
   } 
</script>
<style lang="scss" scoped>
    @import '@/styles/usage/core/reset.scss';
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
</style>