import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateEmail, updateName, updatePhonenumber } from "./userSlice";
import { useState } from "react";
const CreateUser = () => {
  const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      str
    );
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateName(username));
    dispatch(updateEmail(email));
    dispatch(updatePhonenumber(phoneNumber));
    setUsername("");
    setEmail("");
    setPhoneNumber("");
    navigate("/menu");
  };
  return (
    <form className="flex flex-col gap-2  items-center" onSubmit={handleSubmit}>
      <p className="mb-4 text-sm md:text-2xl font-semibold text-stone-300">
        👋Welcome! Please provide us with the nessecary information.
      </p>
      <input
        type="text"
        placeholder="Your Full name"
        value={username}
        className="border w-80 focus:outline-none text-sm border-stone-200 rounded-full px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 focus:scale-125 md:px-6 md:py-4 mb-2"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Email"
        value={email}
        className=" border w-80 focus:outline-none text-sm border-stone-200 rounded-full px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 md:px-6 md:py-4 focus:scale-125 mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Phone number"
        value={phoneNumber}
        className="border w-80 focus:outline-none text-sm border-stone-200 rounded-full md:px-6 md:py-4 px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 focus:scale-125 mb-2"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Address"
        className="border w-80 focus:outline-none text-sm border-stone-200 rounded-full md:px-6 md:py-4 px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 focus:scale-125 mb-2"
      />
      {username && email && phoneNumber && (
        <Button type="primary">Start ordering</Button>
      )}
    </form>
  );
};

export default CreateUser;
