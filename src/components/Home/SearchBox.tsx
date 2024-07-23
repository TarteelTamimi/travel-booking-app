import { useState } from "react";
import { useFetchCities } from "../../hooks/useFetchCities.hook";
import { CityModel } from "../../models/City";
import { IoLocationOutline } from "react-icons/io5";

const SearchBox = () => {
  const { cities } = useFetchCities();
  const [filteredCities, setFilteredCities] = useState<CityModel[]>(cities);
  const [inputValue, setInputValue] = useState<string>("");
  const [showList, setShowList] = useState<boolean>(false);

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
    <div className="bg-blue-700 w-[89%] min-h-24 rounded-lg absolute top-28 flex justify-center items-center">
      <div className="flex border-2 border-white rounded-lg">
        <IoLocationOutline className="text-white text-[36px] pt-2 pl-2" />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="relative text-white w-32 bg-blue-700 focus:outline-none font-medium rounded-lg text-l py-2.5 ml-3 inline-flex items-center placeholder-gray-400"
          placeholder="Location"
        />
      </div>

      {showList && (
        <div className="absolute top-[73px] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-48">
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
    </div>
  )
}

export default SearchBox;
