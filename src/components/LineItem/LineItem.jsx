export default function LineItem({ formData, setFormData, handleChange, category, name, id }) {

  return(
    <tr>
      <td>
        <input name={`${id} quantity`} onChange={handleChange} value={formData.qty} type="text" className="input" />
      </td>

      <td>
        {category} {name}
      </td>

      <td>
        <input name={`${id} price`} onChange={handleChange} value={formData.price} type="text" className="input" />
      </td>

      {/* gonna need some shoe size data */}
      
    </tr>
  );
}