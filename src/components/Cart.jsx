import { FaTrash, FaShoppingBag } from 'react-icons/fa';

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-12 text-center">
        <div className="text-6xl mb-4">🛍️</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
        <p className="text-gray-500">Looks like you haven't added any tools yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FaShoppingBag className="text-indigo-600" />
          Your Cart
          <span className="text-sm bg-gray-100 px-3 py-1 rounded-full ml-2">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </span>
        </h2>
      </div>

      <div className="divide-y divide-gray-200">
        {cartItems.map((item) => (
          <div key={item.id} className="p-6 hover:bg-gray-50 transition">
            <div className="flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.period === 'monthly' ? 'Monthly' : item.period === 'yearly' ? 'Yearly' : 'One-time'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="font-bold text-indigo-600 text-lg">
                  ${item.price}{item.period === 'monthly' ? '/mo' : item.period === 'yearly' ? '/yr' : ''}
                </span>
                <button
                  onClick={() => onRemove(item.id, item.name)}
                  className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total</span>
          <span className="text-2xl font-bold text-gray-800">${totalPrice}</span>
        </div>
        <button
          onClick={onCheckout}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl text-lg font-semibold hover:shadow-xl transition"
        >
          Proceed to Checkout 🚀
        </button>
      </div>
    </div>
  );
};

export default Cart;
