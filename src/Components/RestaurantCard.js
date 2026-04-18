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
        <div className = "p-2.5 m-1 w-[300px] rounded-[20px] hover:border-[1px] border-solid border-black " >
            <img className = "w-[100%] h-[200px] object-cover rounded-lg" 
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