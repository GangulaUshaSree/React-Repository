import { CDN_URL } from "./Utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    // const data = resData.info; 
    // or
    const {
        cloudinaryImageId,
        name, 
        avgRating,
        sla,
        cuisines
    } = resData?.info;


    return (
        <div className = "res-card" style = {{backgroundColor: "#f0f0f0"}}>
            <img className = "res-logo" 
            alt = "res-logo" 
            src= {
                CDN_URL+cloudinaryImageId 
                }
            />
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{cuisines.join(", ")}</h4>
        </div>
    );
};

export default RestaurantCard;