import React from "react";
import SubTotal from "../SubTotal/SubTotal";

import "./Checkout.scss";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <h2>Your shopping cart</h2>
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
