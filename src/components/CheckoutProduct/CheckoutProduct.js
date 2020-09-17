import React from "react";

import "./CheckoutProduct.scss";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    //remove item from cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt=""></img>

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="star" />
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
