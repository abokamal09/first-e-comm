import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Menu = () => {
  // Data Holder
  const [products, setProducts] = useState([
    { id: 1, name: "Cookies", price: 50, count: 5, order: false },
    { id: 2, name: "Cola", price: 30, count: 2, order: false },
  ]);

  // Methods
  const incFun = (productId) => {
    const updateProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, count: product.count + 1 };
      } else {
        return product;
      }
    });
    setProducts(updateProducts);
  };

  const orderFood = (productId) => {
    const updateState = products.map((product) => {
      if (product.id === productId) {
        return { ...product, order: !product.order };
      } else {
        return product;
      }
    });
    setProducts(updateState);
  };

  return (
    <div className="container mt-5">
      <h1>Menu</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th colSpan={2}>Price</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}$</td>
              <td>
                <FontAwesomeIcon
                  onClick={() => orderFood(product.id)}
                  icon={faCartPlus}
                  style={{
                    color: product.order ? "black" : "gray",
                    fontSize: "25px",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
