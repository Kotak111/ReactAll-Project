import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleProduct() {

    const [user, setUser] = useState([]);
    const { id } = useParams();

    async function show() {
        await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setUser(res.data)
        })
    }
    useEffect(() => {
        show();
        console.log(id);

    }, [])
    return (
        <>
            <div className="card" >
  <img src={user.image} className="card-img-top img-fluid mx-auto" alt="..." style={{width:"200px"}}/>
  <div className="card-body">
    <h5 className="card-title">Title : {user.title}</h5>
    <h5 className="card-title">Price :{user.price}</h5>
    <p className="card-text"><span style={{fontWeight:"bold"}}>description: </span>{user.description}</p>
    <h5 className="card-title">category :{user.category}</h5>
    
  </div>
</div>
            <h1>hello</h1>
        </>
    );
}

export default SingleProduct;