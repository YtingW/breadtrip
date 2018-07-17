export default{
    setTitle({commit,state},payload){
        commit('setTitle',payload);
    },
    getData({commit}){
        const recomment=$.get('/v2/index')
        .then((result)=>{
            return result;
        })
        const discovery=$.get('/destination/v3')
        .then((result)=>{
            return result;
        })
        // const keyPoint=$.get('/trips/2387451385/waypoints/')
        Promise.all([recomment,discovery])
        .then((result)=>{
            commit('setData',result)
        })
    }
}