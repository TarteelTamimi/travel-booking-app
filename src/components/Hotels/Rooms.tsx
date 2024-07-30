import { useParams } from "react-router-dom";
import { useFetchRooms } from "../../hooks/useFetchRooms.hook";
import { RoomModel } from "../../models/Room";
import RoomCard from "./RoomCard";
import { FiAlertTriangle } from "react-icons/fi";

const Rooms = () => {
  const { id } = useParams();
  const hotelId = Number(id);
  const checkInDate = Date();
  const checkOutDate = Date();
  const { rooms, error } = useFetchRooms(hotelId, checkInDate, checkOutDate);

  return (
    <>
      {error ? (
        <div className="absolute bottom-40 left-1/3 flex justify-center items-center text-red-600">
          <FiAlertTriangle />
          <span className="pl-2">Failed to fetch rooms</span>
        </div>
      ) : (
        <div className="pl-10 w-full">
          {rooms.map((room: RoomModel) => (
            <div key={room.roomId}>
              <RoomCard {...room} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Rooms;
