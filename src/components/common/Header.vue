<template>
    <div class="yo-header">
        <h2 class="title">{{title}}</h2>
        <span class="regret yo-ico" @click="handleBackClick" v-show="isShowBack">&#xf07d;</span>
        <span class="affirm"></span>
    </div>
</template>
<script>
export default {
    name:"",
    data(){
      return  {title:"面包旅行"};
    },
    props:{
        isShowBack:{
            type:Boolean,
            required:true
        }
    } ,
    methods:{
        handleBackClick(){
            this.$router.back();
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/styles/usage/core/reset.scss';
@import '@/styles/usage/fragment/yo-header.scss';
@include yo-header(
  $bgcolor: #00afc7,
  $color: #fff,
  $border-color: #00afc7,
  $item-ico-color: #fff,
  $height:.44rem
)
</style>