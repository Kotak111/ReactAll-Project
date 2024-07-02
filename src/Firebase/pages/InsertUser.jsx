import { addDoc, collection } from 'firebase/firestore';
import React from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase';

function InsertUser(props) {
    const{handleSubmit, register , formState: { errors }}=useForm();
    const history =useNavigate();
   async function adddata(data,evenet){
        evenet.preventDefault();
        await addDoc(collection(db,"user"),data)
        history("/view")
    }
    return (
        <>
        <div className="container">
           
            <div className=" shadow-lg mt-5 col-lg-6 mx-auto p-4 redi ">
                <form action="" method='post' onSubmit={handleSubmit(adddata)} >
                <h3 className='text-center hed'>Details Form</h3>
                    <div className='col-lg-6 mx-auto mt-3' >
                           <span className='dec ms-1'>Name :</span><input type="text" {...register("name" ,{required:"enter name"})} 
                           placeholder='enter name' className='form-control'/>
                           {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className='col-lg-6 mx-auto mt-3' >
                           <span className='dec ms-1'>Email :</span><input type="text" {...register("email")} placeholder='enter email' className='form-control'/>
                    </div>
                    <div className='col-lg-6 mx-auto mt-3' >
                           <span className='dec ms-1'>Mobile :</span><input type="text" {...register("mobile")} placeholder='enter mobile' className='form-control'/>
                    </div>
                    <div className='col-lg-6 mx-auto mt-3'>
                       
                        <div className="form-check text-center" >
                            <span className='dec '>Gender :</span>
                            <input type="checkbox" value="male" {...register("gender")}  /><span>Male</span>
                            <input type="checkbox" className='ms-3' value="female" {...register("gender")} /><span>Female</span>
                        </div>

                    </div>
                    <div className='col-lg-12  mt-3 text-center'>
                                <button className='btn btn-primary '>Add User</button>
                    </div>

                </form>
            </div>
        </div>
        </>
    );
}

export default InsertUser;
//addDoc(collection(db,"user"),data)