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
  }, [])

  async function handleRemoveOrder(id) {
    await ordersAPI.removeOrder(id);
    const ordersIndex = await ordersAPI.getAll();
    setOrders(ordersIndex);
  }

  return(
    <div>
      <h1 className="is-size-2">Orders</h1>
      <table className="table">
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
  );
}