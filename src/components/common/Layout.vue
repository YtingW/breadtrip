<template>
    <div class="index-container">
        <my-header :isShowBack="false"></my-header>
        
        <div class="container">
            <keep-alive>
                <router-view  v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </div>
    
        <div class="mint-tabbar">
            <router-link 
            v-for="v of tabbar" 
            :key="v.id"
            :to="v.path"
            @click.native="handleTabClick(v.path)"
            active-class="selected" 
            class="mint-tab-item" 
            >
                <div class="mint-tab-item-icon">
                    <i class='yo-icon' v-html="v.icon"></i>
                </div>
                <div class="mint-tab-item-label">
                    {{v.name}}
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import MyHeader from './Header.vue';
   export default{
       name:'layout',
       data(){
           return {
            tabbar:[
                {
                    id:'t1',
                    name:'推荐',
                    icon:'&#xe608',
                    path:'/index/recommend'
                },
                {
                    id:'t2',
                    name:'发现',
                    icon:'&#xe62c',
                    path:'/index/discovery'
                }
            ]

           }
           
       },
       components:{
           MyHeader
       },
        methods: {
            handleTabClick(path) {
                this.$router.push({
                    path
                })
            }
        },

   }
</script>
<style lang="scss" scoped>
    @import '@/styles/usage/core/reset.scss';
    @font-face {
        font-family: 'iconfont';
        src:
        url('../../assets/iconfonts/iconfont.woff') format('woff'),
        url('../../assets/iconfonts/iconfont.ttf') format('truetype'),
    }
    .index-container{
        height:100%;
        overflow:hidden;
        @include flexbox();
        @include flex-direction(column);
        >div:nth-child(2){
            @include flex(1);
            overflow:scroll;
            width:100%;
        }
        >div:last-child{
            height: .55rem;
            position: static;
            i{
                font-family:'iconfont';
                font-size:22px;
            }
            a{
                color:#111;
                
            }
            .selected{
                    color:#00afc7;
                    background:#f4f4f4;
            }
        }
        
        
    }
    
</style>