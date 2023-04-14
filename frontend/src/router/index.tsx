import {createBrowserRouter} from "react-router-dom";
import Index from "../pages/index/Index";
import {lazy} from "react";
// own modules
import {ROUTE} from "./routes";
import { createPath } from "../utilits/createPath";
// pages
const Authorization = lazy(() => import("../pages/authorization/Authorization"));
const Registration = lazy(() => import("../pages/registration/Registration"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
        children: [
            {
                path: createPath({path: ROUTE.AUTHORIZATION}),
                element: <Authorization />
            },
            {
                path: createPath({path: ROUTE.REGISTRATION}),
                element: <Registration />
            }
        ]
    }
])

export {router};