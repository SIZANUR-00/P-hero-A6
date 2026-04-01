import ProductCard from "./ProductCard";

const Products = ({ products, addToCart }) => (
  <div className="grid md:grid-cols-3 gap-6 p-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default Products;