import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdataItemQuantity from "./UpdateItemQuantity";

const CartItem = ({ item }) => {
  const { foodId, name, quantity, unitPrice } = item;
  const totalPrice = unitPrice * quantity;
  return (
    <li className=" py-3 flex items-center justify-between">
      <p className="mb-1 text-stone-600">
        {quantity} x {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-md mr-2">{formatCurrency(totalPrice)}</p>
        <UpdataItemQuantity foodId={foodId} currentQuantity={quantity} />
        <DeleteItem foodId={foodId} />
      </div>
    </li>
  );
};

export default CartItem;
