import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from "./cartSlice";
import { clearCart } from "./cartSlice";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import EmptyCart from "./EmptyCart";
const Cart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-2">
      <Link
        className="text-sm text-blue-400 underline-none transition-all duration-300 hover:underline hover:text-blue-500"
        to="/menu"
      >
        &larr; Back to the menu
      </Link>
      <h1 className="text-2xl font-semibold text-stone-500 mt-10">
        Your cart, Alexandros
      </h1>
      <ul className="divide-y divide-stone-500 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-4">
        <Button type="primary">Order now</Button>
        <Button type="secondary" onClick={() => dispatch(clearCart(getCart))}>
          Clear set
        </Button>
      </div>
    </div>
  );
};
export default Cart;
