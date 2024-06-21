import React from 'react'
import PropTypes from 'prop-types';

const BannerPage = ({headingPage}) => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 sm:px-4 flex flex-col md:flex-row my-20 bg-Contact-banner justify-center h-[300px] bg-no-repeat bg-cover bg-blend-color-burn bg-[#04040470]'>
                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1 '>
                <h1 className='text-3xl font-bold text-center text-[#ffffff]'>{headingPage}</h1>
                </div>
            </div>

        </>
    )
}

BannerPage.protoTypes={
    headingPage:PropTypes.string.isRequired,
};

export default BannerPage;
