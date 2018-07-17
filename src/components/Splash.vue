<template>
      <div class="bg">
        <p class="bread-logo"></p>
        <div @click="handleclick">
            <img src="../assets/images/logo_breadtrip@3x.3a5f994.png">
            <p>面包旅行</p>
            <button>点击进入</button>
        </div>
      </div>
</template>
<script>
 export default {
   name:'splash',
   components:{},
   methods:{
     handleclick(){
       this.$router.replace({
         name:'index'
       })
     }
   }
 }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import '@/styles/usage/core/reset.scss';
    .resetCenter{
      @include flexbox();
      @include flex-direction(column);
      @include justify-content(center);
      @include align-items(center);
    }
    .bg{
      height: 100%;
      width: 100%;
      background-image: url('../assets/images/bg@3x.a3a6a15.png');
      background-size: cover;
      @extend .resetCenter;
      .bread-logo{
        width: 187px;
        height: 67px;
        background-image: url('../assets/images/title@3x.c62a70f.png');
        background-size: 187px 67px;
        margin-bottom: 60px;
        
      }
      >div{
        @extend .resetCenter;
        img{
          width: 82px;
          height: 82px;
          background-size: 82px 82px;
          margin-right: 0;
          margin-bottom: 18px;
        }
        p{
          font-size: 18px;
          margin-bottom: 26px;
          line-height: 1;
          text-align:center;
        }
        button{
          color: #fff;
          width: 100px;
          height: 32px;
          line-height: 32px;
          background-color: #4abdcc;
          border-radius: 100px;
          border:0;
        }
      }
    }
</style>