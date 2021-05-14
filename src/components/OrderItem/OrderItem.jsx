export default function OrderItem({ id, vendor, total, handleRemoveOrder }) {
  const smallId = id.slice(-6);
  return(
    <tr>
        <td>{smallId}</td>
        <td>{vendor}</td>
        <td>${total.toFixed(2)}</td>
        <td onClick={() => handleRemoveOrder(id)} className="button">X</td>
    </tr>
  );
}