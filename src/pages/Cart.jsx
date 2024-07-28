import React from "react";
import Product from "../components/Product";

const Cart = (props) => {
  return (
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      {props.products.map((product) => {
        if (product.order === true) {
          return (
            <Product
              key={product.id}
              product={product}
              incFun={props.incFun}
              deFun={props.deFun}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Cart;
