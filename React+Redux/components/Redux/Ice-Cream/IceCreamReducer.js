import { BUY_ICE_CREAM } from "./IceCreamType";
const initialStat = {
  numberOfIceCream: 20,
};
const iceCreamReducer = (state = initialStat, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
      break;
    default:
      return state;
      break;
  }
};
export default iceCreamReducer;
