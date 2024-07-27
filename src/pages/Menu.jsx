import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = (props) => {
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
          {props.products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}$</td>
              <td>
                <FontAwesomeIcon
                  onClick={() => props.orderFood(product.id)}
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
