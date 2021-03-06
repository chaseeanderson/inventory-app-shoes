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
    const updatedPurchaseOrder = await ordersAPI.submitOrder(formData);
    // send the lineItem quantities to update the inventory
    for (const item of lineItems) {
      await productsAPI.updateProductQty(item);
    }
    // Update state
    await updateProdQty(updatedPurchaseOrder);
    setPurchaseOrder(updatedPurchaseOrder);
    // Reset the form
    setFormData({});
    setLineItems([]);
    history.push('/inventory');
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
      <h1 className="is-size-2 mb-4">Purchase Order Details</h1>
      {
        purchaseOrder.lineItems ?
        <form className="card" onSubmit={handleSubmit}>
          <div className="card-content">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <label className="label">Vendor</label>
                {/* short circut evaluation */}
                <input name="vendor" value={formData.vendor || ''} onChange={handleChange} type="text" className="input" />
              </div>
            </div>
            <hr />
            <div className="columns">
              <div className="column is-10">
                <div className="table-container">
                  <table className="table is-fullwidth is-scrollable">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>7.5</th>
                        <th>8</th>
                        <th>8.5</th>
                        <th>9</th>
                        <th>9.5</th>
                        <th>10</th>
                        <th>10.5</th>
                        <th>11</th>
                        <th>11.5</th>
                        <th>12</th>
                        <th>Total</th>
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
                </div>
              </div>
            </div>
            
            <hr className="mt-6" />

            <div className="field">
              <label className="label">Commission</label>
              <input name="commission" placeholder="Please enter as decimal" value={formData.commission || ''} onChange={handleChange} type="number" className="input" />
            </div>

            <div className="card-footer">
              <div className="card-footer-item pb-0 pt-5">
                <button type="submit" className="button">Submit</button>
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