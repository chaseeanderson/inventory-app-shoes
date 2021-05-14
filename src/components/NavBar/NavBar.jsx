import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ setUser, user }) {
  
  function handleLogOut() {
    // delegate to the users-service
    userService.logOut();
    // update state will also cause a re-render
    setUser(null);
  }

  return(
    <nav className="navbar has-background-primary-light">
      <div className="navbar-brand">
        <Link className="navbar-item pr-0" to="/inventory">
          <img src="https://i.imgur.com/KVUPWHN.png" alt="running shoe icon" />
          <p className="navbar-item">Hello, {user.name}!</p>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/orders">My Orders</Link>
          <Link className="navbar-item" to="/inventory">My Kicks</Link>
          <Link className="navbar-item" to="/orders/new">Create Order</Link>
        </div>
        <div className="navbar-end">
          <Link className="navbar-item" to="" onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>
    </nav>
  );
}