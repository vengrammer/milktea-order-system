import { Navigate } from "react-router-dom";


function AdminDashboard(){
    
    return(
        <>
            <div className="grid w-ful 2xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 justify-center text-center align-center">
                {/*box for milktea */}
                <div className="bg-orange-500 w-90 h-40 text-center justify-center m-10 rounded s:m-auto">
                    <p className="text-4xl font-bold pb-10 pt-2">Milkteas</p>
                    <p className="text-4xl italic">25</p>
                </div>

                {/*box for milktea */}
                <div className="bg-orange-500 w-90 h-40 text-center justify-center m-10 rounded s:m-auto">
                    <p className="text-4xl font-bold pb-10 pt-2">Orders</p>
                    <p className="text-4xl italic">25</p>
                </div>

                {/*box for milktea */}
                <div className="bg-orange-500 w-90 h-40 text-center justify-center m-10 rounded s:m-auto">
                    <p className="text-4xl font-bold pb-10 pt-2">Users</p>
                    <p className="text-4xl italic">25</p>
                </div>

                <div className="bg-orange-500 w-90 h-40 text-center justify-center m-10 rounded s:m-auto">
                    <p className="text-4xl font-bold pb-10 pt-2">Canceled</p>
                    <p className="text-4xl italic">25</p>
                </div>

                <div className="bg-orange-500 w-90 h-40 text-center justify-center m-10 rounded s:m-auto">
                    <p className="text-4xl font-bold pb-10 pt-2">Rejected</p>
                    <p className="text-4xl italic">25</p>
                </div>

                <div className="bg-orange-500 w-90 h-40 text-center justify-center m-10 rounded s:m-auto">
                    <p className="text-4xl font-bold pb-10 pt-2">Delivered</p>
                    <p className="text-4xl italic">25</p>
                </div>

             
            </div>
        </>
    )
}
export default AdminDashboard;