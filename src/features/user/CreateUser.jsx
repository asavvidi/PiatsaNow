import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddress,
  updateEmail,
  updateName,
  updatePhonenumber,
} from "./userSlice";
import { useEffect, useState } from "react";
const CreateUser = () => {
  const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      str
    );

  const [error, setError] = useState("");
  const {
    username,
    email,
    phoneNumber,
    address,
    position,
    status: addressStatus,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPhone(phoneNumber)) {
      setError(
        "Please provide a valid phone number. We may need to contact you during delivery."
      );
      return;
    }
    setError("");
    navigate("/menu");
  };

  return (
    <>
      <form
        className="flex flex-col gap-2  items-center"
        onSubmit={handleSubmit}
      >
        <p className="mb-4 text-sm md:text-2xl font-semibold text-stone-300">
          👋Welcome! Please provide us with the nessecary information.
        </p>
        <input
          type="text"
          placeholder="Your Full name"
          value={username}
          className="border w-90 focus:outline-none text-sm border-stone-200 rounded-full px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 focus:scale-125 md:px-6 md:py-4 mb-2"
          onChange={(e) => dispatch(updateName(e.target.value))}
        />
        <input
          type="text"
          placeholder="Your Email"
          value={email}
          className=" border w-90 focus:outline-none text-sm border-stone-200 rounded-full px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 md:px-6 md:py-4 focus:scale-125 mb-2"
          onChange={(e) => dispatch(updateEmail(e.target.value))}
        />
        <div>
          <input
            type="text"
            placeholder="Your Phone number"
            value={phoneNumber}
            className="border w-90 focus:outline-none text-sm border-stone-200 rounded-full md:px-6 md:py-4 px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 focus:scale-125 mb-2"
            onChange={(e) => dispatch(updatePhonenumber(e.target.value))}
          />
          {error && (
            <p className="text-sm sm:text-md text-stone-600 font-semibold">
              {error}
            </p>
          )}
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Your Address"
            value={address}
            disabled={isLoadingAddress}
            className="border w-90 focus:outline-none text-sm border-stone-200 rounded-full md:px-6 md:py-4 px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 focus:scale-125 mb-2"
          />
          <span className="absolute right-[5px] z-50">
            <Button
              type="small"
              onClick={(e) => {
                e.preventDefault();
                dispatch(fetchAddress());
              }}
            >
              Get address
            </Button>
          </span>
        </div>
        {username && email && phoneNumber && address && (
          <Button type="primary">Start ordering</Button>
        )}
      </form>
    </>
  );
};

export default CreateUser;
