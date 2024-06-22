import React, { useEffect, useState } from 'react';
import Cards from "./Cards";
import {Link} from "react-router-dom";
import axios from 'axios';
import BannerPage from './BannerPage';

const Course = () => {
  const[book, setBook]=useState([]);
  useEffect(()=>{
    const getBook = async ()=>{
      try{
       const res=await axios.get("/book");
       console.log( res.data);
       setBook( res.data);
      }catch(error){
        console.log(error);
      }
    } 
    getBook()
  },[])
  return (
   <>
   <BannerPage headingPage="Prime Book"/>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div className='mt-28 items-center justify-center text-center'>

       <h1 className='text-2xl md:text-4xl'> Welcome to Our <span className='text-pink-500'>Prime Book</span></h1>
       <p className='mt-8'>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
       </p>
      <Link to="/">
      <button className='bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 duration-300 mt-6'>Back</button>
      </Link>
       </div>
       <div className='mt-12 grid grid-cols- md:grid-cols-2 xl:grid-cols-4'>
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
       </div>
      
    </div>
   </>
  )
}

export default Course;
