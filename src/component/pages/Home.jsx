import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link,  } from 'react-router-dom';



function Home(props) {

    const [user,setUser]=useState([]);
    const [searchItem,setSearchItem]=useState("");
    async function show(){
            await axios.get("https://65f3d330105614e654a135e5.mockapi.io/api/user")
            .then((res)=>{
                setUser(res.data)
            })
    }
    function trash(id){
        if(confirm("are you sure want to delete this items")){
            axios.delete(`https://65f3d330105614e654a135e5.mockapi.io/api/user/${id}`)
            .then(()=>{
                show();
                console.log(id);
            })
            
        }
    }
   

    useEffect(()=>{
            show();
    },[])
    return (
        <>
        <Link to={"/adduser"}><button className='btn btn-primary mt-5 ms-5'>Add User</button></Link>
        <div className="col-md-6 mx-auto">
            <input type="search" className='form-control my-5 ' onChange={e=>{setSearchItem(e.target.value)}} placeholder='enter email id'  />
        </div>
        <div className="container">

            {
                 user.length > 0 ?
                 (
                    <table className='table table-hover table-bordered text-center mt-5'>
                    <thead>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            user?.length > 0 ? (
                                user.filter((items)=>{
                                    if(searchItem === ""){
                                        return items;
                                    }
                                    else if(items.email.toLowerCase().includes(searchItem.toLowerCase())){
                                        return items;
                        }

                                }).map((items,index)=>(
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{items.name}</td>
                                            <td>{items.email}</td>
                                            <td>{items.mobile}</td>
                                            <td>{items.gender}</td>
                                           <td>
                                           <button className="btn btn-danger" onClick={() => trash(items.id)}>delete</button>
                                           <Link to={`/showuser/${items.id}`} className='btn btn-success ms-2'>ShowUser</Link>
                                           <Link to={`/updateuser/${items.id}`} className='btn btn-warning ms-2'>UpdateUser</Link>
                                           </td>
                                        </tr>
                                    ))
                         ) : 
                         (
                            <th colSpan={5} className='text-center bg-primary'>hello</th>
                         )
                        }
                    </tbody>
    
                </table>
            
                )
                :
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

export default Home;