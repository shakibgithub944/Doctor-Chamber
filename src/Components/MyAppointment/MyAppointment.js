import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/AuthProvider';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `https://doctors-chamber-server.vercel.app/bookings?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }

    })

    return (
        <div>
            <h3 className='text-3xl mb-3'>My Appointment</h3>

            <div className="overflow-x-auto">
                <table className="table w-full text-center">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr
                                key={i}
                                className="hover"
                            >
                                <th>{i + 1}</th>
                                <td>{booking.patiant}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.Date}</td>
                                <td>{booking.time}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-primary btn-sm'>Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <Link
                                            to={``}>
                                            <button className='text-green-500 font-bold'>Paid</button>
                                        </Link>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;