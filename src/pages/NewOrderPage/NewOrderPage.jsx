import { useEffect, useState } from 'react';
import ProdList from '../../components/ProdList/ProdList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as productsAPI from '../../utilities/products-api';

export default function NewOrderPage() {
  const [products, setProducts] = useState([]);

  useEffect(function() {
    async function getProducts() {
      const productsIndex = await productsAPI.getAll();
      setProducts(productsIndex);
    }
    getProducts();
  }, []);

  return(
    <div className="columns">
      <div className="column is-half">
        <ProdList products={products} />
      </div>
      <div className="column is-half">
        <OrderDetail />
      </div>
    </div>
  );
}