import { Outlet, Link } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-green-600 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo / Title */}
              <div className="flex-shrink-0 text-white font-extrabold text-xl">
                Milktea Order System
              </div>

              {/* Search Bar */}
              <form className="flex items-center w-full max-w-md mx-8">
                <input
                  type="text"
                  placeholder="Search Milktea..."
                  className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <button
                  type="submit"
                  className="bg-white text-green-700 font-semibold px-4 py-2 rounded-r-md hover:bg-green-100 transition"
                >
                  Search
                </button>
              </form>

              {/* User Link */}
              <Link
                to="/user"
                className="text-white font-semibold hover:text-gray-200 transition"
              >
                User
              </Link>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow bg-gray-100">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default HomeLayout;
