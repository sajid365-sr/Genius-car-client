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

  return (
    <div className="overflow-x-auto w-full my-12">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Services</th>
            <th>Favorite Color</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {
              orders.map(order => <OrderRow
              key={order._id}
              order={order}
              handleDelete={handleDelete}
              ></OrderRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
