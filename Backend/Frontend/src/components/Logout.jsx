import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Logout = () => {
  const[authUser,setAuthUser]=useState();
  const handleLogout=()=>{
    try{
      setAuthUser(
        {
          ...authUser,
          User:null
        }
      )
      localStorage.removeItem("Users");
      toast.success("Logout successfully");   
      setTimeout(()=>{     
        window.location.reload();
    },3000)
    }catch(error){

      toast.error("Error: " + error);
      setTimeout(()=>{     
    },3000)
    }
  } 
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout;
