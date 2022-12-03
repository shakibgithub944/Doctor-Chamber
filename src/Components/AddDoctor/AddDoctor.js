import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key
    const { data: specialites = [], isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('https://doctors-chamber-server.vercel.app/appointmetnSpeciality');
            const data = await res.json();
            return data;
        }

    })

    const handleAddDoctore = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(ImageData => {
                if (ImageData.success) {
                    console.log(ImageData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: ImageData.data.url
                    }
                    fetch('https://doctors-chamber-server.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Dr. ${data.name} successfully added.`)
                            navigate('/dashboard/managedoctor')
                        })

                }
            })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-3xl '>Add Doctor</h2>

            <form onSubmit={handleSubmit(handleAddDoctore)}>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text"{...register("name", {
                        required: "Name is required."

                    })}
                        className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email"{...register("email", {
                        required: "Email address is required."

                    })}
                        className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full mb-7">
                    <label className="label"><span className="label-text">Speciality</span></label>
                    <select {...register("speciality", {
                        required: "Select speciality it's required."

                    })}
                        className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select speciality</option>
                        {
                            specialites.map(speciality => <option
                                key={speciality.name}
                                value={speciality.name}
                            >
                                {speciality.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file"{...register("image", {
                        // required: "Image is required."

                    })}
                        className="input input-bordered w-full" />
                    {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                </div>

                <input type="submit" value={'Add Doctor'} className='btn btn-accent w-full' />
            </form>
        </div>
    );
};

export default AddDoctor;