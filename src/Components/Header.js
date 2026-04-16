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
       <div className="header-container">
            <div className="logo-container">
                <img className = 'logo' src = {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus === true ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick = {
                        () => {
                            (btnName === "Login") ? setBtnName("Logout") : setBtnName("Login");
                        }
                    }> {btnName} </button>
                </ul>
            </div>
        </div> 
    )
};

export default Header;