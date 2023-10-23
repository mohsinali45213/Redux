import { BYU_CAKE } from "./CakeType";
const initialState={
    numberOfCake:20
}
const cakeReducer=(state=initialState,action)=>{
    switch (action.type) {
        case BYU_CAKE:
            return{
                ...state,
                numberOfCake:state.numberOfCake-action.payload
            }
            break;
    
        default:return state
            break;
    }
}
export default cakeReducer;