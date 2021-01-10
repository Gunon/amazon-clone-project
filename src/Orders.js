import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{basket, user}, dispatch] = useStateValue();

    useEffect(() => {
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot =>{
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }else{
            setOrders([])
        }

        
    }, [user]);
    console.log(orders)

    return (
        <div className="orders">
            <h1>Your Orders!</h1>
            {orders && (
                <div className="orders__order">
                    {orders?.map( order => (
                        <Order order={order}/>
                    ))}
                </div>)
            }
            {orders.length === 0 && (
                <div className="empty__orders">
                    It looks like you havent placed any orders yet or aren't signed in! :)
                </div>
            )}
            
        </div>
    )
}

export default Orders
