import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function AdminProject(props) {

        const [data,setData]=useState();
        function  show(data){
                axios.get("https://fakestoreapi.com/products",data).then((res)=>{
                        // console.table(res.data);
                        setData(res.data)
                }).catch((err)=>{
                    console.log(err);
                })
        }

        useEffect(()=>{
            show();
        },[])

    return (
        <>
         <div className='shadow-lg w-100 mt-5 p-3'>
            <div className='d-flex ms-5 '>
                <label htmlFor="" className='ms-1 mt-1'>Filter :</label>
            <input  type="search" name="" id=""  className='form-control w-25 ms-2' placeholder='type String....'/><i className="fa-solid fa-filter-circle-xmark ms-2 mt-2" style={{fontSize:"25px"}} ></i></div>
        {
            data?.length > 0 ?
             (
                <div className="container ">
                    <div className='table-responsive'>
                   
                    <table className='table table-striped  text-center mt-5  table-responsive' style={{width:"auto"}}>
                        <thead>
                        <th className='btn btn-primary ' >-</th>
                        <th>id</th>
                       
                        <th>title <span className='ms-5'><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                        <th style={{width:"80px"}}>price<span className=''><i class="fa-solid fa-arrow-up" style={{fontSize:"10px"}}></i><i class="fa-solid fa-arrow-down" style={{fontSize:"10px"}}></i></span></th>
                        <th>description<span className='ms-5'><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                        <th className='w-25'>category<span className='ms-5'><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down" ></i></span></th>
                        <th>image</th>
                   
                        <tr>
                            <td></td>
                            <td></td>
                            <td><input type="text" className='form-control' /></td>
                            <td><input type="text" className='form-control'/></td>
                            <td><input type="text" className='form-control'/></td>
                            <td><input type="text" className='form-control'/></td>
                            <td><input type="file" name="" id="" className='form-control'/></td>
                            <td></td>
                        </tr>
                        </thead>

                        <tbody>
                            {
                                data?.length > 0 ?(
                                        data.map((items)=>(
                                            <tr>
                                                <td><input type="checkbox" name="" id="" style={{cursor:"pointer",width:"1rem",height:"2rem"}} /></td>
                                                <td>{items.id}</td>
                                                <td>{items.title}</td>
                                                <td>{items.price}</td>
                                                <td>{items.description}</td>
                                                <td>{items.category}</td>
                                                <td><img src={items.image} alt="" style={{width:"100px", height:"100px"}} /></td>
                                                <td><NavLink to={`/singleproduct/${items.id}`} className='btn btn-outline-primary mt-4'>Show</NavLink></td>
                                            </tr>
                                        ))
                                ):
                                (
                                    <th>no data found</th>
                                )
                            }
                        </tbody>

                    </table></div></div>
               
             )  :
            (
                <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
            )
        }
         </div>
        </>
    );
}

export default AdminProject;