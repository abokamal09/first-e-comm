import { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";

function App() {
  // Data Holder
  const [products, setProducts] = useState([
    { id: 1, name: "Cookies", price: 50, count: 5, order: false },
    { id: 2, name: "Cola", price: 30, count: 2, order: false },
    { id: 3, name: "Chips", price: 40, count: 10, order: false },
    { id: 4, name: "Chocolate", price: 70, count: 8, order: false },
    { id: 5, name: "Juice", price: 20, count: 15, order: false },
    { id: 6, name: "Water", price: 10, count: 20, order: false },
    { id: 7, name: "Sandwich", price: 60, count: 6, order: false },
    { id: 8, name: "Cake", price: 90, count: 3, order: false },
    { id: 9, name: "Ice Cream", price: 80, count: 7, order: false },
    { id: 10, name: "Fruit", price: 25, count: 12, order: false },
    { id: 11, name: "Burger", price: 55, count: 10, order: false },
    { id: 12, name: "Pizza", price: 100, count: 4, order: false },
    { id: 13, name: "Pasta", price: 45, count: 9, order: false },
    { id: 14, name: "Salad", price: 35, count: 13, order: false },
    { id: 15, name: "Donuts", price: 65, count: 7, order: false },
    { id: 16, name: "Muffins", price: 40, count: 11, order: false },
    { id: 17, name: "Tacos", price: 50, count: 5, order: false },
    { id: 18, name: "Bagels", price: 30, count: 6, order: false },
    { id: 19, name: "Nuggets", price: 75, count: 8, order: false },
    { id: 20, name: "Sushi", price: 120, count: 2, order: false },
    { id: 21, name: "Hot Dog", price: 25, count: 15, order: false },
    { id: 22, name: "Spring Rolls", price: 40, count: 10, order: false },
    { id: 23, name: "Goulash", price: 60, count: 6, order: false },
    { id: 24, name: "Paella", price: 110, count: 3, order: false },
    { id: 25, name: "Crepes", price: 50, count: 12, order: false },
    { id: 26, name: "Waffles", price: 55, count: 7, order: false },
    { id: 27, name: "Brownies", price: 70, count: 5, order: false },
    { id: 28, name: "Pancakes", price: 45, count: 14, order: false },
    { id: 29, name: "Milkshake", price: 35, count: 8, order: false },
    { id: 30, name: "Lemonade", price: 25, count: 18, order: false },
    { id: 31, name: "Tea", price: 15, count: 25, order: false },
    { id: 32, name: "Coffee", price: 40, count: 22, order: false },
    { id: 33, name: "Smoothie", price: 60, count: 11, order: false },
    { id: 34, name: "Macarons", price: 90, count: 4, order: false },
    { id: 35, name: "Cupcakes", price: 65, count: 6, order: false },
    { id: 36, name: "Granola Bars", price: 30, count: 20, order: false },
    { id: 37, name: "Popcorn", price: 25, count: 15, order: false },
    { id: 38, name: "Pretzels", price: 40, count: 12, order: false },
    { id: 39, name: "Samosas", price: 55, count: 8, order: false },
    { id: 40, name: "Tiramisu", price: 75, count: 5, order: false },
    { id: 41, name: "Baklava", price: 100, count: 3, order: false },
    { id: 42, name: "Fruit Salad", price: 45, count: 10, order: false },
    { id: 43, name: "Jelly", price: 35, count: 13, order: false },
    { id: 44, name: "Scones", price: 50, count: 7, order: false },
    { id: 45, name: "Custard", price: 60, count: 9, order: false },
    { id: 46, name: "Fried Chicken", price: 70, count: 5, order: false },
    { id: 47, name: "Steak", price: 120, count: 2, order: false },
    { id: 48, name: "Roast Beef", price: 95, count: 4, order: false },
    { id: 49, name: "Fish and Chips", price: 85, count: 6, order: false },
    { id: 50, name: "Ramen", price: 65, count: 8, order: false },
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
    <div>
      <Navbar />
      <Menu products={products} incFun={incFun} orderFood={orderFood} />
    </div>
  );
}

export default App;
