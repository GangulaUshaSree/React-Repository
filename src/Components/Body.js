import RestaurantCard from "./RestaurantCard";
//import resList from "./Utils/mockData"; 
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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

    const fetchData = async () => {

        const data = await fetch (
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //conditional rendering - Rendering based on the condition is called conditional rendering
    //if(listOfRestaurants.length === 0){
        //return <Shimmer />
    //}

    //here we have used ternary operator
    return (listOfRestaurants.length === 0) ? <Shimmer /> : (
        <div className = "body">
            <div className = "filter">
                <div className="search">
                    <input type ="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        const filteredRestaurantData = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        filteredRestaurantData.length === 0 ? setFilteredRestaurants(listOfRestaurants) : setFilteredRestaurants(filteredRestaurantData);
                        }
                    }>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}> Top Rated Restaurants </button>
            </div>

            <div className="res-container"> 
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
                    <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
                ))}
            </div>
        </div>
    );
};

export default Body;