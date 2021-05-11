import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ purchaseOrder }) {
  if (!purchaseOrder) return null;

  return(
    <div>
      <h1 className="is-size-2">Order Details</h1>
      {
        purchaseOrder.lineItems ?
        <>
          {purchaseOrder.lineItems.map(item => <LineItem
            key={item._id}
            quantity={item.product.quantity}
            category={item.product.category}
            name={item.product.name}
          />)}
        </>
        :
        <h1>add items</h1>
      }
    </div>
  );
};