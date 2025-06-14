import {createBrowserRouter, Router, Navigate} from "react-router-dom";

import HomeLayout from "./Layout/HomeLayout";
import ShowMIlktea from "./Components/ShowMIlktea";
import Cart from "./Components/Cart";
import History from "./Components/History";
import Orders from "./Components/Orders";

const routers = createBrowserRouter([
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
        ]
    }

]);

export default routers;