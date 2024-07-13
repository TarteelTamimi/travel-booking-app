import TrendingDestinationsCard from "./TrendingDestinationsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiAlertTriangle } from "react-icons/fi";
import { useFetchTrendingDestinations } from "../hooks/useFetchTrendingDestinations.hook";
import { TrendingDestinationsModel } from "../models/TrendingDestinations";

const TrendingDestinations = () => {
  const { trendingDestinations, error } = useFetchTrendingDestinations();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      {
        error
          ? <div className='flex justify-center items-center text-red-600'>
              <FiAlertTriangle />
              <span className="pl-2">Failed to fetch Trending Destinations</span>
            </div>
          : (<Slider {...settings}>
            {trendingDestinations.map((city: TrendingDestinationsModel) => (
              <div key={city.cityId}>
                <TrendingDestinationsCard {...city} />
              </div>
            ))}
          </Slider>)
      }
    </>
  )
}

export default TrendingDestinations
