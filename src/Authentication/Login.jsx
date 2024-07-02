
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login(props) {
    const [user,setUser]=useState();
    const {register, handleSubmit, formState: { errors }, }=useForm();
    const history=useNavigate();

    function submitdata(data){
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            setUser(userCredential.user.email)
            history("/logout")
         
        })
        .catch((error) => {
         console.log(error.message);
        });
    }
    return (
       <>
          <div className="container">
           
           <div className=" shadow-lg mt-5 col-lg-6 mx-auto p-4 redi ">
               <form action="" method='post' onSubmit={handleSubmit(submitdata)} >
               <h3 className='text-center hed'>Login Hear</h3>
               <div className='col-lg-6 mx-auto mt-3' >
                          <span className='dec ms-1'>Email :</span><input type="text" {...register("email",{required: {
                                value: true,
                                message: "Enter a Email"
                            },
                            pattern: {
                                value: /^[a-z0-9.-_]+@([a-z0-9.-_])+\.([a-z]{2,3})$/,
                                message: "Enter a vallid Email Address"
                            }})} placeholder='enter email' className='form-control'/>
                            {errors.email && <p>{errors.email.message}</p>}
                   </div>
                   
                   <div className='col-lg-6 mx-auto mt-3' >
                          <span className='dec ms-1'>Password :</span><input type="text" {...register("password" ,{required: {
                                value: true,
                                message: "Enter  password"
                            },
                            
                        })} 
                          placeholder='enter password' className='form-control'/>
                          {errors.password && <p>{errors.password.message}</p>}
                   </div>
                  
                   <div className='col-lg-12  mt-3 text-center'>
                               <button className='btn btn-primary w-50'>Login</button><br />
                               <Link to={"/"}>New User?</Link>
                   </div>
                            <p>{user}</p>
               </form>
           </div>
       </div>
       </>
    );
}

export default Login;