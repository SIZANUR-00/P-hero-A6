const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-bold mb-1">{product.icon} {product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="font-semibold mb-2">৳ {product.price}</p>
      <p className="text-sm mb-2">{product.period}</p>
      <p className="text-sm mb-2">{product.tagType}</p>
      <ul className="text-xs mb-2 list-disc list-inside">
        {product.features.map((f, idx) => <li key={idx}>{f}</li>)}
      </ul>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;