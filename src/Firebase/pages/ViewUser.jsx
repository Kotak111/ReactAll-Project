import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { collection, deleteDoc, deleteField, doc, onSnapshot, query ,updateDoc,where } from 'firebase/firestore';
import { db } from '../../../firebase';

function ViewUser(props) {
    const [user,setUser]=useState([]);
 
    async function show(data){
       

        const q = query(collection(db, "user"));
        const unsubscribe = onSnapshot(q, (arr) => {
          const datanew = [];
          arr.forEach((doc) => {
              datanew.push({...doc.data(),id:doc.id});
              setUser(datanew)
              
          });
        });
    }
    async function trash(id){
        if(confirm("are you sure want to delete")){
            await deleteDoc(doc(db,"user",`${id}`)) 
           
            show();

alert(id)
        }
    }
    useEffect(()=>{
            show();
    },[])
    return (
        <>
        <Link to={"/insert"}><button className='btn btn-primary mt-5 ms-5'>Add User</button></Link>
      
      <div className="container">

          {
               user?.length > 0 ?
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
                              user.map((items,index)=>(
                                      <tr>
                                          <td>{index + 1}</td>
                                          <td>{items.name}</td>
                                          <td>{items.email}</td>
                                          <td>{items.mobile}</td>
                                          <td>{items.gender}</td>
                                          <td><Link className='btn btn-danger' onClick={()=>trash(items.id)}>Delete</Link>
                                          <Link className='btn btn-primary ms-1' to={`/singleuser/${items.id}`} >SingleUser</Link>
                                          <Link className='btn btn-success ms-1' to={`/edit/${items.id}`} >Edit</Link></td>
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
    )
    }

    
export default ViewUser;