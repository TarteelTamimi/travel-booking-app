import { useEffect, useState } from "react";
import { MdDeleteOutline, MdOutlineEdit, MdOutlineSave } from "react-icons/md";
import { useFetchRooms } from "../../hooks/useFetchRooms.hook";
import { IoMdAdd } from "react-icons/io";
import { RoomModel } from "../../models/Room";

const Rooms = () => {
  const checkInDate = Date();
  const checkOutDate = Date();
  const { rooms, loading } = useFetchRooms(1, checkInDate, checkOutDate);
  const [roomInputValue, setRoomInputValue] = useState<string>("");
  const [filteredRooms, setFilteredRooms] = useState<RoomModel[]>([]);
  const [editingRoomId, setEditingRoomId] = useState<number | null>(null);
  const [editRoomType, setEditRoomType] = useState<string>("");
  const [editRoomNumber, setEditRoomNumber] = useState<number | null>(null);
  const [editRoomPrice, setEditRoomPrice] = useState<number | null>(null);
  const [newRoomType, setNewType] = useState<string>("");
  const [newRoomNumber, setNewRoomNumber] = useState<number | null>(null);
  const [newRoomPrice, setNewRoomPrice] = useState<number | null>(null);

  useEffect(() => {
    setFilteredRooms(rooms);
  }, [rooms]);

  const handleRoomInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRoomInputValue(value);
    setFilteredRooms(rooms.filter(room => room.roomType.toLowerCase().includes(value.toLowerCase())));
  };

  const handleEdit = (room: RoomModel) => {
    setEditingRoomId(room.roomId);
    setEditRoomType(room.roomType);
    setEditRoomNumber(room.roomNumber);
    setEditRoomPrice(room.price);
  };

  const handleSave = (roomId: number) => {
    setFilteredRooms(
      filteredRooms.map(room =>
        room.roomId === roomId
          ? {
            ...room,
            roomType: editRoomType,
            roomNumber: editRoomNumber ?? 0,
            price: editRoomPrice ?? 0,
          }
          : room
      )
    );
    setEditingRoomId(null);
  };

  const handleDeleteCity = (roomId: number) => {
    const updatedFilteredCities = filteredRooms.filter((room) => room.roomId !== roomId);
    setFilteredRooms(updatedFilteredCities);
  };

  const handleAddRoom = () => {
    if (newRoomType.trim() === "" || newRoomNumber === null || newRoomPrice === null) {
      return;
    }

    const newRoom: RoomModel = {
      roomId: Math.max(...rooms.map(room => room.roomId)) + 1,
      roomType: newRoomType,
      roomNumber: newRoomNumber,
      roomPhotoUrl: "",
      capacityOfAdults: 0,
      capacityOfChildren: 0,
      price: newRoomPrice,
      availability: false,
      roomAmenities: [],
    };

    const updatedRooms = [...rooms, newRoom];
    setFilteredRooms(updatedRooms);
    setNewType("");
    setNewRoomNumber(null);
    setNewRoomPrice(null)
  };

  return (
    <div>
      <div className="w-4/5 p-5 bg-blue-700 my-5 mx-auto rounded-lg flex justify-evenly">
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            value={roomInputValue}
            onChange={handleRoomInputChange}
            className="block w-full p-2 ps-10 text-l text-gray-900 border-blue-700 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-blue-700"
            placeholder="Search" />
        </div>
        <div className="w-2/3 flex justify-evenly">
          <input
            type="number"
            value={newRoomNumber !== null ? String(newRoomNumber) : ""}
            onChange={(e) => setNewRoomNumber(Number(e.target.value))}
            className="rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-700 h-10"
            placeholder="Number"
          />
          <input
            type="text"
            value={newRoomType}
            onChange={(e) => setNewType(e.target.value)}
            className="rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-700 h-10"
            placeholder="Type"
          />
          <input
            type="number"
            value={newRoomPrice !== null ? String(newRoomPrice) : ""}
            onChange={(e) => setNewRoomPrice(Number(e.target.value))}
            className="rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-700 h-10"
            placeholder="Price"
          />
          <button
            onClick={handleAddRoom}
            className="inline-flex items-center px-3 py-2 font-medium text-center text-blue-700 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 h-10">
            <IoMdAdd className="mr-2" /> Add Room
          </button>
        </div>
      </div>
      <table className="divide-y divide-gray-200 w-[64%] ml-[21.5rem] mx-auto my-10 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Room Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price $
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading
            ? <span className="admin-page-loader"></span>
            : filteredRooms.length !== 0
              ? filteredRooms.map((room: RoomModel) => (
                <tr key={room.roomId}>
                  <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-500">
                    {editingRoomId === room.roomId
                      ? <input
                        type="number"
                        value={editRoomNumber !== null ? String(editRoomNumber) : ""}
                        onChange={(e) => setEditRoomNumber(Number(e.target.value))}
                        className="border rounded p-1 w-full"
                      />
                      : room.roomNumber
                    }
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {editingRoomId === room.roomId
                      ? <input
                        type="text"
                        value={editRoomType}
                        onChange={(e) => setEditRoomType(e.target.value)}
                        className="border rounded p-1"
                      />
                      : room.roomType
                    }
                  </td>
                  <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-500">
                    {editingRoomId === room.roomId
                      ? <input
                        type="number"
                        value={editRoomPrice !== null ? String(editRoomPrice) : ""}
                        onChange={(e) => setEditRoomPrice(Number(e.target.value))}
                        className="border rounded p-1 w-full"
                      />
                      : room.price
                    }
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">
                    <div className="flex justify-evenly">
                      {editingRoomId === room.roomId
                        ? <MdOutlineSave className="m-3 hover:text-blue-700 cursor-pointer" onClick={() => handleSave(room.roomId)} />
                        : <MdOutlineEdit className="m-3 hover:text-blue-700 cursor-pointer" onClick={() => handleEdit(room)} />
                      }
                      <MdDeleteOutline
                        className="m-3 hover:text-red-600 cursor-pointer"
                        onClick={() => handleDeleteCity(room.roomId)} />
                    </div>
                  </td>
                </tr>
              ))
              : <tr>
                <td colSpan={3} className="text-center text-gray-500"> no result </td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Rooms;
