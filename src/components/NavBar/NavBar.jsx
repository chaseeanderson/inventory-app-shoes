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
      <div className="navbar-menu">
        <div className="navbar-start">
          <p className="navbar-item">Welcome, {user.name}</p>
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