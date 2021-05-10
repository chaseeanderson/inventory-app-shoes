import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ purchaseOrder }) {
  return(
    <div>
      <h1 className="is-size-2">Order Details</h1>
      <LineItem />
    </div>
  );
};