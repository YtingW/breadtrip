<template>
    <recommend />     
</template>
<script>
import $ from 'axios'
import Recommend from '@/components/recommend/Recommend.vue';
export default{
    components:{
        Recommend
    },
    created() {
        console.log('recommend-created');
    },
    updated() {
        console.log('recommend-updated');
    },
}
</script>