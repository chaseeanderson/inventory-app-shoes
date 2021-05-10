import { useEffect, useState } from 'react';
import ProdList from '../../components/ProdList/ProdList';
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
    <ProdList products={products} />
  );
}