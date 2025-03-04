import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
const CartOverview = () => {
  const totalCart = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCart) return null;
  return (
    <div className="flex items-center text-stone-100 justify-between bg-stone-800 h-14 px-4 py-2 md:px-6 md:py-4 md:text-xl text-md font-semibold">
      <p className="flex gap-6 ">
        <span>{totalCart} Items</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="cart">Open Cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
