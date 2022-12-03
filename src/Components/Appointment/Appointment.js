import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import AvailableAppointtment from '../AvailableAppointment/AvailableAppointtment';


const Appointment = () => {
    const [selected, setSelected] = useState(new Date());


    return (
        <div>
            <div className='relative'>
                <img src={bg} alt="" className='w-full h-full absolute  ' />
                <div className="hero  min-h-[70vh]" >
                    <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                        <img src={chair} className="lg:max-w-lg rounded-lg " alt='' />
                        <div className=''>
                            <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                            ></DayPicker>
                            {/* <p>{format(selected, 'PPPP')}.</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <AvailableAppointtment selected={selected}></AvailableAppointtment>

        </div>
    );
};

export default Appointment;