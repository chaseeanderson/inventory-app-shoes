import { useEffect, useState } from 'react';
import ProdList from '../../components/ProdList/ProdList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function NewOrderPage() {
  const [products, setProducts] = useState([]);
  const [purchaseOrder, setPurchaseOrder] = useState([]);

  useEffect(function() {
    async function getProducts() {
      const productsIndex = await productsAPI.getAll();
      setProducts(productsIndex);
    }
    getProducts();

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
    <div className="columns">
      <div className="column is-half">
        <ProdList 
          products={products} 
          handleAddToOrder={handleAddToOrder}
        />
      </div>
      <div className="column is-half">
        <OrderDetail 
          purchaseOrder={purchaseOrder}
          commission={purchaseOrder.commission} 
          lineItems={purchaseOrder.lineItems} 
          orderTotal={purchaseOrder.orderTotal} 
        />
      </div>
    </div>
  );
}