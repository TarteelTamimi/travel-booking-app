import { useEffect, useState } from "react";
import { MdDeleteOutline, MdOutlineEdit, MdOutlineSave } from "react-icons/md";
import { useFetchHotels } from "../../hooks/useFetchHotels.hook";
import { IoMdAdd } from "react-icons/io";
import { HotelModel } from "../../models/Hotel";

const Hotels = () => {
  const { hotels, loading } = useFetchHotels();
  const [hotelInputValue, setHotelInputValue] = useState<string>("");
  const [filteredHotels, setFilteredHotels] = useState<HotelModel[]>([]);
  const [editingHotelId, setEditingHotelId] = useState<number | null>(null);
  const [editHotelName, setEditHotelName] = useState<string>("");
  const [editHotelDescription, setEditHotelDescription] = useState<string>("");
  const [editHotelStarRating, setEditHotelStarRating] = useState<string>("");
  const [newHotelName, setNewHotelName] = useState<string>("");
  const [newHotelDescription, setNewHotelDescription] = useState<string>("");

  useEffect(() => {
    setFilteredHotels(hotels);
  }, [hotels]);

  const handleHotelInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHotelInputValue(value);
    setFilteredHotels(hotels.filter(hotel => hotel.name.toLowerCase().includes(value.toLowerCase())));
  };

  const handleEdit = (hotel: HotelModel) => {
    setEditingHotelId(hotel.id);
    setEditHotelName(hotel.name);
    setEditHotelDescription(hotel.description);
  };

  const handleSave = (hotelId: number) => {
    setFilteredHotels(
      filteredHotels.map(hotel =>
        hotel.id === hotelId
          ? { ...hotel, name: editHotelName, description: editHotelDescription }
          : hotel
      )
    );
    setEditingHotelId(null);
  };

  const handleDeleteCity = (hotelId: number) => {
    const updatedFilteredCities = filteredHotels.filter((hotel) => hotel.id !== hotelId);
    setFilteredHotels(updatedFilteredCities);
  };

  const handleAddHotel = () => {
    if (newHotelName.trim() === "" || newHotelDescription.trim() === "") {
      return;
    }

    const newHotel: HotelModel = {
      id: Math.max(...hotels.map(hotel => hotel.id)) + 1,
      hotelName: "",
      description: newHotelDescription,
      hotelType: 0,
      starRating: 0,
      name: newHotelName,
      latitude: 0,
      longitude: 0,
      amenities: [],
    };

    const updatedHotels = [...hotels, newHotel];
    setFilteredHotels(updatedHotels);
    setNewHotelName("");
    setNewHotelDescription("");
  };

  return (
    <div>
      <div className="w-3/4 p-5 bg-blue-700 my-5 mx-auto rounded-lg flex justify-evenly">
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
            value={hotelInputValue}
            onChange={handleHotelInputChange}
            className="block w-full p-2 ps-10 text-l text-gray-900 border-blue-700 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-blue-700"
            placeholder="Search" />
        </div>
        <div className="w-1/2 flex justify-evenly">
          <input
            type="text"
            value={newHotelName}
            onChange={(e) => setNewHotelName(e.target.value)}
            className="rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-700"
            placeholder="Name"
          />
          <textarea
            value={newHotelDescription}
            onChange={(e) => setNewHotelDescription(e.target.value)}
            className="rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-700 h-10"
            placeholder="Description"
          />
          <button
            onClick={handleAddHotel}
            className="inline-flex items-center px-3 py-2 font-medium text-center text-blue-700 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <IoMdAdd className="mr-2" /> Add Hotel
          </button>
        </div>
      </div>
      <table className="divide-y divide-gray-200 w-[64%] ml-[21.5rem] mx-auto my-10 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hotel
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Star Rating
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {loading
            ? <span className="admin-page-loader"></span>
            : filteredHotels.length !== 0
              ? filteredHotels.map((hotel: HotelModel) => (
                <tr key={hotel.id} className="w-full ">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {editingHotelId === hotel.id
                      ? <input
                        type="text"
                        value={editHotelName}
                        onChange={(e) => setEditHotelName(e.target.value)}
                        className="rounded p-1"
                      />
                      : hotel.name
                    }
                  </td>
                  <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-500">
                    {editingHotelId === hotel.id
                      ? <textarea
                        value={editHotelDescription}
                        onChange={(e) => setEditHotelDescription(e.target.value)}
                        className="rounded p-1 w-full"
                      />
                      : hotel.description
                    }
                  </td>
                  <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-500">
                    {editingHotelId === hotel.id
                      ? <textarea
                        value={editHotelStarRating}
                        onChange={(e) => setEditHotelStarRating(e.target.value)}
                        className="rounded p-1"
                      />
                      : hotel.starRating
                    }
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">
                    <div className="flex justify-evenly">
                      {editingHotelId === hotel.id
                        ? <MdOutlineSave className="my-3 hover:text-blue-700 cursor-pointer" onClick={() => handleSave(hotel.id)} />
                        : <MdOutlineEdit className="my-3 hover:text-blue-700 cursor-pointer" onClick={() => handleEdit(hotel)} />
                      }
                      <MdDeleteOutline
                        className="my-3 hover:text-red-600 cursor-pointer"
                        onClick={() => handleDeleteCity(hotel.id)} />
                    </div>
                  </td>
                </tr>
              ))
              : <tr className="w-full">
                <td colSpan={3} className="text-center text-gray-500"> no result </td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Hotels;
