function UserAcount(){
    return(
        
        <>
        <div className="w-full justify-center align">
            <div className="text-center p-20 sm:text-xl bg-gray-200 ">
                <div className="p-5">
                  <label className="font-semibold sm:text-3xl">Fullname</label> 
                    <p className="text-blue-700 italic">Reven Gerona</p>
                </div>

                <div className="p-5">
                    <label className="font-semibold sm:text-3xl">Email</label>  
                    <p className="text-blue-700 italic">geronareven@gmail.com</p>
                </div>
                    
                <div className="p-5">
                    <label className="font-semibold sm:text-3xl">Address</label>
                    <p className="text-blue-700 italic">Norzagaray</p>
                </div>
                
                <div className="p-5">
                    <label className="font-semibold sm:text-3xl">Gender</label>
                    <p className="text-blue-700 italic">Male</p>
                </div>
                
                <div className="p-5">
                    <label className="font-semibold sm:text-3xl">Number</label>
                    <p className="text-blue-700 italic">09551744955</p>
                </div>
                
                <div className="font-semibold p-5 sm:grid-cols-1">
                    <button className="bg-blue-600 text-white px-5 rounded mr-4 mb-4">Edit Account</button>
                    <button className="bg-red-600 text-white px-5 rounded mr-4">Delete Account</button>
                </div>  
            </div>
        </div>
        
        </>
    )
}
export default UserAcount;