import React from 'react';
import './About.css'
import icon from '../assets/Group 481727rewards.png';
import icon2 from '../assets/Group 481744secuerd.png';
import icon3 from '../assets/Group 481745balance.png';

const About = () => {
    return (
        <div className='lg:w-[80%] mx-auto about'>
            <div className='about-info'>
                <h1>You do the business, we’ll handle the money.</h1>
                <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <button>Get Started</button>
            </div> 
            <div className='about-info-2'>
                <div className='about-info-2-child'>
                    <div className='mr-[20px]'>
                         <img src={icon} alt="" />
                    </div>
                    <div className='Rewards'>
                        <h3>Rewards</h3>
                        <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                    </div>
                </div>
                <div className='about-info-2-child-Secured'>
                    <div className='mr-[20px]'>
                         <img src={icon2} alt="" />
                    </div>
                    <div className='Rewards'>
                        <h3>100% Secured</h3>
                        <p>We take proactive steps make sure your information and transactions are secure.</p>
                    </div>
                </div>
                <div className='about-info-2-child'>
                    <div className='mr-[20px]'>
                         <img src={icon3} alt="" />
                    </div>
                    <div className='Rewards'>
                        <h3>Balance Transfer</h3>
                        <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;