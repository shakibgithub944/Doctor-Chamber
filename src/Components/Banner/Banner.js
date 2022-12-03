import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import clockIcon from '../../assets/icons/clock.svg'
import locationIcon from '../../assets/icons/marker.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import Button from '../../common/Button/Button';

const Banner = () => {

    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='relative'>
                <img src={bg} alt="" className='w-full h-full absolute  ' />
                <div className="hero  min-h-[90vh]" >
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} className="lg:max-w-lg rounded-lg" alt='' />
                        <div>
                            <h1 className="text-5xl font-bold text-accent">Your New Smile Start Here</h1>
                            <p className="py-6 pr-5 text-accent">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                           <Button>Get Start</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='p-6 rounded-xl lg:flex items-center justify-evenly bg-gradient-to-r from-secondary to-primary text-white'>
                    <img src={clockIcon} alt="" className='mx-auto mb-8 lg:m-0'/>
                    <div className=''>
                        <h1 className='font-bold mb-3'>Openig Hours</h1>
                        <p>Morning Time is useful to our health,</p>
                    </div>
                </div>


                <div className='p-6 rounded-xl lg:flex items-center justify-evenly bg-accent text-white'>
                    <img src={locationIcon} alt="" className='mx-auto mb-8 lg:m-0' />
                    <div className='p-6'>
                        <h1 className='font-bold mb-3'>Openig Hours</h1>
                        <p>Morning Time is useful to our health,</p>
                    </div>
                </div>
                <div className='p-6 rounded-xl lg:flex items-center justify-evenly bg-gradient-to-r from-secondary to-primary text-white'>
                    <img src={phoneIcon} alt="" className='mx-auto mb-8 lg:m-0'/>
                    <div className='p-6'>
                        <h1 className='font-bold mb-3'>Openig Hours</h1>
                        <p>Morning Time is useful to our health,</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;