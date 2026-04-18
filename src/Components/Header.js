import { LOGO_URL } from "./Utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/useOnlineStatus";

const Header = () => {

    //let btnName = "Login";
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    //Note:**
    //useEffect has 2 arguments - function/setup and dependency (optional)
    //if there is not dependency arugumnet, useEffect is called everytime the components render.
    //if dependency is empty - [] , useEffect is called on initial render (just once)
    //if dependencey has some array value - [btnName] , useEffect is called everytime btnName is updated.
    useEffect(() => {
        //console.log("useEffect rendered");
    }, []);

    return (
        <div className="shadow-md bg-white">
            <div className="flex max-w-[1200px] min-w-[1200px] mx-auto h-24 items-center justify-between bg-white ">
                <div className="logo-container ">
                    <img className = 'w-20 items-center' src = {LOGO_URL} />
                </div>
                <div className="flex">
                    <ul className = "flex p-4 items-center ">
                        <li className="m-2 p-2 font-bold">
                            Online Status: {onlineStatus === true ? "🟢" : "🔴"}
                        </li>
                        <li className="m-2 p-2 font-bold">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="m-2 p-2 font-bold">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="m-2 p-2 font-bold">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li className="m-2 p-2 font-bold">
                            <Link to="/grocery">Grocery</Link>
                        </li>
                        <li className="m-2 p-2 font-bold">Cart</li>
                        <button className="m-2 p-2 font-bold" onClick = {
                            () => {
                                (btnName === "Login") ? setBtnName("Logout") : setBtnName("Login");
                            }
                        }> {btnName} </button>
                    </ul>
                </div>
            </div> 
        </div>
    )
};

export default Header;