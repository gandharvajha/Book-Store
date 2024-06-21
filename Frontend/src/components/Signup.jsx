import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Login from "./Login";
import { useForm } from "react-hook-form"
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Signup = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password

        }
       await axios.post("https://book-store-rb3c.onrender.com/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success("Signup Successfully");
                <Navigate to="/"/>;
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user));
        }).catch((err)=>{
            if(err.response){
                toast.error("Error: " + err.response.data.message);
            }
           
        })
      }
  return (
   <>
    <div className='flex h-screen items-center justify-center'>
          <div  className="w-[600px]">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-slate-900">✕</Link>

                             {/* Password */}
                    <h3 className="font-bold text-lg text-slate-900">Signup</h3>
                    <div className='mt-4 space-y-2'>
                        <span text-slate-900>Name</span><br/>
                        <input type="text" placeholder='Enter Your fullname' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("fullname", { required: true })}/>
                        <br/>
                        {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span text-slate-900>Email</span><br/>
                        <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })}/>
                        <br/>
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span text-slate-900>Password</span><br/>
                        <input type="text" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })}/>
                        <br/>
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                   <div className='flex justify-around mt-4'>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                    <p className='text-md'>Have Account?{" "}<button className='underline text-blue-500 cursor-pointer'  onClick={()=>document.getElementById('my_modal_3').showModal()}>Login </button>{" "}<Login/></p>
                   </div>
                    </form>
               
                </div>
            </div>
    </div>
    </>
  )
}

export default Signup
