import { useState, useEffect } from 'react';
import LineItem from '../LineItem/LineItem';
import * as ordersAPI from '../../utilities/orders-api';

export default function OrderDetail({ purchaseOrder, setPurchaseOrder, products, setProducts }) {
  const [formData, setFormData] = useState({});
  const [lineItems, setLineItems] = useState([]);

  useEffect(function() {
    if (purchaseOrder.lineItems) setLineItems([...purchaseOrder.lineItems]);

    // (function updateProductQty() {
    //   console.log('products', products)
    // })();
  }, [purchaseOrder])
  
  // console.log(purchaseOrder)
  if (!purchaseOrder) return null;



  function handleChange(evt) {
    const newFormData = { ...formData, lineItems: lineItems, [evt.target.name]: evt.target.value }
    setFormData(newFormData);
  }
  console.log('lineItems', lineItems)
  async function handleSubmit(evt) {
    evt.preventDefault();
    const updatedPurchaseOrder = await ordersAPI.submitOrder(formData);
    setPurchaseOrder(updatedPurchaseOrder);
  }

  console.log('NEW purchase: ', purchaseOrder);

  return(
    <div>
      <h1 className="is-size-2">Purchase Order Details</h1>
      {
        purchaseOrder.lineItems ?
        <form className="card" onSubmit={handleSubmit}>
          <div className="card-content">
            <label className="label">Vendor</label>
            {/* short circut evaluation */}
            <input name="vendor" value={formData.vendor || ''} onChange={handleChange} type="text" className="input" />
            <br />
            <br />
            <hr />
            <table className="table">
              <thead>
                <tr>
                  <th>Qty</th>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {purchaseOrder.lineItems.map((item, idx) => <LineItem
                  key={item._id}
                  idx={idx}
                  category={item.product.category}
                  name={item.product.name}
                  lineItems={lineItems}
                  setLineItems={setLineItems}
                />)}
              </tbody>
            </table>
            
            <hr />

            <div className="field">
              <label className="label">Commission</label>
              <input name="commission" placeholder="please enter as decimal" value={formData.commission || ''} onChange={handleChange} type="number" className="input" />
            </div>

            <h1>Total: {purchaseOrder.orderTotal}</h1>

            <div className="card-footer">
              <div className="card-footer-item">
                <button type="submit" className="button">Submit</button>
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