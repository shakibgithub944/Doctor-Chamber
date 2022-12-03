import React from 'react';
import chaviti from '../../assets/images/cavity.png'
import flouride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import Button from '../../common/Button/Button';


const Services = () => {

    const serviceCards = [
        {
            id: 1,
            icon: flouride,
            titlle: 'Flouride Treatment',
            details: 'We give best flouride treatment'
        },
        {
            id: 2,
            icon: chaviti,
            titlle: 'Cavity Filling',
            details: 'We give best Chaviti treatment'
        },
        {
            id: 3,
            icon: whitening,
            titlle: 'Teeth Whitening',
            details: 'We give best Whitening treatment'
        },
    ]

    return (
        <div className='mt-36 max-w-[1440px] mx-auto'>
            <div className='text-center mb-16'>
                <p className='text-secondary font-bold'>Our Service</p>
                <h1 className='text-2xl text-accent'>Services We Provided</h1>
            </div>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceCards.map(serviceCard => <div
                        key={serviceCard.id}
                        className="card bg-base-100 shadow-xl"
                    >
                        <figure>
                            <img src={serviceCard.icon} alt="" className="rounded-xl px-10 pt-10" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-accent">{serviceCard.titlle}</h2>
                            <p>{serviceCard.details}</p>
                        </div>
                    </div>)
                }
            </div>

            <div className='lg:flex items-center justify-evenly m-16 lg:m-36'>
                <div>
                    <div className="bg-base-100 lg:flex items-center">
                        <figure>
                            <img src={treatment} alt="" className=' w-full h-96 rounded-xl' />
                        </figure>
                        <div className="mt-5 lg:ml-12">
                            <h2 className="font-bold text-4xl mb-3">Exceptional Dental Care <br></br> On Your Terms.</h2>
                            <p>Click the button to watch on Jetflix app.Click the button to watch on Jetflix app.Click the button to watch on Jetflix app.</p>
                            <div className="mt-5">
                                <Button>Get Start</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;