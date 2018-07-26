<template>
<div class="wrapper">
    <ul>
        <li v-for="v of triplist" :key="v.index">
            <h2>{{v.title}}</h2>
            <ul class="ul-list">
                <li v-for="item of v.data" :key="item.id" @click="handleClickItem(item.id)">
                    <img :src="item.cover" />
                    <p>{{item.name}}</p>
                    </li>
                </ul>
        </li>
        </ul> 
</div>
</template>
<script>
    import BScroll from 'better-scroll';
    export default {
        name:"dislist",
        computed:{
            triplist(){
                let data=this.$store.state.triplist.discovery;
                if(data.elements==undefined){
                    return false;
                }
                if(data.elements.length){
                    return data.elements;
                    
                }
            }
        },
        mounted() {
            const options = {
                scrollY: true,
                click:true,
            }
          this.scroll = new BScroll('.wrapper',options);
           
        },
        methods:{
            handleClickItem(id){
                this.$router.push({
                    name:'destination',
                    query:{
                        id
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '@/styles/usage/core/reset.scss';
    .wrapper{
        height: 100%;
        width: 100%;
        overflow: hidden;
    li{
        margin-top: .20rem;
        h2{
            margin-left: .10rem;
            font-size: 16px;
            height: .22rem;
            font-weight: 500;
            margin-bottom: .10rem;
        }
        .ul-list{
            width: 100%;
            @include flexbox();
            @include flex-wrap(wrap);
            @include justify-content(space-between);
            @include align-content(flex-start);
            @include align-items(center);
            padding: 0 0.05rem;
            margin-bottom:.20rem;
            li{
                position: relative;
                width: 50%;
                @include flexbox();
                @include justify-content(center);
                margin-top: 0.10rem;
                img{
                    width: 1.74rem;
                    height: 1.74rem;
                    border-radius: 0.08rem;
                }
                p{
                    position: absolute;
                    left: .10rem;
                    bottom: .10rem;
                    margin-left: .05rem;
                    color:#fff;
                    font-size: 20px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

                }
            }
        }
    }
    }
</style>
