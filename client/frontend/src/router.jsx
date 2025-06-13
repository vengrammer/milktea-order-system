import {createBrowserRouter, Router, Navigate} from "react-router-dom";

import HomeLayout from "./Layout/HomeLayout";
import ShowMIlktea from "./Components/ShowMIlktea";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        children:[
            {
                path: '/',    
                element: <ShowMIlktea/>
            }]
    }

]);

export default routers;