import { useEffect, useState } from "react";
import { api } from "../services/api";
import TrendingDestinationsCard from "./TrendingDestinationsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TrendingDestinations = () => {
  const [trendingDestinations, setTrendingDestinations] = useState([]);

  useEffect(() => {
    api.get("/api/home/destinations/trending")
      .then(res => {
        setTrendingDestinations(res.data);
      })
      .catch(err => {
        console.error("Failed to fetch trending destinations:", err);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {trendingDestinations.map((deal: any) => (
        <div key={deal.id}>
          <TrendingDestinationsCard {...deal} />
        </div>
      ))}
    </Slider>
  )
}

export default TrendingDestinations
