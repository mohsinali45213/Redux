import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from './Redux'
import { useState } from 'react'
function NewCakeContainers(props) {
  const [number,setNumber]=useState(1)
  return (
    <div>
        <h2>Number Of Cake-{props.numberOfCake}</h2>
        <input type='text' value={number} onChange={e=>setNumber(e.target.value)}></input>
        <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
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
  buyCake:(number)=>dispatch(buyCake(number))
 } 
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainers)