import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { buyCake } from './Redux'
const HooksCakeContainer = () => {
    const numberOfCake= useSelector(state=>state.numberOfCake)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Number Of Cake-{numberOfCake}</h2>
        <button onClick={()=>dispatch(buyCake())}>Click</button>
    </div>
  )
}

export default HooksCakeContainer