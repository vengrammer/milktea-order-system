import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContextProvider";
function History(){
    const {token} = useUserContext();
    const navigate = useNavigate();
    
      useEffect(() => {
        if (!token) {
          navigate('/');
        }
      }, [token, navigate]); // Only runs once on mount

      if (!token) {
        return null; // Avoid rendering anything while redirecting
      }
    return(
        <div className="w-full-screen">
            <div className="w-full-screen max-h-screen h-full sm:w-full md:w-200 lg:w-300 bg-gray-300 m-auto sm:rounded-2xl text-center p-2 mt-10" >
                <div className="flex bg-gray-200 rounded sm:text-xl m-5 p-5 justify-center">
                    <h1 className="pr-4 font-semibold" >Flavor: <span className="text-green-900">Macha</span></h1>
                    <h1 className="pr-4 font-semibold" >Size: <span className="text-green-900">Large</span></h1>
                    <h1 className="pr-4 font-semibold" >Item: <span className="text-green-900">3</span></h1>
                    <h1 className="pr-4 font-semibold" >Amount: <span className="text-green-900">200</span></h1>
                    <h1 className="pr-4 font-semibold" >Date: <span className="text-green-900">2025-10-12</span></h1>
                    <button className="text-white bg-red-500 hover:bg-red-600 hover:cursor-pointer py-2 px-3 rounded-xl">Delete</button>
                </div>

                <div className="flex bg-gray-200 rounded sm:text-xl m-5 p-5 justify-center">
                    <h1 className="pr-4 font-semibold" >Flavor: <span className="text-green-900">Macha</span></h1>
                    <h1 className="pr-4 font-semibold" >Size: <span className="text-green-900">Large</span></h1>
                    <h1 className="pr-4 font-semibold" >Item: <span className="text-green-900">3</span></h1>
                    <h1 className="pr-4 font-semibold" >Amount: <span className="text-green-900">200</span></h1>
                    <h1 className="pr-4 font-semibold" >Date: <span className="text-green-900">2025-10-12</span></h1>
                    <button className="text-white bg-red-500 hover:bg-red-600 hover:cursor-pointer py-2 px-3 rounded-xl">Delete</button>
                </div>
                <div className="flex bg-gray-200 rounded sm:text-xl m-5 p-5 justify-center">
                    <h1 className="pr-4 font-semibold" >Flavor: <span className="text-green-900">Macha</span></h1>
                    <h1 className="pr-4 font-semibold" >Size: <span className="text-green-900">Large</span></h1>
                    <h1 className="pr-4 font-semibold" >Item: <span className="text-green-900">3</span></h1>
                    <h1 className="pr-4 font-semibold" >Amount: <span className="text-green-900">200</span></h1>
                    <h1 className="pr-4 font-semibold" >Date: <span className="text-green-900">2025-10-12</span></h1>
                    <button className="text-white bg-red-500 hover:bg-red-600 hover:cursor-pointer py-2 px-3 rounded-xl">Delete</button>
                </div>
            </div>
        </div>
    )
}
export default History;