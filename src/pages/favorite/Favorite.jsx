import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import FavoriteItem from "./FavoriteItem";

const Favorite = () => {
  const { favoriteIds } = useContext(CartContext);

  return (
    <div className="container">
      <div className="products-title my-3">
        <h3>Favorite Items</h3>
      </div>
      <div className="products-list d-flex flex-wrap gap-2">
        {favoriteIds.map((fid) => {
          const product = PRODUCTS.find((product) => product.id === fid);
          return <FavoriteItem data={product} key={fid} />;
        })}
      </div>
    </div>
  );
};

export default Favorite;
