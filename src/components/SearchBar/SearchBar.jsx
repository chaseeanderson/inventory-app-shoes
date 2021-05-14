export default function SearchBar({ handleChange }) {
  return(
    <p className="control has-icons-left">
      <input className="input" onChange={handleChange} type="text" />
      <span className="icon is-small is-left">
        <i class="fas fa-search"></i>
      </span>
    </p>
  );
}