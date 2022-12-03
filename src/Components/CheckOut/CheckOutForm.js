import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ booking }) => {
    const [paymentError, setPaymentError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transectionId, setTransectionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    
    const { price, email, patient, _id } = booking;

    useEffect(() => {

        fetch("https://doctors-chamber-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },

            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error.message);
            setPaymentError(error.message);
            return;

        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentError('')
        }

        setSuccess('')
        setProcessing(true)


        const { paymentIntent, errorConfirm } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email,
                    },
                },
            },
        );
        if (errorConfirm) {
            setPaymentError(errorConfirm.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                bookingId: _id,
                price,
                email,
                transectionId: paymentIntent.id
            }
            fetch('https://doctors-chamber-server.vercel.app/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setSuccess('Congratulations , Your payment done.')
                        setTransectionId(paymentIntent.id)
                    }

                })

        }
        setProcessing(false)


    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-primary btn-sm mt-5'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{paymentError}</p>
            {
                success &&
                <>
                    <p className='text-green-600 font-bold'>{success}</p>
                    <p className='font-bold'>transectionId:{transectionId}</p>
                </>
            }
        </>
    );
};

export default CheckOutForm;