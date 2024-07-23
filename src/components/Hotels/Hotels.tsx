import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { useFetchHotels } from "../../hooks/useFetchHotels.hook";
import { HotelModel } from "../../models/Hotel";
import HotelCard from "./HotelCard";

const Hotels = () => {
  const { hotels, loading, error } = useFetchHotels();
  const [isSorted, setIsSorted] = useState(false);
  const [sortedHotels, setSortedHotels] = useState<HotelModel[]>([]);

  const handleSortToggle = () => {
    if (isSorted) {
      setSortedHotels(hotels);
    } else {
      const sorted = [...hotels].sort((a, b) => b.starRating - a.starRating);
      setSortedHotels(sorted);
    }
    setIsSorted(!isSorted);
  };

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

  const displayedHotels = isSorted ? sortedHotels : hotels;

  return (
    <>
      <div className="absolute top-[8.5rem] right-10">
        <button
          id="dropdownRadioButton"
          onClick={handleSortToggle}
          className="inline-flex p-2 items-center text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
          type="button"
        >
          {isSorted ? "Sorted By:  Star Rating" : "Sorted By:  Default"}
        </button>
      </div>
      <div className="ml-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedHotels.map((hotel: HotelModel) => (
          <div key={hotel.id}>
            <HotelCard {...hotel} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Hotels;
