import { IoLocationOutline } from "react-icons/io5";
import { TrendingDestinationsModel } from "../../models/TrendingDestinations";

const TrendingDestinationsCard = (props: TrendingDestinationsModel) => {
  const { cityName, countryName, description, thumbnailUrl } = props;

  return (
    <div className="w-full sm:w-10/12 md:w-9/12 lg:w-10/12 xl:w-8/12 border h-[460px] rounded-2xl bg-white shadow mb-5">
      <img className="rounded-t-2xl w-full h-[220px]" src={thumbnailUrl} alt="room photo" />
      <div className="p-3">
        <h5 className="pl-1 text-2xl font-bold tracking-tight text-gray-900">{cityName}</h5>
        <div className="flex pt-3 mb-3 pl-0 font-normal text-gray-700">
          <IoLocationOutline className="pt-1 text-2xl" />
          <p className="ml-1">{countryName}</p>
        </div>
        <p className="mb-3 pl-1 font-normal text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default TrendingDestinationsCard;
