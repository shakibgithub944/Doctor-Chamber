import React, { useContext } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/AuthProvider';

const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    const { user } = useContext(AuthContext);

    const handleFormSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const date = form.date.value;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            treatment: treatmentName,
            Date: date,
            time: slot,
            patiant: name,
            phone,
            email,
            price
        }
        fetch('https://doctors-chamber-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Appointment Confirmed')
                    refetch()
                }
                else {
                    setTreatment(null)
                    toast.error(`You have already booked on ${booking.Date}`)
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    {
                        user?.email ? <>
                            <h3 className="text-lg font-bold my-1">{treatmentName}</h3>
                            <form onSubmit={handleFormSubmit} className='grid grid-cols-1 gap-3 mt-8' >
                                <input type="text" name='date' value={format(selected, 'PPPP')} className="input input-bordered w-full bg-slate-200" disabled />

                                <select name='slot' className="select bg-slate-200 select-bordered w-full">
                                    {
                                        slots.map((slot, idx) => <option key={idx} value={slot} >{slot}</option>)
                                    }
                                </select>

                                <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered w-full " disabled />
                                <input type="email" name='email' defaultValue={user?.email} className="input input-bordered w-full " disabled />
                                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />
                                <input type="submit" className='bg-accent input input-bordered w-full text-white' />
                            </form>
                        </>
                            :
                            <button>To get appointment ? <Link to='/login' className='text-secondary'>Please Login First.</Link></button>
                    }

                </div>
            </div>
        </div>
    );
};

export default BookingModal;