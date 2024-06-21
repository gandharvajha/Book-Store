import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Contactinfo = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const contactdetails = {
            fullname: data.fullname,
            email: data.email,
            message: data.message,
        };

        try {
            const res = await axios.post("https://book-store-rb3c.onrender.com/user/contact", contactdetails);
            console.log(res.data);
            toast.success("Thank you for contacting us!");
        } catch (err) {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
        }
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 sm:px-4 flex flex-col md:flex-row my-20'>
                <div>
                    <div className='flex flex-col md:flex-row md:space-x-4'>
                        <div className='w-full md:w-1/2'>
                            <h1 className='text-2xl font-bold md:px-0 px-2'>Contact us</h1>
                            <p className='my-2 md:px-0 px-2'>
                            Welcome to BookStore, where your reading journey begins! We are dedicated to helping you find the books you love and ensuring a delightful shopping experience. Whether you have a question, a suggestion, or need assistance with your order, we are here to help.
                            </p>
                            <div className='mt-4'>
                                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 md:px-0 px-2'>
                                    <input 
                                        type="text" 
                                        placeholder='Enter Your Name' 
                                        className='w-96 px-3 py-1 border rounded-md outline-none' 
                                        {...register("fullname", { required: true })} 
                                    />
                                    {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}

                                    <input 
                                        type="email" 
                                        placeholder='Enter Your Email' 
                                        className='w-96 px-3 py-1 border rounded-md outline-none' 
                                        {...register("email", { required: true })} 
                                    />
                                    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                                    <textarea 
                                        rows="4" 
                                        cols="50" 
                                        placeholder='Write Your Message' 
                                        className='w-96 px-3 py-1 border rounded-md outline-none' 
                                        {...register("message", { required: true })} 
                                    />
                                    {errors.message && <span className='text-sm text-red-500'>This field is required</span>}

                                    <input 
                                        type="submit" 
                                        className='bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 duration-300 mt-6 w-96' 
                                    />
                                </form>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.724967906425!2d77.30486787399018!3d28.45770609200098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce76a3d1afaef%3A0x2581b5ca1277451d!2sNHPC%20Chowk%20metro%20station!5e0!3m2!1sen!2sin!4v1718346072941!5m2!1sen!2sin" 
                                style={{ width: "100%", height: "450px" }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contactinfo;
