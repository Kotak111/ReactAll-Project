import React, { useEffect } from 'react';
import { auth } from '../../firebase';

function Sucees(props) {
    const user = auth.currentUser;

      function show(){
         if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
}
  

  useEffect(()=>{
    show()
  },[])
    }
    return (
       <>
      <div className="container mx-auto mt-5 bg-dark text-white p-5">
        <h1> User Id :- {user.uid}</h1>
        <h1> User Name :- {user.displayName}</h1>
        <h1>User Email :- {user.email}</h1>
       <h1>User Profile Image :- <img src={user.photoURL} alt="" /></h1>

        </div>

       </>
    );
}

export default Sucees;