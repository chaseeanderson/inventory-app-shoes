export default function ProdItem({ id, name, category, variation, quantity, handleAddToOrder }) {
  return(
    <div className="card">
      <div className="card-content">
        <p className="content">{category}</p>
        <p className="content">{name}</p>
        {/* this is an array vv */}
        {/* <p className="content">{variation.variationTitle}</p> */}
        <p className="content">Qty: {quantity}</p>
      </div>
      <div className="card-footer">
        <div className="card-footer-item">
          <button className="button" onClick={() => handleAddToOrder(id)}>ADD</button>
        </div>
      </div>
    </div>
  )
}