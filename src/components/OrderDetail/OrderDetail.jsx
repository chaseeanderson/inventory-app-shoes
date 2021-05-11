import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ purchaseOrder }) {
  if (!purchaseOrder) return null;
  console.log(purchaseOrder)
  return(
    <div>
      <h1 className="is-size-2">Purchase Order Details</h1>
      {
        purchaseOrder.lineItems ?
        <form className="card">
          <div className="card-content">

            <table className="table">
              <thead>
                <tr>
                  <th>Qty</th>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {purchaseOrder.lineItems.map(item => <LineItem
                  key={item._id}
                  quantity={item.quantity}
                  category={item.product.category}
                  name={item.product.name}
                />)}
              </tbody>
            </table>
            
            <hr />

            <div className="field">
              <label className="label">Commission</label>
              <input type="text" className="input" />
            </div>

            <h1>Total</h1>

            <div className="card-footer">
              <div className="card-footer-item">
                <button className="button">Submit</button>
              </div>
              <div className="card-footer-item">
                <button className="button">Clear</button>
              </div>
            </div>
          </div>

        </form>
        :
        <h1>add items</h1>
      }
    </div>
  );
};