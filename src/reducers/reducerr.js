import initialState from "./initial"
const Fetchingdata=(state=initialState,action)=>{
    switch (action.type){
        case "FETCH_DATA":{
            console.log("fetch dta cse");
            return state;        
        }
        default:return state;
    }
}

export default Fetchingdata;