const Navbar = ({ cartCount, setView }) => {
  return (
    <div className="flex justify-between items-center bg-blue-600 text-white p-4">
      <h1 className="font-bold text-xl">DigiTools</h1>
      <div>
        <button
          onClick={() => setView("products")}
          className="mr-4 hover:bg-blue-500 px-3 py-1 rounded"
        >
          Products
        </button>
        <button
          onClick={() => setView("cart")}
          className="hover:bg-blue-500 px-3 py-1 rounded"
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default Navbar;