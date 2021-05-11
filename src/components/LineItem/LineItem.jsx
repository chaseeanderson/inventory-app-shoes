export default function LineItem({ quantity, category, name }) {
  return(
    <div className="card">
      <div className="card-content">
        <p className="content">{category}</p>
        <p className="content">{name}</p>
        {/* this is an array vv */}
        {/* <p className="content">{variation.variationTitle}</p> */}
        <p className="content">Qty: {quantity}</p>
      </div>
    </div>
  );
}