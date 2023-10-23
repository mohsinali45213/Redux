import React from "react";
import { connect } from "react-redux";
const Item = () => {
  return <div>Item</div>;
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCake
    : state.iceCream.numberOfIceCream
    return{
        item:itemState
    }
};
export default connect(mapStateToProps)( Item);
