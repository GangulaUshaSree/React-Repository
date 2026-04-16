import { useState, useEffect } from "react";
import { resMenu, menuList } from "./Utils/mockRestaurantMenu"; 
import { useParams,useLocation } from "react-router-dom";

const RestaurantsMenu = () => {

    const [restaurantMenu, setRestaurantMenu] = useState(resMenu);

    const [restaurantMenuList, setRestaurantMenuList] = useState(menuList);

    // 1. Access the param from the directed path
    const { resId } = useParams();

    // 2. Access the extra data from state
    const location = useLocation();
    const resName = location.state;

    /*useEffect(() => {
        fetchMenu();
    } , [])

    const fetchMenu = async () => {

        const data = await fetch (
            "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=408177&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await data.json();

        console.log(json);
    };*/

    const {
        name, 
        avgRating,
        sla,
        cuisines
    } = restaurantMenu[0]?.info;

    return (restaurantMenu.length === 0) ? <Shimmer /> : (
        <div className="menu">
            <h1>{resName}</h1>
            <p>{cuisines.join(", ")} - {avgRating} rating</p>
            <h4>{sla.slaString}</h4>
            <h2>Menu</h2>
            <ul>
                {restaurantMenuList.map((item) => (
                    <li key = {item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantsMenu;