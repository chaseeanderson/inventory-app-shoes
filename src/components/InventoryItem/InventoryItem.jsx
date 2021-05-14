export default function InventoryItem({ category, name, quantity }) {
  return(
      <tr>
        <td>{category} {name}</td>
        <td>{quantity}</td>
      </tr>
  );
}