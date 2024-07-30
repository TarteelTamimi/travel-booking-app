import { HotelModel } from "../../models/Hotel";
import { MdOutlineBedroomChild, MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import Map from "./Map";

const HotelInfo = (props: HotelModel) => {
  const { hotelName, description, amenities, location, starRating, imageUrl, availableRooms } = props;

  return (
    <div className="flex flex-col items-center bg-white w-3/12 h-fit p-5 m-5 rounded-sm">
      <img src={imageUrl} alt="hotel" className="w-72 h-72 rounded-lg" />
      <h3 className="font-bold text-2xl p-2">{hotelName}</h3>
      <div className="py-2">
        <p className="mb-1">{description}</p>
        <div className="flex pt-3 mb-3 pl-0 font-normal text-gray-700">
          <GrLocation className="text-2xl" />
          <p className="ml-2">Location: {location}</p>
        </div>
        <div className="flex pt-3 mb-3 pl-0 font-normal text-gray-700">
          <FaRegStar className="text-2xl" />
          <p className="ml-2">Rating: {starRating}</p>
        </div>
        <div className="flex pt-3 mb-3 pl-0 font-normal text-gray-700">
          <MdOutlineBedroomChild className="text-2xl" />
          <p className="ml-2">Available Rooms: {availableRooms}</p>
        </div>
        <div className="flex pt-3 pl-0 font-normal text-gray-700">
          <MdOutlineFeaturedPlayList className="text-2xl" />
          <p className="ml-2">Amenities:</p>
        </div>
        <ul className="text-gray-700 pl-10">
          {amenities.map((item, index) => (
            <li key={index} className="ml-2 list-disc">{item.name}</li>
          ))}
        </ul>
      </div>
      <Map {...props} />
    </div>
  )
}

export default HotelInfo;
