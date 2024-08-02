import { useState } from "react";
import { useFetchCities } from "../../hooks/useFetchCities.hook";
import { CityModel } from "../../models/City";
import { IoLocationOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CgCalendarDates } from "react-icons/cg";

const SearchBox = () => {
  const { cities } = useFetchCities();
  const [filteredCities, setFilteredCities] = useState<CityModel[]>(cities);
  const [inputValue, setInputValue] = useState<string>("");
  const [showList, setShowList] = useState<boolean>(false);
  const [startDate, setStartDate] = useState(new Date());
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [endDate, setEndDate] = useState(tomorrow);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setFilteredCities(cities.filter(city => city.name.toLowerCase().includes(value.toLowerCase())));
  };

  const handleFocus = () => {
    setFilteredCities(cities);
    setShowList(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowList(false), 1000);
  };

  const handleCityClick = (city: CityModel) => {
    setInputValue(city.name);
    setShowList(false);
  };

  return (
    <div className="bg-blue-700 w-[89%] min-h-24 rounded-lg absolute top-28 flex justify-evenly items-center p-2">
      <div>
        <label htmlFor="startDate" className="text-white">Location:</label>
        <div className="flex border-2 border-white rounded-lg">
          <IoLocationOutline className="text-white text-[36px] pt-2 pl-2" />
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="relative text-white w-32 bg-blue-700 focus:outline-none font-medium rounded-lg text-lg py-2 ml-3 inline-flex items-center placeholder-gray-400"
            placeholder="City"
          />
        </div>
      </div>

      {showList && (
        <div className="absolute top-24 left-12 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-48">
          <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
            {filteredCities.length
              ? (filteredCities.map((city: CityModel) => (
                <li
                  key={city.id}
                  onClick={() => handleCityClick(city)}
                  className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer"
                >
                  {city.name}
                </li>
              )))
              : (<p className="px-4 py-2 text-gray-500">No result</p>)
            }
          </ul>
        </div>
      )}
      <div>
        <label htmlFor="startDate" className="text-white">From:</label>
        <div className="flex border-2 border-white rounded-lg">
          <CgCalendarDates className="text-white text-[36px] pt-2 pl-2" />
          <DatePicker
            selected={startDate}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(date: any) => setStartDate(date)}
            className="relative text-white w-32 bg-blue-700 focus:outline-none font-medium rounded-lg text-l py-2.5 ml-3 inline-flex items-center placeholder-gray-400"
          />
        </div>
      </div>
      <div>
        <label htmlFor="endDate" className="text-white">To:</label>
        <div className="flex border-2 border-white rounded-lg">
          <CgCalendarDates className="text-white text-[36px] pt-2 pl-2" />
          <DatePicker
            selected={endDate}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(date: any) => setEndDate(date)}
            className="relative text-white w-32 bg-blue-700 focus:outline-none font-medium rounded-lg text-l py-2.5 ml-3 inline-flex items-center placeholder-gray-400"
          />
        </div>
      </div>
      <div>
        <div className="m-2">
          <label htmlFor="numberOfAdults" className="text-white mr-[22px]">Number Of Adults:</label>
          <input type="number" min="0" className="pl-2 outline-blue-700 rounded-lg" />
        </div>
        <div className="m-2">
          <label htmlFor="numberOfChildren" className="text-white mr-2">Number Of Children:</label>
          <input type="number" min="0" className="pl-2 outline-blue-700 rounded-lg" />
        </div>
        <div className="m-2">
          <label htmlFor="numberOfRooms" className="text-white mr-[18px]">Number Of Rooms:</label>
          <input type="number" min="1" className="pl-2 outline-blue-700 rounded-lg" />
        </div>
      </div>
      <button className="border-2 border-white bg-white w-32 text-blue-700 text-center focus:outline-none rounded-lg text-lg font-bold py-2 items-center placeholder-gray-400 hover:bg-gray-200">
        Search
      </button>
    </div>
  )
}

export default SearchBox;
