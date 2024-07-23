import { FiAlertTriangle } from "react-icons/fi";
import { useFetchHotels } from "../hooks/useFetchHotels.hook";
import { HotelModel } from "../models/Hotel";
import HotelCard from "./HotelCard";

const Hotels = () => {
  const { hotels, loading, error } = useFetchHotels();

  if (loading) {
    return <span className="hotel-page-loader"></span>
  }

  if (error) {
    return (
      <div className="flex justify-center items-center text-red-600">
        <FiAlertTriangle />
        <span className="pl-2">Failed to fetch Hotels</span>
      </div>
    )
  }

  return (
    <div className="ml-20">
      {hotels.map((hotel: HotelModel) => (
        <div key={hotel.id}>
          <HotelCard {...hotel} />
        </div>
      ))}
    </div>
  )
}

export default Hotels;
