import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { serviceName, price, service, message, customer, phone, _id, status } = order;
  const [orderService, setOrderService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);


 

  return (
    <tr>
      <th>
        <button onClick={()=> handleDelete(_id, serviceName)} className="btn btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-28 h-28">
              {orderService?.img && <img src={orderService.img} alt="" />}
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">{customer}</div>
            <div className="text-lg opacity-50 ">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-lg">${price}</span>
      </td>
      
      <th>
        <span className="font-normal">{message}</span>
      </th>
      <th>
          <button onClick={() => handleStatusUpdate(_id)} className="btn btn-outline btn-sm">{status ? status : "Pending"}</button>

      </th>
     
    </tr>
  );
};

export default OrderRow;
