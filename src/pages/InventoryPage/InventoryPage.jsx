import { useState } from 'react';
import InventoryItem from '../../components/InventoryItem/InventoryItem';
import SearchBar from '../../components/SearchBar/SearchBar';


export default function InventoryPage({ products, searchInput, setSearchInput, setProducts }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Event Handlers
  function handleChange(evt) {
    setSearchInput(evt.target.value);
    const searchResults = products.filter(product => 
      product.category.toLowerCase().includes(searchInput.toLowerCase()));
    setFilteredProducts(searchResults);
    if (evt.target.value === '') setFilteredProducts(products);
  }
  
  return(
    <div>
      <h1 className="is-size-2 mt-4">My Kicks</h1>
      <div className="columns">
        <div className="column is-2 is-offset-1">
          <SearchBar
            handleChange={handleChange}
          />
        </div>
      </div>

      <div className="columns">
        <div className="column is-8 is-offset-2">
          <div style={{ overflow: 'scroll', height: '70vh' }} className="table-container card">
          <table className="table is-fullwidth is-scrollable">
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
        </div>
      </div>
        
      </div> 
  );
}