import React from 'react';
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch('https://doctors-chamber-server.vercel.app/allUsers', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }

    })

    const handleAdmin = id => {
        fetch(`https://doctors-chamber-server.vercel.app/allUsers/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    refetch()
                    toast.success('Admin created successfull')
                }

            })
    }

    return (
        <div>
            <h3 className='text-3xl mb-3'>All Users</h3>

            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Designation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr
                                key={user._id}
                                className="hover"
                            >
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button className='btn btn-primary btn-sm' onClick={() => handleAdmin(user._id)}>Make admin</button>}</td>
                                <td><button className='btn btn-sm btn-error '>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;