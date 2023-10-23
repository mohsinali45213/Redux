import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from './Redux'
function CakeContainers(props) {
  return (
    <div>
        <h2>Number Of Cake-{props.numberOfCake}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps=state=>{
  return{
    numberOfCake:state.cake.numberOfCake
  }
}
const mapDispatchToProps=dispatch=>{
 return{
  buyCake:()=>dispatch(buyCake())
 } 
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainers)