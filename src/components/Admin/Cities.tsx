import { useEffect, useState } from "react";
import { MdDeleteOutline, MdOutlineEdit, MdOutlineSave } from "react-icons/md";
import { useFetchCities } from "../../hooks/useFetchCities.hook";
import { CityModel } from "../../models/City";
import { IoMdAdd } from "react-icons/io";

const Cities = () => {
  const { cities, loading } = useFetchCities();
  const [cityInputValue, setCityInputValue] = useState<string>("");
  const [filteredCities, setFilteredCities] = useState<CityModel[]>([]);
  const [editingCityId, setEditingCityId] = useState<number | null>(null);
  const [editCityName, setEditCityName] = useState<string>("");
  const [editCityDescription, setEditCityDescription] = useState<string>("");
  const [newCityName, setNewCityName] = useState<string>("");
  const [newCityDescription, setNewCityDescription] = useState<string>("");

  useEffect(() => {
    setFilteredCities(cities);
  }, [cities]);

  const handleCityInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCityInputValue(value);
    setFilteredCities(cities.filter(city => city.name.toLowerCase().includes(value.toLowerCase())));
  };

  const handleEdit = (city: CityModel) => {
    setEditingCityId(city.id);
    setEditCityName(city.name);
    setEditCityDescription(city.description);
  };

  const handleSave = (cityId: number) => {
    setFilteredCities(
      filteredCities.map(city =>
        city.id === cityId
          ? { ...city, name: editCityName, description: editCityDescription }
          : city
      )
    );
    setEditingCityId(null);
  };

  const handleDeleteCity = (cityId: number) => {
    const updatedFilteredCities = filteredCities.filter((city) => city.id !== cityId);
    setFilteredCities(updatedFilteredCities);
  };

  const handleAddCity = () => {
    if (newCityName.trim() === "" || newCityDescription.trim() === "") {
      return;
    }

    const newCity: CityModel = {
      id: Math.max(...cities.map(city => city.id)) + 1,
      name: newCityName,
      description: newCityDescription
    };

    const updatedCities = [...cities, newCity];
    setFilteredCities(updatedCities);
    setNewCityName("");
    setNewCityDescription("");
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
            value={cityInputValue}
            onChange={handleCityInputChange}
            className="block w-full p-2 ps-10 text-l text-gray-900 border-blue-700 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-blue-700"
            placeholder="Search" />
        </div>
        <div className="w-1/2 flex justify-evenly">
          <input
            type="text"
            value={newCityName}
            onChange={(e) => setNewCityName(e.target.value)}
            className="rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-700"
            placeholder="Name"
          />
          <textarea
            value={newCityDescription}
            onChange={(e) => setNewCityDescription(e.target.value)}
            className="rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-700 h-10"
            placeholder="Description"
          />
          <button
            onClick={handleAddCity}
            className="inline-flex items-center px-3 py-2 font-medium text-center text-blue-700 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <IoMdAdd className="mr-2" /> Add City
          </button>
        </div>
      </div>
      <table className="divide-y divide-gray-200 w-[64%] ml-[21.5rem] mx-auto my-10 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading
            ? <span className="admin-page-loader"></span>
            : filteredCities.length !== 0
              ? filteredCities.map((city: CityModel) => (
                <tr key={city.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {editingCityId === city.id
                      ? <input
                        type="text"
                        value={editCityName}
                        onChange={(e) => setEditCityName(e.target.value)}
                        className="border rounded p-1"
                      />
                      : city.name
                    }
                  </td>
                  <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-500">
                    {editingCityId === city.id
                      ? <textarea
                        value={editCityDescription}
                        onChange={(e) => setEditCityDescription(e.target.value)}
                        className="border rounded p-1 w-full"
                      />
                      : city.description
                    }
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">
                    <div className="flex justify-evenly">
                      {editingCityId === city.id
                        ? <MdOutlineSave className="m-3 hover:text-blue-700 cursor-pointer" onClick={() => handleSave(city.id)} />
                        : <MdOutlineEdit className="m-3 hover:text-blue-700 cursor-pointer" onClick={() => handleEdit(city)} />
                      }
                      <MdDeleteOutline
                        className="m-3 hover:text-red-600 cursor-pointer"
                        onClick={() => handleDeleteCity(city.id)} />
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

export default Cities;
