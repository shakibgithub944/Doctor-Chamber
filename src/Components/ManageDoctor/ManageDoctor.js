import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ManageDoctor = () => {

    const { data: doctors = [], refetch, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://doctors-chamber-server.vercel.app/doctors', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data
        }
    })

    const handleDeleteDoctor = (id) => {
        const deleteDoctor = window.confirm('Are you sure ?')
        if (deleteDoctor) {
            fetch(`https://doctors-chamber-server.vercel.app/doctor/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch()
                        toast.success('Doctor Deleted')
                    }
                })
        }


    }


    return (
        <div>
            <h1 className="text-3xl mb-3">Manage Doctors: {doctors?.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr
                                key={i}
                                className="hover"
                            >
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={doctor.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.speciality}</td>
                                <td><button onClick={() => { handleDeleteDoctor(doctor._id) }} className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;