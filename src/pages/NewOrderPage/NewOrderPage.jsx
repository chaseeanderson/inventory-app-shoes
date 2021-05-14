import { useEffect, useState } from 'react';
import ProdList from '../../components/ProdList/ProdList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as ordersAPI from '../../utilities/orders-api';

export default function NewOrderPage({ products, setProducts }) {
  
  const [purchaseOrder, setPurchaseOrder] = useState([]);

  useEffect(function() {
    async function getPurchaseOrder() {
      const fetchPurchaseOrder = await ordersAPI.getOrder();
      setPurchaseOrder(fetchPurchaseOrder)
    }
    getPurchaseOrder();
  }, []);

  // Event Handlers
  async function handleAddToOrder(productId) {
    const updatedOrder = await ordersAPI.addToOrder(productId)
    setPurchaseOrder(updatedOrder);
  }

  return(
    <div className="columns mx-3 mt-3">
      <div className="column is-half">
        <ProdList 
          products={products} 
          handleAddToOrder={handleAddToOrder}
        />
      </div>
      <div className="column is-half">
        <OrderDetail 
          purchaseOrder={purchaseOrder}
          setPurchaseOrder={setPurchaseOrder}
          products={products} 
          setProducts={setProducts} 
        />
      </div>
    </div>
  );
}