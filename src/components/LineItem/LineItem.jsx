export default function LineItem({ lineItemQty, setLineItemQty, lineItemPrice, setLineItemPrice, category, name }) {

  async function handleChange() {
    
  }

  return(
    <tr>
      <td>
        <input name={"qty"} type="text" className="input" />
      </td>

      <td>
        {category} {name}
      </td>

      <td>
        <input name={"price"} type="text" className="input" />
      </td>

      {/* gonna need some shoe size data */}
      
    </tr>
  );
}