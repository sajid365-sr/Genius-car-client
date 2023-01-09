import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { title, price, _id, img } = useLoaderData();

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = firstName + " " + lastName;
    const email = user?.email || "Unregistered";
    const phone = form.phone.value;
    const address = form.address.value;
    const currency = form.currency.value;
    const postcode = form.postcode.value;

    const order = {
      serviceId: _id,
      serviceName: title,
      customerName: name,
      email,
      phone,
      address,
      currency,
      postcode,
      
    };

    fetch(`${process.env.REACT_APP_SERVER_URL}/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("Genius-Token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
      })
      .catch((e) => console.error(e));
  };

  return (
    <form
      onSubmit={handlePlaceOrder}
      className="my-12 flex items-center justify-between"
    >
      <div>
        <h2 className="text-4xl">{title}</h2>
        <h4 className="text-3xl mb-8">You are about to order: {price}</h4>
        <img className="rounded" src={img} alt="" />
      </div>
      <div>
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
          <select
            defaultValue="BDT"
            name="currency"
            className="select select-bordered w-full max-w-xs"
            required
          >
            <option value="BDT">BDT</option>
            <option value="USD">USD</option>
          </select>
          <input
            className="input input-bordered w-full"
            type="text"
            name="postcode"
            placeholder="Your post code"
            required
          />
        </div>
        <textarea
          name="address"
          className="textarea textarea-bordered w-full h-24 mt-8"
          placeholder="Your Address"
          required
        ></textarea>
        <input type="submit" className="btn mt-5 w-full text-xl" value="Pay" />
      </div>
    </form>
  );
};

export default CheckOut;
