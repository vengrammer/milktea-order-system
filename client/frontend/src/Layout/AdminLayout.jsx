import { Outlet, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "../assets/menu.png";
import setings from "../assets/account-settings.png"
import { useAdminContext } from "../Context/AdminContextProvider";

function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const {admin,token} = useAdminContext();


  if(!token){
    return <Navigate to='/admin/login'/>
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-600 shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 text-white font-bold font-monospace text-2xl">
              Welcome Admin
            </div>

            {/* Right section: User / Auth Links + Hamburger */}
            <div className="flex items-center space-x-4">
              
                  <div className="flex text-white font-semibold transition">
                    <Link className=" mr-6 flex text-2xl hover:cursor-pointer" to='/user'><img className="w-9 h-9"  src={setings} alt="icon" /> {admin.fullname} </Link>
                    <form action="">
                      <button className="bg-red-500  text-2xl pr-3 pl-3 rounded hover:cursor-pointer">Log out</button>
                    </form>
                  </div>
             
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
        <Link to="/admin" className="text-xl block py-2 md:py-0 hover:text-green-700 font-semibold">
          Dashboard
        </Link>

        <Link to="/admin/milktea"  className="text-xl block py-2 md:py-0 hover:text-green-600 font-semibold" >
          Milktea
        </Link>

        <Link to="/admin/History" className="text-xl block py-2 md:py-0 hover:text-green-600 font-semibold">
          History
        </Link>

        <Link to="/admin/orders" className="text-xl block py-2 md:py-0 hover:text-green-600 font-semibold">
          Orders
        </Link>

        <Link to="/admin/users" className="text-xl block py-2 md:py-0 hover:text-green-600 font-semibold" >
          Users
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 transition">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;