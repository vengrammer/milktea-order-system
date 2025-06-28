import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import adminAxiosClient from "./adminAxiosClient";
function AdminMilktea(){
    const navigate = useNavigate()

   const [milktea, setMilkteas] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
    getTheMilktea()
   },[])

   function getTheMilktea(){
    setLoading(true)
    adminAxiosClient.get('admin/milkteas')
      .then(({data}) => {
        setMilkteas(data.milktea)
        console.log(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
   }

    function handleAddClick(){
      navigate('/admin/addmilktea')
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
          <button
                type="button"
                onClick={handleAddClick}
                className="bg-green-600 text-white font-semibold px-20 py-2 m-4 mb-5 rounded hover:bg-green-800 hover:cursor-pointer transition"
              >
                Add new milktea
              </button>
          {/*show MIlktea */}
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center px-4 ">
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
                  <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Edit
                  </button>
                  <button className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                    Delete
                  </button>
              </div>
            </div>
          </div> ))}
          
                 
          
          
                  
          
                   
        </div>

        </>
        
      }
      </>

      
    )
}
export default AdminMilktea;