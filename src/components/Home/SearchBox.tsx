import { useState } from "react";
import { useFetchCities } from "../../hooks/useFetchCities.hook";
import { CityModel } from "../../models/City";
import { IoLocationOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CgCalendarDates } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { addDays } from "date-fns";

const SearchBox = () => {
  const { cities } = useFetchCities();
  const [filteredCities, setFilteredCities] = useState<CityModel[]>(cities);
  const date = new Date();
  const [startDate, setStartDate] = useState(date);
  const tomorrow = addDays(date, 1);
  const [endDate, setEndDate] = useState(tomorrow);
  const [city, setCity] = useState<string>("");
  const [numberOfAdults, setNumberOfAdults] = useState<number>(2);
  const [numberOfChildren, setNumberOfChildren] = useState<number>(0);
  const [numberOfRooms, setNumberOfRooms] = useState<number>(1);
  const [showList, setShowList] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCity(value);
    setFilteredCities(cities.filter(city => city.name.toLowerCase().includes(value.toLowerCase())));
  };

  const handleNumberOfAdultsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setNumberOfAdults(value);
  };

  const handleNumberOfChildrenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setNumberOfChildren(value);
  };

  const handleNumberOfRoomsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setNumberOfRooms(value);
  };

  const handleFocus = () => {
    setFilteredCities(cities);
    setShowList(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowList(false), 1000);
  };

  const handleCityClick = (city: CityModel) => {
    setCity(city.name);
    setShowList(false);
  };

  const handleSearch = () => {
    const data = {
      city: city,
      numberOfAdults: numberOfAdults,
      numberOfChildren: numberOfChildren,
      numberOfRooms: numberOfRooms,
      startDate: startDate,
      endDate: endDate
    }
    navigate("/search-results", { state: data })
  }

  return (
    <div className="bg-blue-700 p-4 rounded-lg flex flex-wrap gap-20 items-center justify-center w-11/12 m-auto max-[1050px]:w-full max-[556px]:gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col flex-1 max-w-[180px]">
          <label htmlFor="city" className="text-white mb-1">Location:</label>
          <div className="relative flex items-center border-2 border-white rounded-lg">
            <IoLocationOutline className="text-white text-4xl m-1" />
            <input
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="text-white bg-blue-700 focus:outline-none font-medium rounded-lg text-lg py-2 pl-8 placeholder-gray-400 w-full"
              placeholder="City"
            />
            {showList && (
              <div className="absolute top-full left-0 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-full max-h-60 overflow-auto z-10">
                <ul className="py-2 text-sm text-gray-700">
                  {filteredCities.length
                    ? filteredCities.map((city: CityModel) => (
                      <li
                        key={city.id}
                        onClick={() => handleCityClick(city)}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {city.name}
                      </li>
                    ))
                    : <p className="px-4 py-2 text-gray-500">No result</p>
                  }
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-6 max-[1050px]:flex-col">
          <div className="flex flex-col flex-1 max-w-[180px]">
            <label htmlFor="startDate" className="text-white mb-1">From:</label>
            <div className="relative flex items-center border-2 border-white rounded-lg">
              <CgCalendarDates className="text-white text-4xl m-1" />
              <DatePicker
                selected={startDate}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(date: any) => setStartDate(date)}
                className="text-white bg-blue-700 focus:outline-none font-medium rounded-lg text-lg py-2 pl-8 placeholder-gray-400 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 max-w-[180px]">
            <label htmlFor="endDate" className="text-white mb-1">To:</label>
            <div className="relative flex items-center border-2 border-white rounded-lg">
              <CgCalendarDates className="text-white text-4xl m-1" />
              <DatePicker
                selected={endDate}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(date: any) => setEndDate(date)}
                className="text-white bg-blue-700 focus:outline-none font-medium rounded-lg text-lg py-2 pl-8 placeholder-gray-400 w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col flex-1 max-w-[200px]">
          <label htmlFor="numberOfAdults" className="text-white mb-1">Number Of Adults:</label>
          <input
            type="number"
            id="numberOfAdults"
            min="0"
            value={numberOfAdults}
            onChange={handleNumberOfAdultsChange}
            className="pl-2 outline-blue-700 rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1 min-w-[200px]">
          <label htmlFor="numberOfChildren" className="text-white mb-1">Number Of Children:</label>
          <input
            type="number"
            id="numberOfChildren"
            min="0"
            value={numberOfChildren}
            onChange={handleNumberOfChildrenChange}
            className="pl-2 outline-blue-700 rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1 min-w-[200px]">
          <label htmlFor="numberOfRooms" className="text-white mb-1">Number Of Rooms:</label>
          <input
            type="number"
            id="numberOfRooms"
            min="1"
            value={numberOfRooms}
            onChange={handleNumberOfRoomsChange}
            className="pl-2 outline-blue-700 rounded-lg"
          />
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="border-2 border-white bg-white text-blue-700 text-center rounded-lg text-lg min-w-[16rem] font-bold py-2 px-4 hover:bg-gray-200 flex-shrink-0"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBox;
