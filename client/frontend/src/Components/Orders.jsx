import chocolate from "../assets/Dark chocolate.png"
function Orders(){
    return(
        <>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-screen px-5 my-8">
             <h1 className="text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
               My Milktea Orders
             </h1>
           </div>
       
             <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center px-4 ">
               {/* Dark Chocolate */}
               <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-[260px] max-w-sm p-4 hover:shadow-xl transition-shadow">
                 <img
                   src={chocolate}
                   alt="Dark Chocolate"
                   className="w-full h-48 object-cover rounded-lg"
                 />
                 <div className="mt-4">
                   <h2 className="text-xl font-semibold text-gray-800">Dark Chocolate</h2>
                   <p className="text-gray-600 mt-2">Size: <span>Large</span></p>
                    <p className="text-gray-600 mt-2">Item: <span>2</span></p>
                    <p className="text-gray-600 mt-2">Amount: <span>200</span></p>
                    <p className="text-gray-600 mt-2">Status: <span>Pending</span></p>
                   
                   <div className="mt-4 space-y-2">
                     <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                       Edit order
                     </button>
                     <button className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                       Cancel Order
                     </button>
                   </div>
                 </div>
               </div>
       
             </div>
           </>)
}
export default Orders;