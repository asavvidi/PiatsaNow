import CreateUser from "../features/user/CreateUser";

const Home = () => {
  return (
    <div className="mt-[2rem] text-center sm:mt-[3rem] px-5">
      <h1 className="mb-[2rem] text-center font-semibold text-2xl md:text-3xl text-stone-500">
        The best gyros in Stavros Thessalonikis <br />
        <span className="text-yellow-300 mt-[2rem]">
          Don't hesitate and order now!
        </span>
      </h1>
      <CreateUser />
    </div>
  );
};

export default Home;
