import { useEffect, useState } from "react";
import { HotelModel } from "../models/Hotel";
import { api } from "../services/api";

const HotelInfo = (props: HotelModel) => {
  const { id, name, description, hotelType, starRating } = props;
  const [imageURL, setImageURL] = useState<string>('');

  useEffect(() => {
    api.get(`/hotels/${id}/gallery`)
      .then(res => (res.data))
      .then(data => {
        setImageURL(data[0].url);
      })
  }, [])

  return (
    <div className="">
      <img src={imageURL} alt="hotel" className="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{starRating}</p>
    </div>
  )
}

export default HotelInfo;