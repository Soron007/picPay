import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  
  const { pathname } = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);

  return (
    <nav
      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-3 py-2 sm:py-3 ${
        pathname === "/seller/profile" || pathname === "/buyer/profile"
          ? "hidden"
          : "fixed"
      } top-0 left-0 right-0 shadow-md gap-2 sm:gap-0 z-30 bg-white`}
    >
      {/* logo and site name */}
      <div className='flex justify-between items-center className="hover: text-black cursor-pointer sm:p-2"'>
        {/* I will add the image here later */}
        <img
          src="/picpay_logo.jpg"
          alt="image broken"
          className="w-[65px] mix-blend-hard-light"
        />
        <Link to={"/"} className="font-bold text-3xl">
          PicPay
        </Link>
      </div>
      {/*List of Other tabs */}
      <ul className="flex gap-5 text-lg font-semibold text-gray-400 ml-5 sm:ml-0">
        <Link to={"/"} className="hover:text-black cursor-pointer sm:p-2">
          About
        </Link>
        <Link to={"/"} className="hover:text-black cursor-pointer sm:p-2">
          Contact
        </Link>
        {!isAuthenticated ? (
          <>
            <Link
              to={"/login"}
              className="hover:text-black cursor-pointer sm:p-2"
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="hover:text-black cursor-pointer sm:p-2"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <Link
            to={`/${role}/profile`}
            className="hover:text-black cursor-pointer sm:p-2"
          >
            Profile
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
