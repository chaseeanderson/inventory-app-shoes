export default function LineItem({ category, name, idx, lineItems, setLineItems }) {

  function handleChangeItem(evt) {
    const copy = [...lineItems];
    copy[idx] = {...copy[idx], [evt.target.name]: evt.target.value}
    setLineItems(copy);
  }

  return(
    lineItems[idx] ? 
    <tr>
      <td style={{width: '15%'}}>
        <input name="quantity" onChange={handleChangeItem} value={lineItems[idx].quantity} type="number" className="input" />
      </td>

      <td className="is-size-5">
        {category} {name}
      </td>

      <td style={{width: '15%'}}>
        <input name="price" onChange={handleChangeItem} value={lineItems[idx].price} type="number" className="input" />
      </td>

      {/* gonna need some shoe size data */}
      
    </tr>
    :
    <>
    </>
  );
}