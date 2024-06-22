import React from 'react';
import Cards from "./Cards";
import { useState,useEffect } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from 'axios';



const Freebook = () => {

    const[book, setBook]=useState([]);
    useEffect(()=>{
      const getBook = async ()=>{
        try{
         const res=await axios.get("/book");
         console.log( res.data);
         const data=res.data.filter((data) => data.category === "Free")
         setBook( data);
        }catch(error){
          console.log(error);
        }
      } 
      getBook()
    },[])

    // const filterData = list.filter((data) => data.category === "Free");
    

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 sm:px-4'>
                <div>
                    <h1 className='text-xl font-semibold pb-2 px-2 md:px-0'>Free Offered Courses</h1>
                    <p className='px-2 md:px-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quas labore porro molestias optio culpa nostrum reprehenderit quis veritatis earum!</p>
                </div>
                <div>
                    <Slider {...settings}>
                      {
                        book.map((item)=>(
                            <Cards item={item} key={item.id}/>
                        ))
                      }
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Freebook
