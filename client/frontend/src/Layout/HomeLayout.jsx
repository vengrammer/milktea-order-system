import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Menu from "../assets/menu.png";
import setings from "../assets/account-settings.png"

function HomeLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-600 shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 text-white font-bold font-monospace text-2xl">
              MilkTea Order System
            </div>

            {/* Right section: User / Auth Links + Hamburger */}
            <div className="flex items-center space-x-4">
              {token ? (
                <Link
                  to="/user"
                  className="flex text-white font-semibold hover:text-gray-200 transition"
                >
                  <button className="text-2xl pr-3">User</button>
                  <img className="w-10 h-10"  src={setings} alt="icon" />
                </Link>
              ) : (
                <>
                  <button className="text-white">Login</button>
                  <button className="text-white">Sign Up</button>
                </>
              )}

              {/* Hamburger Button (mobile only) */}
              <button
                className="text-white md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <div className="w-10 h-10 flex items-center justify-center bg-red-500 rounded">
                    X
                  </div>
                ) : (
                  <img
                    src={Menu}
                    alt="menu"
                    className="w-8 h-8 hover:cursor-pointer"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        className={`bg-white md:bg-transparent md:flex md:space-x-8 px-4 py-4 md:py-2 transition-all duration-300 ease-in-out justify-center ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <Link
          to="/"
          className="text-xl block py-2 md:py-0 hover:text-green-700 font-semibold"
        >
          Home
        </Link>
        <Link
          to="/carts"
          className="text-xl block py-2 md:py-0 hover:text-green-600 font-semibold"
        >
          Cart
        </Link>
        <Link
          to="/orders"
          className="text-xl block py-2 md:py-0 hover:text-green-600 font-semibold"
        >
          Orders
        </Link>
        <Link
          to="/history"
          className="text-xl block py-2 md:py-0 hover:text-green-600 font-semibold"
        >
          History
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
