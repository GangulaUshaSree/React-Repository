import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantsMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./Components/Utils/UserContext";


const FoodApp = () => {

    const [ userName, setUserName ] = useState();

    useEffect(() => {
        const data = {
            name : "Usha Sree"
        }

        setUserName(data.name);
    
    }, [])

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
            <div className = "">
                <UserContext.Provider value= {{ loggedInUser: "Rani Sree" }}>
                    <Header/>
                </UserContext.Provider>
                <Outlet/>
            </div>
        </UserContext.Provider>
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