import { Form } from "react-router-dom";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { createOrder } from "../../services/apiMenu";
const CreateOrder = () => {
  const {
    username,
    phoneNumber,
    email,
    address,
    position,
    status: addressStatus,
  } = useSelector((state) => state.user);
  const totalPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  return (
    <div className="px-4 py-4">
      <h1 className="mb-10 text-xl sm:text-2xl font-semibold ">
        Ready to order?
      </h1>
      <Form method="POST">
        <div className="flex flex-col gap-4 mb-5 md:flex-row md:items-center ">
          <label className="sm:basis-50 sm:text-lg font-semibold text-stone-500">
            Username
          </label>
          <input
            type="text"
            name="customer"
            value={username}
            placeholder={username}
            className="grow border w-80 focus:outline-none text-sm border-stone-200 rounded-full px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 md:px-4 md:py-2  mb-2"
          />
        </div>
        <div className="flex flex-col gap-4 mb-5 md:flex-row md:items-center ">
          <label className="sm:basis-50 sm:text-lg font-semibold text-stone-500">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder={email}
            className="grow border w-80 focus:outline-none text-sm border-stone-200 rounded-full px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 md:px-4 md:py-2  mb-2"
          />
        </div>
        <div className="flex flex-col gap-4 mb-5 md:flex-row md:items-center ">
          <label className="sm:basis-50 font-semibold text-stone-500 sm:text-lg">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            value={phoneNumber}
            placeholder={phoneNumber}
            className="grow border w-80 focus:outline-none text-sm border-stone-200 rounded-full px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 md:px-4 md:py-2  mb-2"
          />
        </div>
        <div className="flex flex-col gap-4 mb-5 md:flex-row md:items-center ">
          <label className="sm:basis-50 sm:text-lg font-semibold text-stone-500">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={address}
            placeholder={address}
            disabled={true}
            className="grow border w-80 focus:outline-none text-sm border-stone-200 rounded-full px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 md:px-4 md:py-2  mb-2"
          />
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position?.latitude && position?.longitude
                ? `${position.latitude} ${position.longitude}`
                : ``
            }
          />
          <input type="hidden" name="price" value={totalPrice} />
          <Button type="primary">
            Order now for {formatCurrency(totalPrice)}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
  };
  const newOrder = await createOrder(order);
  console.log(newOrder);
}

export default CreateOrder;
