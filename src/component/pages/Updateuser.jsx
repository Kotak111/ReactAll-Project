import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function Updateuser(props) {
    const { register, handleSubmit, formState: { errors } , reset } = useForm();
    const [data, setData] = useState({})
    const { id } = useParams();
    const history=useNavigate();


    function show(){
        axios.get(`https://65f3d330105614e654a135e5.mockapi.io/api/user/${id}`)
        .then((res)=>{
            setData(res.data)
            reset(res.data)
        })
    }
    useEffect(()=>{
                show();
    },[])
        function  updatedata(changedata){
            const newdata={...data,...changedata}
            axios.put(`https://65f3d330105614e654a135e5.mockapi.io/api/user/${id}`,changedata)
            .then((res)=>{
                alert("data update")
                history("/")
            }).catch((err)=>{
                console.log(err);
            })

        }
    return (
       <>
        <div className="container">
           
           <div className=" shadow-lg mt-5 col-lg-6 mx-auto p-4 redi ">
               <form action="" method='post' onSubmit={handleSubmit(updatedata)} >
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
                               <button className='btn btn-warning '>Update User</button>
                   </div>

               </form>
           </div>
       </div>
       </>
    );
}

export default Updateuser;