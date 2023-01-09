
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get('transactionId');

    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${transactionId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrder(data);
            })
    }, [transactionId])

    if (!order._id) {
        return <div>
            <h1 className='text-3xl my-10 font-semibold'>No order found</h1>
        </div>
    }
    return (
        <div>
            <h2 className='text-success'>Congrats! Successfully paid.</h2>

            <h2>Your Order Summery:</h2>

            <div className="overflow-x-auto my-20">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Shipping Address</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>{order.serviceName}</td>
                            <td>{order.price}</td>
                            <td>{order.address}</td>
                            <td>{order.transactionId}</td>
                        </tr>

                    </tbody>
                </table>
                <button onClick={() => window.print()} className='btn btn-primary rounded-none px-10 text-lg mt-5 print:hidden'>Print</button>
            </div>
        </div>
    );
};

export default PaymentSuccess;