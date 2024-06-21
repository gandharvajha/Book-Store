import React from 'react';
import aboutImage from "../../public/about-img.png";

const AboutusDetails = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 sm:px-4 flex flex-col md:flex-row my-20'>
        <div className=''>
        <div className='flex flex-col md:flex-row md:space-x-4'>
            <div className='w-full md:w-2/5'><img src={aboutImage} alt="" /></div>
            <div className='w-full md:w-3/5'>
                <h1 className='text-3xl font-bold text-center'>Who Are We?</h1>
               <p className='mt-5 px-2 md:px-0'>
               Welcome to BookStore, where our passion for literature drives us to deliver an exceptional reading experience. Our journey is rooted in a commitment to meticulous research and the creation of captivating narratives. At BookStore, we strive to educate, inspire, and entertain our readers through a carefully curated selection of books.
               </p><br/>
                <p className='px-2 md:px-0'>
                Each book we offer is an invitation to embark on a transformative journey. Whether you are exploring new ideas, seeking inspiration, or escaping into the realms of fiction, our collection promises to enrich your reading experience.
                </p><br/>
                <p className='px-2 md:px-0'>
                We uphold values of integrity and authenticity in every aspect of our work. From selecting thought-provoking titles to engaging with our community of readers, our goal is to foster meaningful connections and exceed expectations.
                </p><br/>
                <p className='px-2 md:px-0'>
                Explore BookStore and uncover the essence of literature like never before. Immerse yourself in stories that transcend time and place, where each book serves as a gateway to new perspectives and adventures. Join us in a world where the written word comes alive, and where every page turned offers a chance to discover something extraordinary.
                </p>

            </div>
        </div>
        <p className='mt-10 px-2 md:px-0'>
        Discover BookStore and immerse yourself in the essence of literature like never before. Dive into stories that transport you across time and place, where each page offers an opportunity to explore new perspectives and discover the extraordinary.
        </p>
        <p className='px-2 md:px-0'>
        Welcome to BookStore, where every book tells a story and enriches lives through the power of reading.
        </p>
        </div>
    </div>

</>
  )
}

export default AboutusDetails
