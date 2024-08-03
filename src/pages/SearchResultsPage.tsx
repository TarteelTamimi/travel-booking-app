import { useLocation } from "react-router-dom";
import { useFetchRooms } from "../hooks/useFetchRooms.hook";
import { FiAlertTriangle } from "react-icons/fi";
import { RoomModel } from "../models/Room";
import RoomCard from "../components/Hotels/RoomCard";

const SearchResultsPage = () => {
  const location = useLocation();
  const { startDate, endDate, numberOfAdults, numberOfChildren } = location.state || {};
  const { rooms, loading, error } = useFetchRooms(1, startDate, endDate);

  const filteredRooms = rooms.filter((room: RoomModel) => {
    const matchesAdults = room.capacityOfAdults >= numberOfAdults;
    const matchesChildren = room.capacityOfChildren >= numberOfChildren;

    return matchesAdults && matchesChildren;
  });

  if (loading) {
    return <span className="hotel-page-loader"></span>
  }

  return (
    <>
      <h2 className="font-bold text-3xl m-10">Your Search Result:</h2>
      {error ? (
        <div className="absolute top-60 left-[650px] flex justify-center items-center text-red-600">
          <FiAlertTriangle />
          <span className="pl-2">Failed to fetch rooms</span>
        </div>
      ) : (
        <div className="pl-10 w-full">
          {filteredRooms.length == 0
            ? (
              <div className="text-center text-gray-500">No rooms match your criteria :(</div>
            ) : (
              filteredRooms.map((room: RoomModel) => (
                <div key={room.roomId} className="m-10">
                  <RoomCard {...room} />
                </div>
              ))
            )}
        </div>
      )}
    </>
  );
}

export default SearchResultsPage;
