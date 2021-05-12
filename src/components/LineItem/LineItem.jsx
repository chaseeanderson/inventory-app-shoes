import { useEffect } from "react";

export default function LineItem({ formData, category, name, idx, lineItems, setLineItems, id }) {

  // useEffect(function() {
  //   if (lineItems[idx]) setLineItems({...lineItems, quantity: lineItems[idx].quantity})
  // }, [lineItems])

  function handleChange(evt) {
    const copy = [...lineItems];
    copy[idx] = {...copy[idx], [evt.target.name]: evt.target.value}
    setLineItems(copy);
  }

  return(
    lineItems.length ? 
    <tr>
      <td>
        <input name="quantity" onChange={handleChange} value={lineItems[idx].quantity} type="number" className="input" />
      </td>

      <td>
        {category} {name}
      </td>

      <td>
        <input name="price" onChange={handleChange} value={lineItems[idx].price} type="number" className="input" />
      </td>

      {/* gonna need some shoe size data */}
      
    </tr>
    :
    <>
    </>
  );
}