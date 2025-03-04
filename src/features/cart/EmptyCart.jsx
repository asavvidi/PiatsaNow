import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className="px-4 py-2">
      <Link
        className="text-sm text-blue-400 underline-none transition-all duration-300 hover:underline hover:text-blue-500"
        to="/menu"
      >
        &larr; Back to the menu
      </Link>
      <p className="mt-2">
        Your cart is empty. Go back to menu and start ordering 💪
      </p>
    </div>
  );
};
export default EmptyCart;
