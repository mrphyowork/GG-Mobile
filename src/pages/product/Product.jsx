import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { RxFontStyle } from "react-icons/rx";

const Product = ({ item }) => {
  const { cartItems, addToCart, toggleFavorite, favoriteIds } =
    useContext(CartContext);
  const { id, productName, productImage, price } = item;
  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);

  return (
    <div className="card py-3" style={{ width: "17rem" }}>
      <img src={productImage} className="card-img-top" alt={productName} />
      <div className="card-body text-center">
        <h5 className="card-title">
          <Link
            to={`/product/${id}`}
            className="btn text-primary"
            style={{ fontWeight: "bold" }}
          >
            {productName}
          </Link>
        </h5>
        <p className="card-text">{price}</p>
        <button
          className="btn btn-secondary me-4 position-relative"
          style={{ fontSize: "x-large" }}
          onClick={() => addToCart(id)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
        </button>
        <button
          className={"btn btn-secondary " + (favoriteId && "text-danger")}
          style={{ fontSize: "x-large" }}
          onClick={() => toggleFavorite(id)}
        >
          <MdFavorite />
        </button>
      </div>
    </div>
  );
};

export default Product;
