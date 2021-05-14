import ProdItem from '../ProdItem/ProdItem';

export default function ProdList({ products, handleAddToOrder }) {
  return(
    <div>
      <h1 className="is-size-2 mb-4">Products</h1>
      <div style={{ overflow: 'scroll', height: '70vh' }} className="products-container">
        {products.map(product => <ProdItem
          key={product._id}
          id={product._id}
          name={product.name}
          category={product.category}
          variation={product.variation}
          quantity={product.quantity}
          handleAddToOrder={handleAddToOrder}
          />)}
      </div>
    </div>
  );
}