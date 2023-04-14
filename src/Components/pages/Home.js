import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Payment from '../Payment/Payment';
import Company from '../Company/Company';
import Service from '../Service/Service';

const Home = () => {
    return (
      <div className='bg-black'>
        <Banner></Banner>
        <About></About>
        <Payment></Payment>
        <Company></Company>
        <Service></Service>
      </div>
    );
};

export default Home;