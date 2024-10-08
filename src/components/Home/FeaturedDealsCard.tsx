import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FeaturedDealsModel } from "../../models/FeaturedDeals";

const FeaturedDealsCard = (props: FeaturedDealsModel) => {
  const { hotelId, originalRoomPrice, finalPrice, cityName, hotelName, hotelStarRating, title, roomPhotoUrl } = props;
  const navigate = useNavigate();

  const handleBookNow = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.stopPropagation();
    navigate("/checkout");
  }

  const handleCardClick = () => {
    navigate(`/hotels/${hotelId}`);
  }

  return (
    <div onClick={handleCardClick} className="relative w-full sm:w-10/12 md:w-9/12 lg:w-10/12 xl:w-8/12 border h-[500px] md:h-[350px] rounded-2xl bg-white cursor-pointer shadow mb-5">
      <img className="rounded-t-2xl w-full h-[180px]" src={roomPhotoUrl} alt="Room Photo" />
      <div className="p-4 md:p-3">
        <div className="flex justify-between">
          <h5 className="pl-1 text-xl md:text-lg font-bold tracking-tight text-gray-900">{title}</h5>
          <div className="md:top-36 flex text-xl p-1">
            <p className="mr-1">{hotelStarRating}</p>
            <svg className="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
        <p className="pl-4 mb-3 font-normal text-gray-700 text-sm md:text-xs">{hotelName}</p>
        <div className="flex mb-3 pl-0 font-normal text-gray-700 text-sm md:text-xs">
          <IoLocationOutline className="pt-1 text-xl md:text-lg" />
          <p className="ml-1">{cityName}</p>
        </div>
        <div className="flex justify-between mx-3 mb-3">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl md:text-xl">{finalPrice}$</p>
            <p className="text-red-600 text-lg md:text-base line-through">{originalRoomPrice}$</p>
          </div>
          <a href="#" onClick={handleBookNow} className="inline-flex items-center px-2
           text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedDealsCard;
