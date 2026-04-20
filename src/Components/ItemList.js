import { CDN_URL } from "./Utils/constants";

const ItemList = ({items}) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price/100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4 relative ">
                        {
                        (item.card.info.imageId) && <img src={CDN_URL + item.card.info.imageId} className="w-[100%] rounded-2xl object-cover block" />
                        }
                        <div className="">
                            <button className="absolute bottom-[-10px] left-[40px] p-2 m-2 w-20 bg-white rounded-lg font-bold text-green-600 shadow-lg bg-center"> Add </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;