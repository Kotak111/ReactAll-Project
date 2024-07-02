
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


function SignUp(props) {
    const [user,setUser]=useState();
    const {register, handleSubmit, formState: { errors }, }=useForm();
    const history=useNavigate();
    function dataSubmit(data){
        console.log(data);
//     console.log(data);
//         signInWithEmailAndPassword(auth, data.email, data.password)
//   .then((userCredential) => {
//     alert(userCredential.user.email)
//     console.log(userCredential.user.email);
//     setUser(userCredential.user.email)
//     const user = userCredential.user;
//     history("/login")
    
 
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
  createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    alert(userCredential.user.email)
    console.log(userCredential.user.email);
    setUser(userCredential.user.email)
    alert("done")
    history("/login")

  })
  .catch((error) => {
    console.log(error.message);
  });

    }
    return (
        <>
        <div className='col-6 mx-auto  shadow-lg p-5 main' >
                <h2 className='text-center main mt-4'>Registration Form</h2>
                <form action="" method='post' onSubmit={handleSubmit(dataSubmit)}>
                    {/* <div className='mt-4'>
                        <h6 className='text-center dec' >Your Name : </h6> <input type="text" {...register("name", {
                            required: "Please Enter a Name"
                        })} className='form-control w-50 mx-auto' placeholder='Enter Your Name' autoFocus />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div> */}
                    <div className='mt-4'>
                        <h6 className='text-center dec' >Your email : </h6> <input type="text" {...register("email", {
                            required: {
                                value: true,
                                message: "Enter a Email"
                            },
                            pattern: {
                                value: /^[a-z0-9.-_]+@([a-z0-9.-_])+\.([a-z]{2,3})$/,
                                message: "Enter a vallid Email Address"
                            }
                        })} className='form-control w-50 mx-auto' placeholder='Enter Your Email' />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className='mt-4'>
                        <h6 className='text-center dec' >Your  passwors. :</h6> <input type="password" {...register("password", {
                            required: {
                                value: true,
                                message: "Enter a password"
                            },
                            

                        })} className='form-control w-50 mx-auto' placeholder='Enter password' />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    {/* <div className='mt-4'>
                        <h6 className='text-center dec' >Your city :</h6>  <select id="disabledSelect"
                            className="form-select w-50 mx-auto" {...register("city", {
                                required: "plese enter a city"
                            })} >
                            <optgroup label='Your City'>
                                <option>Surat</option>
                                <option value="junagadh">Junagadh</option>
                                <option value="rajkot">Rajkot</option>
                                <option value="ahamedabad">Ahmedabad</option>
                            </optgroup> </select>
                        {errors.city && <p>{errors.city.message}</p>}
                    </div> */}
                  
                    <div className='mt-4'>
                        <button className='btn btn-primary w-50 yes'  >Register Now</button><br /><br />
                        <Link to={"/login"}className='yes ' >All ready Register?please click and login</Link>

                    </div>

                </form>
            </div>
        </>
    );
}

export default SignUp;