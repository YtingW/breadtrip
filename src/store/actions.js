import $ from 'axios';
export default{
    setTitle({commit,state},payload){
        commit('setTitle',payload);
    },
    getData({commit}){
        const recommend=$.get('/api/v2/index?next_start=0')
        .then((result)=>{
            return result;
        })
        const discovery=$.get('/api/destination/v3')
        .then((result)=>{
            return result;
        })
        // const keyPoint=$.get('/api/trips/2387451385/waypoints/')
        Promise.all([recommend,discovery])
        .then((result)=>{
            commit('setData',result)
        })
    }
}