import React from "react";
import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
  const { img, price, title, _id } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="p-5">
        <img src={img} alt="Shoes" className="rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-xl font-semibold text-orange-600">Price: ${price}</p>
        <div className="card-actions justify-end pb-5">
          <Link to={`checkout/${_id}`}>
            <button className="btn btn-primary">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
