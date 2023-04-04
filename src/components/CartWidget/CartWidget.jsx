import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
const CartWidget = () => {
  return (
    <div>
      <span>0</span>
      <BsFillCartCheckFill size={50} />
    </div>
  );
};

export default CartWidget;
