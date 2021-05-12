export default function LineItem({ category, name, idx, lineItems, setLineItems }) {

  function handleChangeItem(evt) {
    const copy = [...lineItems];
    copy[idx] = {...copy[idx], [evt.target.name]: evt.target.value}
    setLineItems(copy);
  }

  return(
    lineItems[idx] ? 
    <tr>
      <td>
        <input name="quantity" placeholder="0" onChange={handleChangeItem} value={lineItems[idx].quantity} type="number" className="input" />
      </td>

      <td>
        {category} {name}
      </td>

      <td>
        <input name="price" placeholder="0" onChange={handleChangeItem} value={lineItems[idx].price} type="number" className="input" />
      </td>

      {/* gonna need some shoe size data */}
      
    </tr>
    :
    <>
    </>
  );
}