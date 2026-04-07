import { useState, useEffect } from "react"

const RestaurantMenu = () => {

    const [ resDetails, setResDetails ] = useState(null);

    useEffect(() => {
        fetchMenu();
    } , [])

    const fetchMenu = async () => {

        const data = await fetch (
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=408177&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await data.json();

        console.log(json);
    };

    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Cool Drinks</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;