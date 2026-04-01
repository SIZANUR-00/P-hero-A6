const Cart = ({ cart, removeItem, clearCart }) => (
  <div className="p-6">
    {cart.length === 0 ? (
      <p className="text-center text-gray-600">Cart is empty</p>
    ) : (
      <>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border p-3 mb-2 rounded">
            <span>{item.icon} {item.name} - ৳{item.price}</span>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="text-center mt-4">
          <button
            onClick={clearCart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>
        </div>
      </>
    )}
  </div>
);

export default Cart;