import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);


  const handleDelete = (id, serviceName) =>{
    const proceed = window.confirm(`Are you sure you want to cancel our ${serviceName} service`);
    if(proceed){
        fetch(`http://localhost:5000/orders/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('Service order cancelled.')
            }
        })
        const remainingOrders = orders.filter(order => order._id !== id);
        setOrder(remainingOrders);
        
    }
  }

  const handleStatusUpdate = id =>{
    fetch(`http://localhost:5000/orders/${id}`, {
      method:'PATCH',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify({status: 'Approved'})
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        const remaining = orders.filter(order => order._id !== id);
        const approved = orders.find(odr => odr._id === id);
        approved.status = 'Approved';

        const newOrders = [approved,...remaining];
        setOrder(newOrders);
      }
      
    })

  }

  return (
    <div className="overflow-x-auto w-full my-12">
        <h1 className="text-4xl mb-5">Your Orders : {orders.length}</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Services</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
              orders.map(order => <OrderRow
              key={order._id}
              order={order}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
              ></OrderRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
