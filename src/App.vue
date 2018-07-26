<template>
  <div id="app">
  <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
   <!-- <router-view></router-view>  -->
   </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  methods: {
    ...mapActions(['getData'])
  },
  created() {
      this.getData();
  },
  mounted() {
    console.log('app-mounted');
  },
  beforeUpdate() {
    console.log('app-beforeupdate');
  },
 updated() {
    console.log('app-updated');
  },
  destroyed() {
    console.log('app-destroyed');
  },
}
</script>

<style lang="scss">
  @import './styles/usage/core/reset.scss';
  #app{
    height: 100%;
    width: 100%;
  }
</style>
