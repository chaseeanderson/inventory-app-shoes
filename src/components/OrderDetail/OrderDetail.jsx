import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LineItem from '../LineItem/LineItem';
import * as ordersAPI from '../../utilities/orders-api';
import * as productsAPI from '../../utilities/products-api';

export default function OrderDetail({ purchaseOrder, setPurchaseOrder, products, setProducts }) {
  const [formData, setFormData] = useState({});
  const [lineItems, setLineItems] = useState([]);
  const history = useHistory();

  useEffect(function() {
    if (purchaseOrder.lineItems) setLineItems([...purchaseOrder.lineItems]);
  }, [purchaseOrder]);
  
  if (!purchaseOrder) return null;

  // Event Handlers
  function handleChange(evt) {
    const newFormData = { ...formData, lineItems: lineItems, [evt.target.name]: evt.target.value }
    setFormData(newFormData);
  }
  
  async function handleSubmit(evt) {
    evt.preventDefault();
    // send the lineItem quantities to update the inventory
    for (const item of lineItems) {
      await productsAPI.updateProductQty(item);
    }
    const updatedPurchaseOrder = await ordersAPI.submitOrder(formData);
    // Update state qty for products
    await updateProdQty(updatedPurchaseOrder);
    setPurchaseOrder(updatedPurchaseOrder);
    setFormData({});
    setLineItems([]);
    history.push('/inventory')
  }

  // Helpers
  async function updateProdQty(purchaseOrder) {
    const productCopy = [...products];
    purchaseOrder.lineItems.forEach(item => {
      const product = productCopy.find(product => product._id === item.product);
      product.quantity += item.quantity;
      return product;
    });
  }

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
        <h1>Add items</h1>
      }
    </div>
  );
};