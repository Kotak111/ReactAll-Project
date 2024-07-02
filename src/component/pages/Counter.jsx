import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter(props) {
    const dispatch = useDispatch();
    const counter= useSelector(data=>data)
    return (
        <>
        <div className="container">
        <button className='btn btn-primary' onClick={()=>dispatch({type:"inc"})}>+</button>
        <h1>{counter}</h1>
        <button className='btn btn-danger' onClick={()=>dispatch({type:"dec"})}>-</button>
        </div></>
    );
}

export default Counter;