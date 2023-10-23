
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'
const redux= require('redux');
const reduxLogger=require('redux-logger')

const combineReducers=redux.combineReducers
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware

const logger=reduxLogger.createLogger()
/* Action */
const buyCake=()=>{
    return{
        type:BUY_CAKE,
        info:"First Cake"
    }
}
const buyIceCream=()=>{
    return{
        type:BUY_ICECREAM,
        info:"First Ice-Cream"
    }
}


/* Reducer */
const initialStateCake={
    numberOfCake:10
}
const initialStateIceCream={
    numberOfIceCream:20
}
const reducerCake=(state=initialStateCake,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numberOfCake:state.numberOfCake-1
            }
            default: return state
        }
    }
    const reducerIceCream=(state=initialStateIceCream,action)=>{
        switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIceCream:state.numberOfIceCream-1
            }
            default: return state
        }
    }


 /* Combine Reducer */
    const rootReducer=combineReducers({
        reducerCake,reducerIceCream
    })
    const store=createStore(rootReducer,applyMiddleware(logger))
    
    // console.log("InitialState",store.getState());
store.subscribe(()=>console.log("State",store.getState()))

store.dispatch(buyCake())
store.dispatch(buyIceCream())
const unsubscribe1=store.subscribe(()=>{})
const unsubscribe=store.subscribe(()=>console.log("State",store.getState()))
unsubscribe()
unsubscribe1()
console.log("InitialState",store.getState());