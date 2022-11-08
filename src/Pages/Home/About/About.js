import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero my-32">
      <div className="hero-content flex-col lg:flex-row">
       <div className="relative w-1/2">

       <img src={person} alt='person' className="w-4/5 rounded-lg shadow-2xl" />
       <img src={parts} alt='person' className="absolute w-3/5 border-8 border-slate-500 right-12 top-1/2 rounded-lg shadow-2xl" />

       </div>
        <div className="w-1/2">
            <span className="text-orange-500 font-bold text-xl pb-6">About Us</span>
          <h1 className="text-5xl font-bold">We are qualified <br/>
           & of experience <br/>
            in this field</h1>
          <p className="py-6 text-slate-600">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="pb-6 text-slate-600">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
