const Button = ({ children, type, disabled, to, onClick }) => {
  const base =
    "text-sm  transition-all duration-300 bg-yellow-400 border-none focus:ring-2 focus:ring-yellow-300 focus:bg-yellow-400 disabled:cursor-not-allowed cursor-pointer focus:outline-none font-semibold hover:bg-yellow-300 text-stone-800 focus:ring-offset-2 rounded-full ";
  const styles = {
    primary: base + "px-4 py-2 md:px-6 md:py-4",
    secondary:
      "transition-all-colors text-sm inline-block rounded-full border-2 border-stone-300 bg-transparent font-semibold tracking-wide text-stone-400 duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-yellow-300 px-4 focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:text-stone-800 focus:outline-none disabled:cursor-not-allowed py-2 md:px-6 md:py-4",
    small: base + "px-4 py-2 text-sm md:px-5 md:py-2.5",
    round: base + "px-2.5 py-1 text-sm md:px-3.5 md:py-2",
  };

  if (to)
    return (
      <Link disabled={disabled} to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
