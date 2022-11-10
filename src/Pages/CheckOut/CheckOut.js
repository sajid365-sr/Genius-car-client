import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  
    const {user} = useContext(AuthContext);
    const {title, price, _id} = useLoaderData();

const handlePlaceOrder = (event) =>{
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = firstName + " " + lastName;
    const email = user?.email || "Unregistered";
    const phone = form.phone.value;
    const message = form.message.value;



    const order = {
        service: _id,
        serviceName : title,
        price,
        customer:name,
        email,
        phone,
        message
    }
    

    fetch(`http://localhost:5000/orders`, {
        method:'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            form.reset();
            alert('Order placed successfully.')
        }
        })
    .catch(e => console.error(e))

}

  return (
    <form onSubmit={handlePlaceOrder} className="my-12">
        <h2 className="text-4xl">{title}</h2>
        <h4 className="text-3xl mb-8">You are about to order: {price}</h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full"
          name="firstName"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full"
          name="lastName"
          required
        />
        <input
          type="number"
          placeholder="Your Phone"
          className="input input-bordered w-full"
          name="phone"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          defaultValue={user?.email}
          className="input input-bordered w-full"
          name="email"
          readOnly
        />
      </div>
      <textarea name="message" className="textarea textarea-bordered w-full h-24 mt-8" placeholder="Your Message"></textarea>
      <input type="submit" className="btn mt-5" value='Place your order' />
    </form>
  );
};

export default CheckOut;
