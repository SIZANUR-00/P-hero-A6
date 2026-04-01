import { useState } from "react";
import products from "./data/products.json";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (item) => {
    setCart([...cart, item]);
    toast.success("Added to cart");
  };

  const removeItem = (id) => {
    setCart(cart.filter((i) => i.id !== id));
    toast.error("Removed from cart");
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Checkout complete");
  };

  return (
    <>
      <Navbar cartCount={cart.length} setView={setView} />

      <Banner />
      <Stats />

      <div className="text-center mt-6">
        <button
          onClick={() => setView("products")}
          className="mr-4 bg-gray-300 px-4 py-1 rounded"
        >
          Products
        </button>
        <button
          onClick={() => setView("cart")}
          className="bg-gray-300 px-4 py-1 rounded"
        >
          Cart
        </button>
      </div>

      {view === "products" ? (
        <Products products={products} addToCart={addToCart} />
      ) : (
        <Cart cart={cart} removeItem={removeItem} clearCart={clearCart} />
      )}

      <Pricing />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;