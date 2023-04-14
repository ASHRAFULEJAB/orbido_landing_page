import React from 'react';
import payment from '../assets/Group 481775.png'
import icon from '../assets/Group (1).png';
import icon2 from '../assets/Polygon 2.png';
import icon3 from '../assets/Polygon 3.png';
import icon4 from '../assets/Polygon 4.png';
import icon5 from '../assets/Group 481724appstore.png';
import icon6 from '../assets/Group 481725googleplay.png';
import './Payment.css'
const Payment = () => {
    return (
        <div className='lg:w-[80%] w-[90%] mx-auto block lg:flex lg:flex-row  items-center justify-between lg:mb-[182px] mb-[30px]'>
            <div>
                <div className='lg:w-[227px] w-[90%]  payment lg:ml-[210px]'>
                    <div className='pament-child1'>
                        <img src={payment} alt="" />
                        <div className='child1'>
                            <h3>Paypal</h3>
                            <p>Checkout</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mb-[19px]'>
                        <div className='child2'>
                            <p><span>Total </span><br />$210</p>
                        </div>
                        <div className='child3'>
                            <button>Change</button>
                        </div>
                    </div>
                    <div className='child4 flex justify-center'>
                        <button>Make Payment</button>
                    </div>
                </div>
                <div className='payment-2'>
                    <h3>Last Transaction</h3>
                    <div className='flex justify-between items-center mt-[32px] mb-[20px]'>
                        <div className='payment-2-child1 flex'>
                            <img src={icon} alt="" />
                            <div className='payment-2-child2 ml-[12px]'>
                                <h3>Dribbble Pro</h3>
                                <p>15 Days ago</p>
                            </div>
                        </div>
                        <div className='payment-2-child3 flex items-center'>
                            <img src={icon2} alt="" />
                            <p>-$250,93</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mb-[20px]'>
                        <div className='payment-2-child1 flex'>
                            {/* {/* the icon is not downloading so i have use placeholder image */}
                            <img src='https://via.placeholder.com/40x40.png' alt="" />
                            <div className='payment-2-child2 ml-[12px]'>
                                <h3>Netflix</h3>
                                <p>4 Days ago</p>
                            </div>
                        </div>
                        <div className='payment-2-child3 flex items-center'>
                            <img src={icon3} alt="" />
                            <p>-$250,93</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mb-[20px]'>
                        <div className='payment-2-child1 flex'>
                            {/* the icon is not downloading so i have use placeholder image */}
                            <img src='https://via.placeholder.com/40x40.png' alt="" />
                            <div className='payment-2-child2 ml-[12px]'>
                                <h3>Manulife Cash</h3>
                                <p>4 Days ago</p>
                            </div>
                        </div>
                        <div className='payment-2-child3 flex items-center'>
                            <img src={icon4} alt="" />
                            <p>-$250,93</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='billing lg:w-[470px] w-[100%]'>
                <h1>Easily control your <br /> billing & invoicing.</h1>
                <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                
                <div className='flex items-center justify-start'>
                    <img className='mr-[32px]' src={icon5} alt="" />
                    <img src={icon6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Payment;