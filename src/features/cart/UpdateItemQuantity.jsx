import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQuantity } from "./cartSlice";
import { decreaseItemQuantity } from "./cartSlice";
const UpdataItemQuantity = ({ foodId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 mr-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(foodId))}
      >
        -
      </Button>
      <span className="text-md font-semibold">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(foodId))}
      >
        +
      </Button>
    </div>
  );
};
export default UpdataItemQuantity;
