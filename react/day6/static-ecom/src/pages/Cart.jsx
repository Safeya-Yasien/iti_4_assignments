import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/store/cartSlice";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <FaShoppingCart className="mx-auto text-6xl text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your cart is empty
        </h2>
        <Link
          to="/products"
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-black text-gray-800 mb-8 text-center uppercase tracking-tighter">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-contain bg-gray-50 rounded-lg p-2"
              />

              <div className="ml-4 grow">
                <h3 className="font-bold text-gray-800 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-green-600 font-black">${item.price}</p>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="p-3 text-red-500 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
              >
                <FaTrash size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 text-gray-600">
            <span>Items:</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="border-t border-gray-100 my-4 pt-4 flex justify-between font-black text-xl text-gray-800">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors mt-4">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
