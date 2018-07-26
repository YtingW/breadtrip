<template>
    <div>你好</div>
</template>
<script>
export default {
    beforeRouteLeave (to, from, next) {
        to.meta.keepAlive=true;
        console.log('ue');
        next();
    }
}
</script>

