
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-light" href="#">
          EShop
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
              <Link to="/" className="nav-link active text-light">Home</Link>
              <Link to="/cart" className="nav-link text-light">Cart</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
