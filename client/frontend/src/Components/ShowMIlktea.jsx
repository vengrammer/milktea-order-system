import { useEffect, useState } from "react";
import axios from "axios";
import {useUserContext} from "../Context/UserContextProvider";
import Swal from 'sweetalert2'

function ShowMilktea(){

  const [milktea, setMilkteas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const [milkteaSelected, setMilkteaSelected] = useState([]);
  const {token} = useUserContext()
  useEffect(() => {
    getTheMilktea()
  },[])

   async function getTheMilktea(){
    setLoading(true)
    try{
      const response = await axios.get("http://127.0.0.1:8000/api/user/milkteas")
      setMilkteas(response.data.milktea)
      setLoading(false)
    }catch(err){
      const error = err.response?.data || err.message
      console.log(error)
      setLoading(false)
    }
   }


   function submitOrder(){
    if(!token){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must be login to order!",
      });
      return null;
    }
    
   }

   function submitAddToCart(m){
      if(!token){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must be login to add to cart!",
        });
        return;
      }
      setAddToCart(true);
      setMilkteaSelected(m)
   }
    return(
      <>

      {loading ? 
            <div className="text-center justify-center align-center">
                <h1 className="text-2xl">Loading...</h1>
            </div>
        :
        <>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-screen px-5 my-8">
            <h1 className="text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
              MilkTea Available
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
            {/*show AddToCart*/}
              {addToCart && <div className=" bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h1 className="text-xl font-bold text-center mb-3 text-gray-700">Add to Cart</h1>
              <img
                src={milkteaSelected.image}
                alt="milkteaImage"
                className="w-full h-48 object-cover rounded-lg"
                />
              <form>
                <div className="mb-4 text-left">
                  <label htmlFor="fullname" className="block text-gray-600 mb-2">
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mb-4 text-left">
                  <label htmlFor="address" className="block text-gray-600 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mb-4 text-left">
                  <label htmlFor="number" className="block text-gray-600 mb-2">
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mb-4 text-left">
                  <label htmlFor="email" className="block text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                >
                    Submit
                </button>
              </form>
              </div>}
               {/*show MIlktea */}
            {milktea.map(m => 
            (<div key={m.id} className="bg-white shadow-lg rounded-2xl overflow-hidden w-[260px] max-w-sm p-4 hover:shadow-xl transition-shadow">
              <img
                src={m.image}
                alt="Wintermelon"
                 className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-gray-800">{m.flavor}</h2>
                  <p className="text-gray-600 mt-2">Price:</p>
                  <ul className="text-gray-700 ml-4 list-disc">
                  <li>Large - {m.price_large} pesos</li>
                  <li>Medium - {m.price_medium} pesos</li>
                  <li>Small - {m.price_small} pesos</li>
                  </ul>
                  <p className="m-2">Available: <span className="text-green-600 font-semibold">{m.available? 'Available' : 'Not Available'}</span></p>
                  <div className="mt-4 space-y-2">
                  <button onClick={() => submitAddToCart(m)} className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                    Add to cart
                  </button>
                  <button onClick={submitOrder} className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                    Order
                  </button>
              </div>
            </div>
          </div> ))}
          
        </div>
        
        </>} 
      </>
    )
}
export default ShowMilktea;