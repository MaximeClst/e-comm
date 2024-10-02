import { Lock, LogIn, LogOut, ShoppingCart, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = true;
  const isAdmin = true;

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
      <div className="container mx-auto px-4 py-3">
        <Link
          to="/"
          className="text-2xl font-bold text-emerald-400 items-center space-x-2 flex"
        >
          Name
        </Link>
        <nav className="flex flex-wrap items-center gap-4">
          <Link
            to={"/"}
            className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          {user && (
            <Link
              to={"/cart"}
              className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              <ShoppingCart className="inline-block mr-1 group-hover:text-emerald-400" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
                3
              </span>
            </Link>
          )}
          {isAdmin && (
            <Link className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 rounded-md font-medium transition duration-300 ease-in-out flex items-center">
              <Lock className="inline-block mr-1" size={18} />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          )}

          {user ? (
            <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out">
              <LogOut size={18} />
              <span className="hidden sm:inline ml-2">Logout</span>
            </button>
          ) : (
            <>
              <Link
                to={"/signup"}
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
              >
                <UserPlus size={18} className="mr-2" />
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
              >
                <LogIn size={18} className="mr-2" />
                Login
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
