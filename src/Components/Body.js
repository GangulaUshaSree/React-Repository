import RestaurantCard, { isRestaurantOpen } from "./RestaurantCard";
//import resList from "./Utils/mockData"; 
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/useOnlineStatus";
import UserContext from "./Utils/UserContext";

const Body = () => {

    //Local state Variable - Super powerful variable
    //useState() will give powerful state variable
    //Whenever the state varibale changes, react triggerers a reconciliation cycle(re-renders the UI component)
    //const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    //useEffect is used to perform side effects in your component like fecting the data, directly updating the DON and timers.
    //useEffect() is called => everytime a component is rendered. (or)
    //Everytime a component is renderded => useEffect is called.
    useEffect(() => {
        fetchData();
    }, []);

    const { loggedInUser, setUserName } = useContext(UserContext);

    const fetchData = async () => {

        const data = await fetch (
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
        return <h1> Looks you are Offline, Please check your Internet connection! </h1>

    const RestaurantOpen = isRestaurantOpen(RestaurantCard);

    //conditional rendering - Rendering based on the condition is called conditional rendering
    //if(listOfRestaurants.length === 0){
        //return <Shimmer />
    //}

    //here we have used ternary operator
    return (listOfRestaurants.length === 0) ? <Shimmer /> : (
        <div className = "bg-white p-2 m-2">
            <div className = "flex">
                <div className=" ">
                    <input data-testid = "searchInput" type ="text" className="m-3 p-2 bg-gray-100 border-2 border-solid border-black " value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="m-3 p-2 border-2 border-solid border-black bg-gray-100 rounded-lg" onClick={() => {
                        const filteredRestaurantData = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        filteredRestaurantData.length === 0 ? setFilteredRestaurants(listOfRestaurants) : setFilteredRestaurants(filteredRestaurantData);
                        }
                    }>Search</button>
                </div>
                <button className="m-3 p-2 border-2 border-solid border-black bg-gray-100 rounded-lg" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setFilteredRestaurants(filteredList);
                }}> Top Rated Restaurants </button>
                <div>
                    <label> UserName: </label>
                    <input type ="text" className="m-3 p-2 bg-gray-100 border-2 border-solid border-black " value={loggedInUser} 
                    onChange={(e) => {setUserName(e.target.value)}} />
                </div>
            </div>

            <div className="flex flex-wrap bg-white py-[30px] px-[90px]"> 
                {/*
                <RestaurantCard resData ={resList[0]} /> 
                <RestaurantCard resData ={resList[1]} /> 
                <RestaurantCard resData ={resList[2]} /> 
                <RestaurantCard resData ={resList[3]} /> 
                <RestaurantCard resData ={resList[4]} /> 
                <RestaurantCard resData ={resList[5]} /> 
                <RestaurantCard resData ={resList[6]} /> 
                <RestaurantCard resData ={resList[7]} /> 
                //or 
                */}
                
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to = {"/restaurants/" + restaurant.info.id} state={restaurant.info.name}> 
                    {
                        restaurant.info.isOpen ? <RestaurantOpen resData = {restaurant}/> : <RestaurantCard resData = {restaurant}/>
                    }
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;