import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user,logOut } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);
  

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/orders?email=${user?.email}`,{
      headers:{
        authorization:`Bearer ${localStorage.getItem('Genius-Token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          return logOut()

        }
        return res.json()
      })
      .then((data) => {
        
        setOrder(data)
      });
  }, [user?.email,logOut]);


  const handleDelete = (id, serviceName) =>{
    const proceed = window.confirm(`Are you sure you want to cancel our ${serviceName} service`);
    if(proceed){
        fetch(`${process.env.REACT_APP_SERVER_URL}/orders/${id}`, {
            method:'DELETE',
            headers:{
              authorization:`Bearer ${localStorage.getItem('Genius-Token')}`
            }
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
        <h1 className="text-4xl mb-5">Your Orders : {orders.length}</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Index</th>
            <th></th>
            <th>Customer Info</th>
            <th>Services Info</th>
            <th>Transaction Query</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
              orders.map((order, i) => <OrderRow
              key={order._id}
              order={order}
              handleDelete={handleDelete}
              index={i + 1}
              ></OrderRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
