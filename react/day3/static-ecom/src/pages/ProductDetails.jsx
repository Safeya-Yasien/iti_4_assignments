import { Link, useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Fetching data for Product Id:
        <span className="text-green-600">{id}</span>
      </h2>
      <Link to="/" className="text-green-600 font-bold hover:underline">
        Back to Home
      </Link>
    </div>
  );
};
export default ProductDetails;
