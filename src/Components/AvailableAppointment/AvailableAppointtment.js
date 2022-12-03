import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query'


const AvailableAppointtment = ({ selected }) => {
    const [treatment, setTreatment] = useState(null);

    const date = format(selected, 'PPPP');
    const { data: AppointmentOptions = [], isLoading, refetch } = useQuery({
        queryKey: ['AppointmentOptions', date],
        queryFn: () => fetch(`https://doctors-chamber-server.vercel.app/appointments?date=${date}`)
            .then(res => res.json())
    })

    // if(isLoading){
    //     return <p className='text-center'>Loading.....</p>
    // }


    return (
        <section className='my-16 max-w-[1440px] mx-auto'>
            <p className='text-secondary font-bold text-center my-5'><span className='text-primary'>Slected Date: </span>{format(selected, 'PPPP')}.</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    AppointmentOptions.map(appointmentOption => <div
                        key={appointmentOption._id}
                        className="card shadow-xl text-center my-6"
                    >
                        <div className="card-body ">
                            <h2 className="text-2xl text-secondary">{appointmentOption.name}</h2>
                            <p>{appointmentOption.slots.length ? appointmentOption.slots[0] : 'Try Another Day'}</p>
                            <p>{appointmentOption.slots.length} {appointmentOption.slots.length > 0 ? 'Spaces' : 'Space'} Availabel.</p>
                            <p className='font-bold'>Price: $ {appointmentOption.price}</p>
                            <div className="card-actions justify-center">
                                <label
                                    disabled={appointmentOption.slots.length === 0}
                                    htmlFor="booking-modal"
                                    className="btn capitalize btn-primary bg-gradient-to-r from-secondary to-primary text-white"
                                    onClick={() => setTreatment(appointmentOption)}
                                >Get Appointment</label>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selected={selected}
                    setTreatment={setTreatment}
                    refetch={refetch}
                >
                </BookingModal>
            }
        </section>
    );
};

export default AvailableAppointtment;