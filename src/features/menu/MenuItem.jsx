import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdataItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../cart/DeleteItem";
const MenuItem = ({ item }) => {
  const { id, category, name, ingredients, price: unitPrice, imageUrl } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = {
      foodId: id,
      category,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2 px-2">
      <img src={item.imageurl} alt={item?.name} className="h-24 w-24" />
      <div className="flex flex-col grow pt-0.5">
        <p className="text-sm md:text-lg">{item.name}</p>
        <p className="text-sm text-stone-400 capitalize italic">
          {ingredients?.join(", ")}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <p className="md:text-md text-sm">{formatCurrency(unitPrice)}</p>
          {isInCart && (
            <div className="flex gap-2">
              <UpdataItemQuantity
                foodId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem foodId={id} />
            </div>
          )}
          {!isInCart && (
            <Button type="small" onClick={handleAdd}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};
export default MenuItem;
