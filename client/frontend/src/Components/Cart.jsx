import darkchocolate from "../assets/Dark chocolate.png";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContextProvider";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import userAxiosClient from "./userAxiosClient";
function Cart(){
    const {token, user} = useUserContext();
    const navigate = useNavigate();

    //for cart
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);


    //redirect the user to home if not logged in
    useEffect(() => {
        if (!token) {
          navigate('/');
        }
      }, [token, navigate]); // Only runs once on mount
      
      //Show the milktea in the cart of the user
      useEffect(() => {
        if (user?.id) {
          getTheMilktea();
        }
      }, [user]);


      async function getTheMilktea(){
        setLoading(true)
        try{
          const response = await userAxiosClient.get(`http://127.0.0.1:8000/api/user/cart/show/${user.id}`)
          setCartItems(response.data.cart)
          setLoading(false)
          console.log("this is the cart",response.data.cart)
        }catch(err){
          const error = err.response?.data || err.message
          console.log(error)
          setLoading(false)
        }
      }
      if (!token) {
        return null; // Avoid rendering anything while redirecting
      }
    //remove item from cart
    function removeToCart(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
          }).then((result) => {
            if (result.isConfirmed) {
              userAxiosClient.delete(`http://127.0.0.1:8000/api/user/cart/${id}`, {
              }).then(() => {
                Swal.fire(
                  'Removed!',
                  'Your item has been removed from the cart.',
                  'success'
                );
                getTheMilktea(); // Refresh the cart items
              }).catch(err => {
                Swal.fire(
                  'Error!',
                  'There was an error removing the item from the cart.',
                  'error'
                );
              });
            }
          });
    }

    return(
     <>
       <div className="flex flex-col md:flex-row items-center justify-between max-w-screen px-5 my-8">
          <h1 className="text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
            My Milktea Carts
          </h1>
    
          {/* Search Bar */}
          <form className="flex items-center w-full max-w-md">
            <input
              type="text"
              placeholder="Search Milktea..."
              className="w-full px-4 py-2 rounded border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-r hover:bg-blue-800 hover:cursor-pointer transition"
            >
              Search
            </button>
          </form>
        </div>
    
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center px-4 ">
            {/* show user milktea*/}
            {cartItems.map(m => (
              <div key={m.id} className="bg-white shadow-lg rounded-2xl overflow-hidden w-[260px] max-w-sm p-4 hover:shadow-xl transition-shadow">
                <img
                  src={m.milktea?.image}
                  alt={m.milktea?.flavor}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-gray-800">{m.milktea?.flavor}</h2>
                  <p className="text-gray-600 mt-2">Size: {m.size}</p>
                  <p className="text-gray-600 mt-2">Quantity: {m.quantity}</p>
                  <p className="text-gray-600 mt-2">Total Price: {m.total_price}</p>
                  <p className="m-2">
                    Available: <span className="text-green-600 font-semibold">
                      {m.milktea?.available ? 'Available' : 'Not Available'}
                    </span>
                  </p>
                  <div className="mt-4 space-y-2">
                    <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                      Order
                    </button>
                    <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition" onClick={() => removeToCart(m.id)}>
                      Remove to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </>)
}
export default Cart;