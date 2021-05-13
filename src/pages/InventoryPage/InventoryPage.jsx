import InventoryItem from '../../components/InventoryItem/InventoryItem';


export default function InventoryPage() {
  return(
    <div>
      <h1 className="is-size-2">My Kicks</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <InventoryItem />
        </tbody>
      </table>
    </div>
  );
}