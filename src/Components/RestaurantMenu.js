import { useState, useEffect } from "react";
import { resMenu, menu } from "./Utils/mockRestaurantMenu"; 
import { useParams,useLocation } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {

    const [restaurantMenu, setRestaurantMenu] = useState(resMenu);

    let [restaurantMenuList, setRestaurantMenuList] = useState(menu);

    // 1. Access the param from the directed path
    const { resId } = useParams();

    // 2. Access the extra data from state
    const location = useLocation();
    const resName = location.state;

    const [ showIndex, setShowIndex ] = useState(null);

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
        costForTwoMessage,
        cuisines
    } = restaurantMenuList[0]?.data?.cards[2]?.card?.card?.info;

    const categories = restaurantMenuList[0]?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (restaurantMenuList.length === 0) ? <Shimmer /> : (
        <div className="text-center">
            <h1 className="font-bold  my-6 text-2xl">{resName}</h1>
            <p className="font-bold  text-2lg">{avgRating} (rating) - {costForTwoMessage} </p>
            <p className="font-bold  text-2lg">{cuisines.join(", ")}</p>

            {
            categories.map((category, index) => (
                <RestaurantCategory 
                key={category?.card?.card?.categoryId} 
                data={category?.card?.card} 
                showItems={index === showIndex ? true : false }
                setShowIndex={() => setShowIndex(index)}
                 />
            ))
            }
        </div>
    );
}

export default RestaurantsMenu;