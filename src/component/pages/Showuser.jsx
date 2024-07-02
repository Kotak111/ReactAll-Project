import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./index.css"
import axios from 'axios';

function Showuser(props) {
    const [user,setUser]=useState([]);
    const {id}=useParams();
    async function show(){
            await axios.get(`https://65f3d330105614e654a135e5.mockapi.io/api/user/${id}`)
            .then((res)=>{
                setUser(res.data)
            })
    }
    useEffect(()=>{
            show();
    },[])
    return (
       <>

       <div className="container">
        <h2 className='text-center bg-primary mt-5'>Your details</h2>
       <div className="card " >
       <img src="/data.jpg" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name: {user.name}</h5>
    <h5 className="card-title">Email : {user.email??"no data"}</h5>
    <h5 className="card-title">Mobile : {user.mobile??"no data"}</h5>
    <h5 className="card-title">Gender : {user.gender??"no data"}</h5>

  </div>
</div>
       </div>
            <div className='text-center mt-5'> 
       <Link to={"/"} className='btn btn-primary text-center'>Back</Link>
      </div>
       </>
    );
}

export default Showuser;