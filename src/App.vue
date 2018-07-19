<template>
  <router-view />
</template>
<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['getData'])
  },
  created() {
    this.getData();
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('updated');
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
