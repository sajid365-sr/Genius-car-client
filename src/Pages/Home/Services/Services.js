
import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://genius-car-server-swart-two.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='text-center w-1/2 mx-auto'>
                <p className="text-orange-500 font-bold text-xl">Service</p>
                <h2 className='text-5xl font-bold my-5'>Our Service Area</h2>
                <p className='text-slate-500'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    services.map(service => <ServiceCart 
                    key={service._id}
                    service={service}
                    ></ServiceCart>)
                }
            </div>
            <div className='text-center mb-10'>
            <button className='btn btn-outline'>More Services</button>
            </div>
        </div>
    );
};

export default Services;