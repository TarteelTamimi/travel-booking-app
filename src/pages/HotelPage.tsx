import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import HotelInfo from "../components/Hotels/HotelInfo";
import { HotelModel } from "../models/Hotel";
import HotelGallery from "../components/Hotels/HotelGallery";
import Rooms from "../components/Hotels/Rooms";

const HotelPage = () => {
  const initialHotel: HotelModel = {
    id: 0,
    name: "",
    description: "",
    hotelType: 0,
    starRating: 0,
    latitude: 0,
    longitude: 0,
    amenities: [],
  };

  const { id } = useParams();
  const [hotel, setHotel] = useState<HotelModel>(initialHotel);

  useEffect(() => {
    api.get(`/hotels/${id}`)
      .then(res => res.data)
      .then(data => {
        setHotel(data);
      })
  }, [id])

  return (
    <div className="flex">
      <HotelInfo {...hotel} />
      <div className="flex flex-col w-[70%] h-full">
        <HotelGallery />
        <div className="flex flex-col w-full">
          <h2 className="m-5 text-3xl">Rooms:</h2>
          <Rooms />
        </div>
      </div>
    </div>
  )
}

export default HotelPage;
