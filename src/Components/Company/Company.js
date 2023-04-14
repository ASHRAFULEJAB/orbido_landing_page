import React from 'react';
import icon1 from '../assets/Vector (3).png';
import icon2 from '../assets/path16.png';
import icon3 from '../assets/Vector (4).png';
import icon4 from '../assets/Group 481737.png';

const Company = () => {
    return (
        <div className='flex lg:flex-row flex-col justify-between items-center w-[80%] mx-auto'>
            <img className='lg:mb-0 mb-4' src={icon1} alt="" />
            <img className='lg:mb-0 mb-4' src={icon2} alt="" />
            <img className='lg:mb-0 mb-4' src={icon3} alt="" />
            <img className='lg:mb-0 mb-4' src={icon4} alt="" />
        </div>
    );
};

export default Company;