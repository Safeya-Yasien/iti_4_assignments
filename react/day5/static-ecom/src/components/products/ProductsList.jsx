import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { api } from "@/api/api";
import SkeletonLoader from "../SkeletonLoader";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/products");
      setProducts(response.data.products);
    } catch (error) {
      setError("Failed to load products. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <SkeletonLoader />;

  if (error) return <div className="text-center py-20">{error}</div>;

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
