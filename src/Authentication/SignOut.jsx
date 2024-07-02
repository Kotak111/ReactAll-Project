import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';


function SignOut(props) {

    const history =useNavigate()

    function data(data){
        console.log(data);
        signOut(auth).then(() => {
           history("/signup")
          }).catch((error) => {
           alert(error)
          });
    }
    return (
       <>
            <button onClick={()=>data()}>logout</button>
       </>
    );
}

export default SignOut;