import { addToCart } from "@/store/cartSlice";
import { FaPlus, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    thumbnail,
    price,
    discountPercentage,
    rating,
    brand,
    availabilityStatus,
    category,
  } = product;

  const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <Link
      to={`/products/${id}`}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />

        {availabilityStatus === "Low Stock" && (
          <div className="absolute bottom-0 left-0 right-0 bg-orange-500/90 text-white text-[10px] text-center py-1 backdrop-blur-sm">
            Only a few left!
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            {brand || category}
          </span>
          <div className="flex items-center gap-1 text-yellow-500">
            <span className="text-xs font-bold">{rating}</span>
            <FaStar />
          </div>
        </div>

        <h3 className="text-gray-800 font-bold text-md line-clamp-2 leading-tight mb-2 h-10">
          {title}
        </h3>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-gray-400 text-xs line-through">
              ${originalPrice}
            </p>
            <p className="text-2xl font-black text-green-600">${price}</p>
          </div>

          <button
            onClick={handleAddToCart}
            className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white hover:bg-green-600 transition-colors duration-300"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
