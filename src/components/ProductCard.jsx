import { FaCheck } from 'react-icons/fa';

const ProductCard = ({ product, onAddToCart }) => {
  const getTagColor = (tagType) => {
    switch(tagType) {
      case 'popular': return 'bg-orange-100 text-orange-700';
      case 'best seller': return 'bg-green-100 text-green-700';
      case 'new': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const formatPrice = () => {
    const { price, period } = product;
    if (period === 'monthly') return `$${price}/mo`;
    if (period === 'yearly') return `$${price}/yr`;
    return `$${price}`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="text-4xl group-hover:scale-110 transition-transform">
            {product.icon}
          </span>
          {product.tag && (
            <span className={`badge ${getTagColor(product.tagType)} border-0 px-3 py-2 text-xs font-bold rounded-full`}>
              {product.tag}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="mb-4">
          <span className="text-2xl font-bold text-indigo-600">{formatPrice()}</span>
        </div>

        <ul className="space-y-2 mb-5">
          {product.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
              <FaCheck className="text-indigo-500 text-xs" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full py-3 bg-indigo-50 text-indigo-700 border-2 border-indigo-200 hover:bg-indigo-600 hover:text-white rounded-xl transition-all font-semibold"
        >
          Buy Now →
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
