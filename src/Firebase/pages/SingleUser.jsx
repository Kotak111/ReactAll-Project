import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebase';


function SingleUser(props) {
    const [user, setUser] = useState([]);
    const { id } = useParams();
    async function show() {

        const docRef = doc(db, "user", id);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data())
        setUser(docSnap.data())

        // if (docSnap.exists()) {
        //   console.log("Document data:", docSnap.data());
        //   setUser(docSnap)
        // } else {
        //   // docSnap.data() will be undefined in this case
        //   console.log("No such document!");
        // }
    }
    useEffect(() => {
        show();
        console.log(id);
    }, [])
    return (
        <>
            <div className="card" >
                <img src="" className="card-img-top img-fluid mx-auto" alt="..." style={{ width: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title">name : {user.name}</h5>
                    <h6 className="card-title">email :{user.email}</h6>
                    <p className="card-text">mobile:{user.mobile}</p>
                    <h5 className="card-title">gender :{user.gender}</h5>

                </div>
            </div>
        </>
    );
}

export default SingleUser;