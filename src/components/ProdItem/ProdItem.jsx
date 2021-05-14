export default function ProdItem({ id, name, category, variation, quantity, handleAddToOrder }) {
  return(
    <div className="card mb-3 pb-5">
      <div className="card-content">
        <p className="content is-size-5 has-text-weight-semibold">{category} {name}</p>
        {/* vv TODO VARIATIONS vv */}
        {/* <p className="content">{variation.variationTitle}</p> */}
        <div className="content">
          <p className="content is-pulled-left">Current Qty: {quantity}</p>
          <button className="button is-small is-pulled-right" onClick={() => handleAddToOrder(id)}>+</button>
        </div>
      </div>
    </div>
  )
}