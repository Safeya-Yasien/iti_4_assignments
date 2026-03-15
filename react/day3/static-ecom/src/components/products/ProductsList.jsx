import { useSearchParams } from "react-router";
import Product from "./Product";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const products = [
    { id: "101", title: "Wireless Headphones", price: 99 },
    { id: "102", title: "Cotton T-Shirt", price: 25 },
    { id: "103", title: "Smart Watch", price: 199 },
    { id: "104", title: "Denim Jacket", price: 80 },
  ];

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {category ? `Featured ${category} Products` : "Featured Products"}
            </h2>
            <p className="text-gray-600">Explore our latest arrivals</p>
          </div>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setSearchParams({ category: "electronics" })}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Show Electronics
            </button>
            <button
              onClick={() => setSearchParams({ category: "clothing" })}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Show Clothing
            </button>
            <button
              onClick={() => setSearchParams({})}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <Product key={p.id} id={p.id} title={p.title} price={p.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
