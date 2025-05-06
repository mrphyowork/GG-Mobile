import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdFavorite } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const FavoriteItem = ({ data, fid }) => {
  const { id, productName, productImage, price } = data;
  const { cartItems, addToCart, favoriteIds, toggleFavorite } =
    useContext(CartContext);

  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);

  return (
    <div className="card text-center py-3" style={{ width: "18rem" }}>
      <img src={productImage} className="card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">${price}</p>
        <button
          type="button"
          className="btn btn-secondary position-relative me-2"
          onClick={() => addToCart(id)}
        >
          <FontAwesomeIcon icon={faCartShopping} />

          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
        </button>
        <button
          type="button"
          className={
            "btn btn-secondary position-relative " +
            (favoriteId && "text-danger")
          }
          onClick={() => toggleFavorite(id)}
        >
          <MdFavorite />
        </button>
      </div>
    </div>
  );
};

export default FavoriteItem;
