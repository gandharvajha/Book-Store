import React from 'react';
import Signup from './Signup';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';
const Login = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
            email:data.email,
            password:data.password

        }
       await axios.post("https://book-store-rb3c.onrender.com/user/login",userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                // toast.success("Login Successfully");
                toast.success('Login Successfully');
                    document.getElementById("my_modal_3").close();
                setTimeout(()=>{
                   
                    localStorage.setItem("Users",JSON.stringify(res.data));
                    <Navigate to="/"/>
                    window.location.reload();
                },3000)
               
            }
        }).catch((err)=>{
            if(err.response){
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
           
        })
      }
      
    return (
        <div>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box">
                    <form method="dialog"  onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-slate-900">✕</Link>
                           {/* Password */}
                    <h3 className="font-bold text-lg text-slate-900">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span  className='text-slate-900'>Email</span><br/>
                        <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })} />
                        <br/>
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span className='text-slate-900'>Password</span><br/>
                        <input type="text" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })}/>
                        <br/>
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                   <div className='flex justify-around mt-4'>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                    <p>Not Registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                   </div>
                    </form>
                 
                </div>
            </dialog>
        </div>
    )
}

export default Login;
