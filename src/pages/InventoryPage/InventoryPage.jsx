import { useEffect, useState } from 'react';
import * as productsAPI from '../../utilities/products-api';
import InventoryItem from '../../components/InventoryItem/InventoryItem';
import SearchBar from '../../components/SearchBar/SearchBar';


export default function InventoryPage({ products, searchInput, setSearchInput, setProducts }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(function() {
    async function getProducts() {
      const productsIndex = await productsAPI.getAll();
      setProducts(productsIndex);
    }
    getProducts();
  }, []);
  
  console.log('hi', products)
  // Event Handlers
  function handleChange(evt) {
    setSearchInput(evt.target.value);
    const searchResults = products.filter(product => 
      product.category.toLowerCase().includes(searchInput.toLowerCase()));
    setFilteredProducts(searchResults);
  }
  
  return(
    <div>
      <h1 className="is-size-2">My Kicks</h1>
      <SearchBar
        setSearchInput={setSearchInput}
        handleChange={handleChange}
      /> 
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => <InventoryItem
            key={product._id}
            category={product.category}
            name={product.name}
            quantity={product.quantity}
            handleChange={handleChange}
          />)}
        </tbody>
      </table>
    </div>
  );
}