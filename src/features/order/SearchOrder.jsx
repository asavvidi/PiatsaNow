const SearchOrder = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search your order"
        className="text-sm px-4 py-2 rounded-2xl focus:w-40 focus:ring-2 bg-yellow-50 w-28 sm:w-72 transition-all duration-300 focus:ring-opacity-50 placeholder:text-stone-400 focus:bg-yellow-100 sm:focus:w-72 focus:outline-none focus:ring-yellow-500 "
      />
    </form>
  );
};

export default SearchOrder;
