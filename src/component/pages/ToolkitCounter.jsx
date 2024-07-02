import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inc } from '../reduxToolkit/CounterSlice';
function ToolkitCounter(props) {
    const dispatch=useDispatch();
    const  {no1}=useSelector((state)=>state.counter)
    // console.log(no1);
    return (
        <>
        <div className="container">
            <button className='btn btn-primary'
            
            
            
            onClick={() => dispatch(inc())}> + </button>
            <span>{no1}</span>
            <button className='btn btn-danger'>-</button>
        </div>
        </>
    );
}

export default ToolkitCounter;