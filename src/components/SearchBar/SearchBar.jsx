export default function SearchBar({ handleChange }) {
  return(
    <input className="input" onChange={handleChange} type="text" />
  );
}