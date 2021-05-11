export default function LineItem({ quantity, category, name }) {
  return(
    <tr>
      <td>
        <input type="text" className="input" />
      </td>

      <td>
        {category} {name}
      </td>

      <td>
        <input type="text" className="input" />
      </td>

      {/* gonna need some shoe size data */}
      
    </tr>
  );
}