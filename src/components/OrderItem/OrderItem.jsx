export default function OrderItem({ id, vendor, total, handleRemoveOrder }) {
  return(
    <tr>
        <td>{id}</td>
        <td>{vendor}</td>
        <td>{total}</td>
        <td onClick={() => handleRemoveOrder(id)} className="button">X</td>
    </tr>
  );
}