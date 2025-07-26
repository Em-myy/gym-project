import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex flex-col gap-y-6 md:flex-row justify-around pt-6 items-center ">
      <div>
        <Link to="/" className="text-5xl cursor-pointer font-bold">
          MaxFit
        </Link>
      </div>

      <div className="flex flex-col items-center lg:flex-row justify-between gap-x-8">
        <Link to="/" className="text-2xl hover:text-red-700 cursor-pointer">
          Home
        </Link>
        <Link
          to="/about"
          className="text-2xl hover:text-red-700 cursor-pointer"
        >
          About Us
        </Link>
        <Link
          to="/services"
          className="text-2xl hover:text-red-700 cursor-pointer"
        >
          Our Services
        </Link>
      </div>

      <div>
        <Link to="/sign-up">
          <h2 className="text-2xl border-4 p-6 border-red-900 rounded-full bg-red-900 cursor-pointer hover:text-3xl">
            Join Us Now
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
