import {createBrowserRouter, Router, Navigate} from "react-router-dom";

//components for user
import HomeLayout from "./Layout/HomeLayout";
import ShowMIlktea from "./Components/ShowMIlktea";
import Cart from "./Components/Cart";
import History from "./Components/History";
import Orders from "./Components/Orders";
import UserAcount from "./Components/UserAccount"
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserAddToCart from "./Components/UserAddToCart";

//components for admin
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";
import AdminLayout from "./Layout/AdminLayout";
import AdminMilktea from "./Components/AdminMilktea";
import AdminOrder from "./Components/AdminOrder";
import AdminUsers from "./Components/AdminUsers";
import AdminHistory from "./Components/AdminHistory";
import AdminAddMIlktea from "./Components/AdminAddMilktea";
//Notfound
import NotFound from "./Components/Notfound";

const routers = createBrowserRouter([
    //for user route
    {
        path: '/',
        element: <HomeLayout/>,
        children:[
            {
                path: '/',    
                element: <ShowMIlktea/>
            },
            {
                path: '/carts',
                element: <Cart/>
            },
            {
                path: '/orders',
                element: <Orders/>
            },
            {
                path: '/history',
                element: <History/>
            },
            {
                path: '/user',
                element: <UserAcount/>
            },
             {
                path: '/login',
                element: <Login/>
            },
             {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/add-to-cart',
                element: <UserAddToCart/>
            },
        ]
    },
       //for admin route
    {
        path: '/admin',
        element: <AdminLayout/>,
        children:[
            {
                path: '/admin',
                element: <AdminDashboard/>
            },
            {
                path: '/admin/milktea',
                element: <AdminMilktea/>
            },
            {
                path: '/admin/orders',
                element: <AdminOrder/>
            },
             {
                path: '/admin/history',
                element: <AdminHistory/>
            },
            {
                path: '/admin/users',
                element: <AdminUsers/>
            },
            {
                path: '/admin/addmilktea',
                element: <AdminAddMIlktea/>
            },
        ]
    },
    {
        path: '/admin/login',
        element: <AdminLogin/>
    },
    {
        path: '*',
        element:<NotFound/>
    }
    

]);

export default routers;