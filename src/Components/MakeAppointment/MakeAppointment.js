import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../../common/Button/Button';

const MakeAppointment = () => {
    return (
        <section
        className='mt-36'
        style={
            {
                background:`url(${appointment})`
            }
        }
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className=" hidden lg:-mt-40 lg:block lg:w-1/2 rounded-lg" />
                    <div className='p-8'>
                        <h1 className="text-secondary font-bold mb-5">Appointment</h1>
                        <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-8 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get start</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;