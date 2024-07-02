import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function GoogleUth(props) {
  const history=useNavigate();
    function data(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)

        .then((result) => {
         
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(token);
          history("/success")

        
     
       
        }).catch((error) => {
          console.log(error.code);
       
        });
    }
    return (
       <>
       <div className="container my-5">
       <h1>google auth</h1>
     <button onClick={()=>data()} className='btn btn-primary my-5'>click with google auth</button>
     </div>
       </>
    );
}

export default GoogleUth;