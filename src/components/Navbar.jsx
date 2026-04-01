import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">⚡</span>
            <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ToolForge
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition font-medium">Products</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition font-medium">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition font-medium">Resources</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="indicator relative">
              <FaShoppingCart className="h-6 w-6 text-gray-600 cursor-pointer hover:text-indigo-600 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
            <button className="hidden sm:flex btn btn-sm bg-indigo-600 text-white border-0 hover:bg-indigo-700 rounded-full px-5 gap-2">
              <FaUser className="h-4 w-4" /> Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
