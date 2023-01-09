import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, index }) => {
  const { serviceName, price, serviceId, address, customerName, phone, _id, paidAt, transactionId, paid } = order;
  const [orderService, setOrderService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [serviceId]);




  return (
    <tr>
      <th>
        <button>{index}</button>
      </th>
      <th>
        <button title="Delete order" onClick={() => handleDelete(_id, serviceName)} className="btn btn-circle btn-outline">
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
            <p className="font-semibold text-lg">Customer Name: {customerName}</p>
            <p className="text-gray-500 font-medium">Phone: {phone}</p>
            <p className="text-gray-500 font-medium">Address: {address}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="text-lg font-semibold mb-3">{serviceName}</p>
        <p className="text-2xl px-5 badge badge-lg">${price}</p>
      </td>

      <th>
        <p className="font-normal">Transaction ID: <span className="font-medium">{transactionId}</span></p>
        <p className="font-normal">Payment Time: <span className="font-medium">{paidAt}</span> </p>
      </th>
      <th>
        <p className="text-success text-2xl font-semibold">{paid && "paid"}</p>

      </th>

    </tr>
  );
};

export default OrderRow;
