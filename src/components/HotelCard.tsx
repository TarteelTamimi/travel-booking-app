import { useEffect, useState } from "react";
import { HotelModel } from "../models/Hotel";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

const HotelCard = (props: HotelModel) => {
  const { id, name, description, hotelType, starRating } = props;
  const [imageURL, setImageURL] = useState<string>("");
  const navigate = useNavigate();

  const handleShowHotel = () => {
    navigate(`/hotels/${id}`);
  }

  useEffect(() => {
    api.get(`/hotels/${id}/gallery`)
      .then(res => (res.data))
      .then(data => {
        setImageURL(data[0].url);
      })
  }, [id])

  return (
    <a onClick={handleShowHotel} className="relative flex flex-col mb-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 cursor-pointer">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageURL} alt="" />
      <div className="flex flex-col px-4 leading-normal">
        <div className="flex text-xl mx-3 my-8">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
          <div className="flex mt-[3px] ml-10">
            <p className="mb-3 font-normal text-gray-700">{starRating}</p>
            <svg className="pt-1 w-6 h-6 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
        <p className="mb-3 ml-3 font-normal text-gray-700">{description}</p>
        <p className="absolute bottom-5 mb-3 ml-3 font-normal text-gray-700"><span className="font-bold">Hotel Type: </span>{hotelType}</p>
      </div>
    </a>
  )
}

export default HotelCard;
