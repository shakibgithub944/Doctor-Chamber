import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <section
            className='mt-16'
            style={{
                background: `url(${footer})`,
                backgroundSize:'cover',
                backgroundPosition:'center'
            }}
        >
            <div className=' ml-10 lg:flex items-start justify-around'>
                <div className='mb-12'>
                    <h1 className='text-accent font-bold'>SERVICES</h1>
                    <div className="text-accent">
                        <p>Emergency Checkup</p>
                        <p>Monthly Checkup</p>
                        <p>Weekly Checkup</p>
                        <p>Deep Checkup</p>
                    </div>
                </div>
                <div className='mb-12'>
                    <h1 className='text-accent font-bold'>ORAL HEALTH</h1>
                    <div className="text-accent">
                        <p>Chavity filling</p>
                        <p>Fluoride Treatment</p>
                        <p>Deep Whiting</p>
                    </div>
                </div>
                <div  className='mb-12'>
                    <h1 className='text-accent font-bold'>OUR ADDRESS</h1>
                    <p className="text-accent">New-Yourk 10101-Housdon</p>
                </div>
            </div>

            <div>
                <p className='text-center text-sm'>Copyright 2022 All Rights Reserved Doctor Chamber</p>
            </div>
        </section>
    );
};

export default Footer;