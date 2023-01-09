
import React, { useEffect, useRef, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {

    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('')
    const searchRef = useRef();

    const handleSearch = () =>{
        setSearch(searchRef.current.value)
    }

    useEffect( () =>{
        fetch(`${process.env.REACT_APP_SERVER_URL}/services?search=${search}&order=${isAsc? 'asc' : 'desc'}`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [isAsc,search]);
    return (
        <div>
            <div className='text-center w-1/2 mx-auto'>
                <p className="text-orange-500 font-bold text-xl">Service</p>
                <h2 className='text-5xl font-bold my-5'>Our Service Area</h2>
                <p className='text-slate-500'>The majority have suffered alteration in some form, by injected humour, or random words which don't look even slightly believable. </p>
                <input ref={searchRef} className='input input-sm mr-5' type="text" /> 
                <button onClick={handleSearch}>Search</button>
                <button className='ml-8 btn btn-outline px-10 mt-6' onClick={() => setIsAsc(!isAsc)}>{isAsc?'desc':'asc'}</button>
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