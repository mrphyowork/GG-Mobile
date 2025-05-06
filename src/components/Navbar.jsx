import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = ({ image }) => {
  const location = useLocation();
  // console.log(location.pathname);

  const pathname = location.pathname;

  const { cartItems, favoriteIds } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-navbar py-2 px-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={image}
            alt="Gadget Galaxy Logo"
            style={{
              height: "60px",
              marginRight: "10px",
              borderRadius: "50%",
            }}
          />
          Gadget Galaxy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={"nav-link " + (pathname === "/" && "active")}
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className={"nav-link " + (pathname === "/cart" && "active")}
              >
                Cart{" "}
                {totalItemCount > 0 && (
                  <span className="badge bg-danger">{totalItemCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favorite"
                className={"nav-link " + (pathname === "/favorite" && "active")}
              >
                Favorite
                {favoriteIds.length > 0 && (
                  <span className="badge bg-danger">{favoriteIds.length}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
