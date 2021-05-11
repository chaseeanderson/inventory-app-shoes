import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ commission, lineItems, orderTotal }) {
  return(
    <div>
      <h1 className="is-size-2">Order Details</h1>
      {lineItems.map(product => <LineItem
        key={product._id}
        quantity={product.quantity}
        category={product.category}
        name={product.name}
      />)}
    </div>
  );
};