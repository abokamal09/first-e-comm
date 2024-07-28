import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const getClasses = () => {
    return props.product.count === 0
      ? "badge bg-warning m-2"
      : "badge bg-primary m-2";
  };

  return (
    <div className="row">
      <div className="col-2">
        <span>
          <Link to={`/products/${props.product.id}`}>{props.product.name}</Link>
        </span>
      </div>
      <div className="col">
        <span className={getClasses()}>{props.product.count}</span>
        <button
          onClick={() => props.incFun(props.product.id)}
          className="btn btn-primary btn-sm mx-1"
        >
          +
        </button>
        <button
          onClick={() => props.deFun(props.product.id)}
          className="btn btn-primary btn-sm mx-1"
        >
          -
        </button>
        {/* <span style={{ cursor: "pointer" }} onClick={() => onDelete(product)}>
          <i className="fas fa-trash m-2"></i>
        </span> */}
      </div>
    </div>
  );
};

export default Product;
