import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../store/slices/cartSlice';

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Your Cart is Empty</h1>
        <p className="mt-4 text-gray-600">Browse the product list and add items to your cart.</p>
        <Link
          to="/"
          className="inline-flex mt-6 rounded-full bg-[#003d29] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="mt-2 text-sm text-gray-600">Review your selected products and manage your order.</p>
          </div>
          <div className="rounded-3xl bg-emerald-100 px-5 py-3 text-sm font-semibold text-emerald-800">
            Total: ${total}
          </div>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="grid gap-4 rounded-3xl border border-gray-200 bg-white p-5 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="flex items-center gap-4">
                <img src={item.thumbnail} alt={item.title} className="h-24 w-24 rounded-3xl object-cover border border-gray-100" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium text-gray-900 min-w-[2rem] text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-2 text-right md:text-left">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-xl font-bold text-gray-900">${item.price}</p>
                <p className="text-sm text-gray-500">Subtotal: ${(item.price * item.quantity)}</p>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="self-start rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-gray-900 px-6 py-6 text-white shadow-lg">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Order Summary</p>
              <p className="mt-2 text-2xl font-bold">${total.toFixed(2)}</p>
            </div>
            <button className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow hover:bg-emerald-600 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
