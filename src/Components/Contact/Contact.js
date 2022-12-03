import React from 'react';
import Button from '../../common/Button/Button';
import appintment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className=' mt-16 lg:grid grid-cols-3 gap-4'
            style={{
                background: `url(${appintment})`
            }}
        >
            <div></div>

            <div className='text-center p-5 mt-10'>
                <div className="mb-10">
                    <h1 className='text-secondary font-bold'>Contact Us</h1>
                    <p className='text-white text-3xl'>Stay connect with us</p>
                </div>
                <form className='mb-10'>
                    <div>
                        <input type="text" placeholder="Email Address" className="input input-bordered input-md w-full mb-5 " />
                        <input type="text" placeholder="Subject" className="input input-bordered input-md w-full mb-5" />
                        <textarea className="textarea input-bordered w-full mb-10" placeholder="Your Message"></textarea>
                    </div>
                    <Button>Contact us</Button>
                </form>
            </div>


            <div></div>
        </section>
    );
};

export default Contact;