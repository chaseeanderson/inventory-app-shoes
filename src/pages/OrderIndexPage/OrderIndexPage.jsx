import { useEffect, useState } from 'react';
import OrderItem from '../../components/OrderItem/OrderItem';
import * as ordersAPI from '../../utilities/orders-api';

export default function OrderIndexPage() {
  const [orders, setOrders] = useState([]);

  useEffect(function() {
    async function getOrders() {
      const ordersIndex = await ordersAPI.getAll();
      setOrders(ordersIndex);
    }
    
    getOrders();
  }, []);

  async function handleRemoveOrder(id) {
    // using filter to reflect the updated list is the more efficient approach
    const updatedOrders = orders.filter(order => order._id !== id);
    await ordersAPI.removeOrder(id);
    setOrders(updatedOrders);
  }

  return(
    <div>
      <h1 className="is-size-2 mb-5 mt-4">Orders</h1>
      <div className="columns">
        <div className="column card is-8 is-offset-2">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Id</th>
                <th>Vendor</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => <OrderItem
                key={order._id}
                id={order._id}
                vendor={order.vendor}
                total={order.orderTotal}
                handleRemoveOrder={handleRemoveOrder}
              /> )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}