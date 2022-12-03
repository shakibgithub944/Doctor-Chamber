import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom'
import CheckOutForm from '../CheckOut/CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIP_KEY);



const Payment = () => {
    const booking = useLoaderData();
    const { treatment, Date, time, price } = booking
    return (
        <div>
            <h1 className='text-3xl'>Payment for <span className='text-primary'>{treatment}</span></h1>
            <p className="my-3">Please pay <strong>${price}</strong> for your appointment on {Date} at {time}</p>

            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                    booking={booking}
                    ></CheckOutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;