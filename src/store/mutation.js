const mutations={
    setTitle(state,payload){
        state.title=payload;
    },
    setPos(state,payload){
        state.position=payload;
    },
    setData(state,payload){
        state.triplist.recommend=payload[0].data;
        state.triplist.discovery=payload[1].data;
        state.listtitle={
            recommend:payload.data,
            discovery:payload.data
        }
    }
}
export default mutations;