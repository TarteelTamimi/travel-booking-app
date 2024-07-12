import { IoLocationOutline } from "react-icons/io5";

const TrendingDestinationsCard = (props: Any) => {
  const { cityId, cityName, countryName, description, thumbnailUrl } = props;

  return (
    <div className="w-10/12 border h-[460px] rounded-2xl bg-white">
      <img className="rounded-t-2xl w-full h-[220px]" src={thumbnailUrl} alt="Room Photo" />
      <div className="p-5">
        <h5 className="pl-1 text-2xl font-bold tracking-tight text-gray-900">{cityName}</h5>
        <div className="flex pt-3 mb-3 pl-0 font-normal text-gray-700">
          <IoLocationOutline className="pt-1 text-2xl"/>
          <p className="ml-1">{countryName}</p>
        </div>
        <p className="mb-3 pl-1 font-normal text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default TrendingDestinationsCard
