export default{
    title(state){
        return (type)=>{
            return state.listtitle[type];
        }
    }
}