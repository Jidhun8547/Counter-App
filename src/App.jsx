

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './Redux/counterSlice';











function App() {

 const {count} =useSelector(state=>state.counterReducer)
//  
 const dispatch=useDispatch()
//  state creation
const [amount,setAmount ]=useState("")
// 
const handleIncrementByAmounr=()=>{
   if(amount){
    dispatch(incrementByAmount(parseInt(amount)))
   }
  else{
    alert('please enter text field')
  }
}
  return (
    <>
      <div className="bg-dark text-white d-flex flex-column align-items-center justify-content-center min-vh-100 p-4">
        {/* Header Outside the Box */}
        <h1 className="mt-5">Counter App</h1>
        
        {/* Box for Counter */}
        <div
          className="bg-dark text-white p-4 rounded shadow text-center border border-white"
          style={{ width: '600px' }}
        >
          {/* Display Number */}
          <h1 className="display-4 fw-bold">{count}</h1>
          
          {/* Display Buttons */}
          <div className="my-3 d-flex align-items-center justify-content-around">
            <button onClick={()=>dispatch(increment())} className="btn btn-warning mx-2">Increment</button>
            <button onClick={()=>dispatch(reset())} className="btn btn-danger mx-2">Reset</button>
            <button onClick={()=>dispatch(decrement())} className="btn btn-success mx-2">Decrement</button>
          </div>
          
          {/* Input Field and Button */}
          <div className="mt-3 d-flex justify-content-around">
            <input  value={amount} onChange={(e)=>setAmount(e.target.value)}
              type="number" 
              className="form-control "
              placeholder="Increment by amount" 
            />
            <button onClick={handleIncrementByAmounr} className="btn btn-primary ms-3">Increment by Amount</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

