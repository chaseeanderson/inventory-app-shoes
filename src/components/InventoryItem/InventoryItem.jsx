import { useEffect } from 'react';

export default function InventoryItem({ category, name, quantity }) {
  
  useEffect(function() {
    console.log('hey', quantity)
  }, [quantity]);

  return(
      <tr>
        <td>{category} {name}</td>
        <td>{quantity}</td>
      </tr>
  );
}