import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import HotelInfo from "../components/HotelInfo";
import { HotelModel } from "../models/Hotel";
import Map from "../components/Map";

const HotelPage = () => {
  const initialHotel: HotelModel = {
    id: 0,
    name: "",
    description: "",
    hotelType: 0,
    starRating: 0,
    latitude: 0,
    longitude: 0,
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
    <div>
      <HotelInfo {...hotel} />
      <Map {...hotel} />
    </div>
  )
}

export default HotelPage;
