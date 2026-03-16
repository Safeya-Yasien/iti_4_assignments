import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { api } from "@/api/api";
import SkeletonLoader from "@/components/SkeletonLoader";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // just it depend on id
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <SkeletonLoader />;

  if (!product)
    return <div className="text-center py-20">Product not found.</div>;

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>{" "}
          /<span className="capitalize"> {product.category}</span> /
          <span className="text-gray-900 font-medium"> {product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>

          {/* Product Info Area */}
          <div className="">
            <span className="text-green-600 font-bold text-sm uppercase tracking-widest">
              {product.brand}
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md font-bold text-sm">
                ★ {product.rating}
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-500 font-medium">
                {product.stock} units in stock
              </span>
              <span
                className={`text-xs px-2 py-1 rounded ${product.availabilityStatus === "Low Stock" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
              >
                {product.availabilityStatus}
              </span>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-gray-900">
                  ${product.price}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  $
                  {(
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                  {Math.round(product.discountPercentage)}% OFF
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex gap-4 mt-8 ">
              <button className="cursor-pointer grow bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
