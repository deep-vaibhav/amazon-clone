import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import SubTotal from "../SubTotal/SubTotal";

import "./Checkout.scss";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <h2>Your shopping cart</h2>
        {cart.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
