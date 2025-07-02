import { Outlet, Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Menu from "../assets/menu.png";
import setings from "../assets/account-settings.png"
import { useUserContext } from "../Context/UserContextProvider";
import userAxiosClient from "../Components/userAxiosClient";
import Swal from "sweetalert2";

function HomeLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {token,getToken,user,setUser} = useUserContext();

  const [isloading,setIsLoading] = useState(false);

  //show user when refresh

  useEffect(() => {
    if(token){
        setIsLoading(true);
        userAxiosClient.get('/user')
          .then(({ data }) => {
            setUser(data);
            setIsLoading(false);
            console.log(data);
          })
          .catch((error) => {
            console.error("Unauthenticated or error fetching user:", error);
            localStorage.removeItem('admin_token')
          });
        }
  }, []);

  function logout(e){
    e.preventDefault();
    
      userAxiosClient.post('user/logout')
        .then(({data}) => {
          setUser({})
          getToken(null)
          console.log(data.message)
      })
  }

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
                <>
                  <div
                    className="flex text-white font-semibold transition"
                  >
                    <Link className=" mr-6 flex text-2xl hover:cursor-pointer" to='/user'><img className="w-9 h-9"  src={setings} alt="icon" />{user.name}</Link>
                    <form onSubmit={logout}>
                      <button type="submit" className="bg-red-500  text-2xl pr-3 pl-3 rounded hover:cursor-pointer">Log out</button>
                    </form>
                    
                  </div>
                </>
              ) : (
                <>
                <div className="grid sm:grid-cols-1 md:grid-cols-2">
                    <Link className="text-white bg-blue-600 hover:bg-blue-700 py-1 px-3 text-sm mb-1 rounded sm:py-1 sm:px-5 sm:text-[15px] md:py-2 md:px-5 md:text-xl mr-3"to="/login">Login</Link>
                    <Link  className="text-white bg-blue-600 hover:bg-blue-700 py-1 px-3 text-sm mb-1 rounded sm:py-1 sm:px-5 sm:text-[15px] md:py-2 md:px-5 md:text-xl mr-3" to="/signup">Signup</Link>  
                </div>
                </>
              )}

            {/* Hamburger Button (mobile only) */}
            {/*show only when user is authenticated */}
            {token && 
             <>
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
             </>  
            }



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
        {/* Optional to show */}
        {token &&
        <>
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
        </>}
        
      </nav>


      {/* Main Content */}
      <main className="flex-grow bg-gray-100 transition">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;