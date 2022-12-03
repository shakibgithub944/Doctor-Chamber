import React from 'react';
import qoute from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonial = () => {

    const reviews = [
        {
            id: 1,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'John',
            address: 'California'
        },
        {
            id: 2,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'John',
            address: 'California'
        },
        {
            id: 3,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'John',
            address: 'California'
        },
    ]

    return (
        <section className='mt-16 max-w-[1440px] mx-auto'>
            <div className='flex items-center justify-between p-5'>
                <div>
                    <h1 className='text-secondary font-bold'>Testimonial</h1>
                    <p className='text-3xl text-accent'>What Our Patients Says</p>
                </div>
                <div>
                    <img src={qoute} alt="" className='h-28' />
                </div>
            </div>

            <div className='mt-8 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10'>

                {
                    reviews.map(review => <div
                        key={review.id}
                        className='card shadow-xl'
                    >
                        <p className='m-9'>{review.details}</p>
                        <div>
                            <div className="mb-9 avatar ml-9 flex items-center ">
                                <div className="w-20 rounded-full border-4 border-secondary">
                                    <img src={review.img} alt='' className='' />
                                </div>
                                <div className='ml-4'>
                                    <h2 className='text-accent font-bold'>{review.name}</h2>
                                    <p >{review.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </section>
    );
};

export default Testimonial;