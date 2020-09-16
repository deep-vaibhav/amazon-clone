import React from "react";

import "./Product.scss";
import StarIcon from "@material-ui/icons/Star";
import prodImg from "../../assets/products/tagr.jpg";

function Product({ title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="star" />
            ))}
        </div>
      </div>

      <img src={image} alt="prod" />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
