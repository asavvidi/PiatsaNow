import { useState } from "react";
import { fakeData } from "./fakeData";
import MenuItem from "./MenuItem.jsx";
import getMenu from "../../services/apiMenu.js";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
const Menu = () => {
  const categories = [
    "Sandwiches",
    "Portions",
    "Salads",
    "Appetizer",
    "Drinks",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Sandwiches");
  const menu = useLoaderData();
  return (
    <div>
      <ul className="flex  mt-5 px-4 py-2 divide-x divide-stone-400 ">
        {categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={` text-[15px] cursor-pointer transition-all duration-300 hover:bg-yellow-300 hover:text-stone-100 font-semibold  md:px-8 md:text-2xl md:py-2 px-4 py-2 ${
                selectedCategory === category
                  ? `bg-yellow-400 text-stone-100 focus:outline-none focus:ring focus:ring-offset-2 focus:bg-yellow-400 focus:ring-yellow-300 focus:ring-opacity-50`
                  : ""
              }`}
            >
              {category}
            </button>
          );
        })}
      </ul>
      <ul className="divide-y divide-stone-200 gap-2  mt-5">
        {menu
          .filter((item) => item.category === selectedCategory)
          .map((food) => {
            return <MenuItem item={food} key={food.id} />;
          })}
      </ul>
    </div>
  );
};

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
