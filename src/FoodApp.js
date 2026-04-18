import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantsMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const FoodApp = () => {
    return (
        <div className = "">
            <Header/>
            <Outlet/>
        </div>
    )
};

const Grocery = lazy(() => import("./Components/Grocery"));

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : < FoodApp />,
        children : [
            {
                path : "/",
                element : < Body />
            },
            {
                path : "/about",
                element : < About />
            },
            {
                path : "/contact",
                element : < Contact />
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>Loading.........</h1>}> < Grocery /> </Suspense>
            },
            {
                path : "/restaurants/:resid",
                element : < RestaurantsMenu />
            }
        ],
        errorElement : < Error />
    }
]);


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(< RouterProvider router={appRouter} />);