import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Menu = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Cookies", count: 5, order: false },
    { id: 2, name: "Cola", count: 2, order: false },
  ]);
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
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.count}</td>
              <td>
                <FontAwesomeIcon icon={faCartPlus} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
