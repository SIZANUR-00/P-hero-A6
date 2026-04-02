import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Products from './components/Products';
import Cart from './components/Cart';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import productsData from './data/products.json';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('product');
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('digiToolsCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('digiToolsCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      toast.info(`${product.name} is already in your cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      setCartItems([...cartItems, product]);
      toast.success(`✨ ${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const removeFromCart = (id, name) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.warn(`🗑️ ${name} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty! Add some products first.", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    
    setCartItems([]);
    toast.success("🎉 Thank you for your purchase! Your order has been confirmed.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      
      {/* Toggle Buttons */}
      <div className="flex justify-center mt-12 mb-8 gap-4">
        <button
          onClick={() => setActiveTab('product')}
          className={`px-8 py-3 rounded-full font-bold text-base transition-all duration-300 ${
            activeTab === 'product'
              ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          📦 Products
        </button>
        <button
          onClick={() => setActiveTab('cart')}
          className={`px-8 py-3 rounded-full font-bold text-base transition-all duration-300 ${
            activeTab === 'cart'
              ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🛒 Cart ({cartItems.length})
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'product' ? (
          <Products products={productsData} onAddToCart={addToCart} />
        ) : (
          <Cart 
            cartItems={cartItems} 
            onRemove={removeFromCart} 
            onCheckout={handleCheckout} 
          />
        )}
      </div>

      <Pricing onTabChange={setActiveTab} />
      <Footer />
    </div>
  );
}

export default App;
