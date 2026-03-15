import { Link } from "react-router";

const Product = ({ id, title, price }) => {
  return (
    <div className="p-4 border rounded-xl shadow-sm bg-white">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-green-600 font-bold mb-4">${price}</p>
      <Link
        to={`/products/${id}`}
        className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
      >
        View Details
      </Link>
    </div>
  );
};

export default Product;
