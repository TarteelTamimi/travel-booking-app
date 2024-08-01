import { MdOutlineBedroomParent, MdOutlineChildFriendly, MdOutlineFeaturedPlayList } from "react-icons/md";
import { RoomModel } from "../../models/Room";
import { BsPersonRaisedHand } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

const RoomCard = (props: RoomModel) => {
  const { roomId, roomNumber, roomType, roomPhotoUrl, price, capacityOfAdults, capacityOfChildren, roomAmenities, availability } = props;
  const navigate = useNavigate();
  const { addToCart, isInCart, removeFromCart } = useCart();

  const handleBuyNow = () => {
    navigate("/checkout");
  }

  const handleCartAction = () => {
    if (isInCart(roomId)) {
      removeFromCart(roomId);
      toast.success("Removed Successfully", { position: "top-center" });
    } else {
      addToCart(props);
      toast.success("Added Successfully", { position: "top-center" });
    }
  };

  return (
    <div className="relative flex flex-col w-5/6 h-[360px] mb-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-s-lg" src={roomPhotoUrl} alt="room photo" />
      <div className="flex flex-col px-4 leading-normal">
        <div className="flex items-center space-x-20 pt-5 mb-3 pl-0 text-xl font-bold">
          <h3 className="ml-2 text-black text-3xl">{roomNumber}</h3>
          <p className={availability ? "font-normal text-green-600" : "font-normal text-red-600"}>
            {availability ? "Available" : "Not Available"}
          </p>
        </div>
        <div className="flex pt-3 mb-3 pl-0 font-normal text-gray-700">
          <MdOutlineBedroomParent className="text-2xl" />
          <p className="ml-2">Room Type: {roomType}</p>
        </div>
        <div className="flex space-x-10">
          <div className="flex pt-3 mb-3 pl-0 font-normal text-gray-700">
            <BsPersonRaisedHand className="text-2xl" />
            <p className="ml-2">Capacity Of Adults: {capacityOfAdults}</p>
          </div>
          <div className="flex pt-3 mb-3 pl-0 font-normal text-gray-700">
            <MdOutlineChildFriendly className="text-2xl" />
            <p className="ml-2">Capacity Of Children: {capacityOfChildren}</p>
          </div>
        </div>
        <div className="flex pt-3 pl-0 font-normal text-gray-700">
          <MdOutlineFeaturedPlayList className="text-2xl" />
          <p className="ml-2">Amenities:</p>
        </div>
        <ul className="text-gray-700 pl-10">
          {roomAmenities.map((item, index) => (
            <li key={index} className="ml-2 list-disc">{item.name}</li>
          ))}
        </ul>
        <div className="flex pt-3 mb-3 pl-0 font-normal text-gray-700">
          <FaDollarSign className="text-2xl" />
          <p className="ml-2">Price: {price}$</p>
        </div>
      </div>
      {availability && (
        <div>
          <button onClick={handleBuyNow} className="absolute bottom-5 right-6 inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Buy Now
          </button>
          <button
            onClick={handleCartAction}
            className="absolute bottom-5 right-36 items-center min-w-44 px-3 py-2 text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            {isInCart(roomId) ? "Remove From Cart" : "Add To Cart"}
          </button>
        </div>
      )}
    </div>
  )
}

export default RoomCard;
