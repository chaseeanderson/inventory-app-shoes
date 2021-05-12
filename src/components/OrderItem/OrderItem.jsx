export default function OrderItem({ id, vendor, total }) {
  return(
    <tr>
        <td>{id}</td>
        <td>{vendor}</td>
        <td>{total}</td>
    </tr>
  );
}