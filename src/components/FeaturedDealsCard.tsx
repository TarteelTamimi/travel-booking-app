import { useNavigate } from "react-router-dom";

const FeaturedDealsCard = (props: Any) => {
  const { hotelId, originalRoomPrice, discount, finalPrice, cityName, hotelName, hotelStarRating, title, description, roomPhotoUrl } = props;
  const navigate = useNavigate();
  const handlMoreDetails = () => {
    navigate(`/hotels/${hotelId}`);
  }

  return (
    <div className="max-w-sm w-full h-full bg-white border border-gray-200 rounded-2xl shadow">
      <a href="#">
        <img className="rounded-t-2xl w-full h-40 object-cover" src={roomPhotoUrl} alt="Room Photo" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{hotelName}</p>
        <p className="mb-3 font-normal text-gray-700">{cityName}</p>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <a href="#" onClick={handlMoreDetails} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          More Details
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default FeaturedDealsCard
