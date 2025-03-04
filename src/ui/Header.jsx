import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
const Header = () => {
  return (
    <header className="flex justify-between sm:px-[3rem] sm:py-[1.5rem] px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-300 border-b-amber-50 items-center gap-5">
      <Link
        to="/"
        className="font-semibold text-xl sm:text-[1.5rem] text-white tracking-wide uppercase font-robotoMono"
      >
        Piatsa Co.
      </Link>
      <img
        src="/Logo.png"
        alt="A logo image of the store"
        className="sm:w-[150px] sm:h-[80px] rounded-[50%] w-[100px] h-[80px]"
      />
      <SearchOrder />
    </header>
  );
};
export default Header;
