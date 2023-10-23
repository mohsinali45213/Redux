import React from "react";
import { buyIceCream } from "./Redux";
import { connect } from "react-redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number Of Ice-Cream-{props.numberOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Ice-Cream</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    numberOfIceCream: state.iceCream.numberOfIceCream,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    buyIceCream:()=>dispatch(buyIceCream())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
