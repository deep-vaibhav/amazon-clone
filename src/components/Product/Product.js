import React from "react";

import "./Product.scss";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";

function Product({ title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    //dispatch the product into datalayer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
