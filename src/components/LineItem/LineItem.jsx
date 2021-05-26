export default function LineItem({ category, name, idx, lineItems, setLineItems }) {

  function handleChangeItem(evt) {
    const copy = [...lineItems];
    copy[idx] = {...copy[idx], [evt.target.name]: evt.target.value}
    setLineItems(copy);
  }

  function handleChangeVariation(evt) {
    const copy = [...lineItems];
    const variationsCopy = [...copy[idx].variations];
    console.log(typeof evt.target.name);
    console.log(variationsCopy)
    const matchingVariation = variationsCopy.find(v => v.variationTitle === evt.target.name);
    if (matchingVariation) {
      console.log('you happening')
      matchingVariation.quantity = evt.target.value;
    } else {
      variationsCopy.push({ variationTitle: evt.target.name, quantity: evt.target.value });
    }
    copy[idx] = {...copy[idx], variations: variationsCopy}
    console.log('copy', copy)
    setLineItems(copy);
  }
  
  if (!lineItems[idx]) {
    return(
    <>
    </>
    );
  }
  return(
    <tr>
      
      <td className="is-size-5">
        {category} {name}
      </td>

      <td style={{width: '15%'}}>
        <input name="price" onChange={handleChangeItem} value={lineItems[idx].price} type="number" className="input" />
      </td>

      {['7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'].map(variationTitle => {
        const thisVariation = lineItems[idx].variations.find(v => v.variationTitle === variationTitle);
        return(
          <td>
            <input 
              style={{minWidth: "50px"}} 
              name={variationTitle} 
              onChange={handleChangeVariation} 
              value={thisVariation ? thisVariation.quantity : '0'} 
              type="number" 
              className="input" 
            />
          </td>
        );
      }) }
      
      <td>
        {
          lineItems[idx].variations.reduce((acc, variation) => acc + parseInt(variation.quantity), 0)
        }
      </td>

    </tr>
  );
}