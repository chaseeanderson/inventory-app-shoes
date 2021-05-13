export default function InventoryItem({ category, name, quantity }) {
  return(
    <div>
      <tr>
        <td>{category} {name}</td>
        <td>{quantity}</td>
      </tr>
    </div>
  );
}