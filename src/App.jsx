import React from 'react'
import './App.css'
import { useReducer } from "react"

const countReducer = (state, action)=>{
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
      break;
    case 'decrement':
      return {count: state.count - 1}
      break;
    default:
      break;
  }
}


function App() {
	const [state, dispatch] = useReducer(countReducer, { count: 0 })

	const increment = ()=>{
	dispatch({type: 'increment'})
	}

	const decrement = ()=>{
	dispatch({type: 'decrement'})
	}
  

  return (
    <>
	<div>
		<h1>Count</h1>
		<p> { count } </p>
		<button onClick={increment}> + </button>
		<button onClick={decrement}> - </button>
	</div>
	</>
  )
}

export default App
