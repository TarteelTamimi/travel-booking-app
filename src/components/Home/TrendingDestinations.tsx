import { FiAlertTriangle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useFetchTrendingDestinations } from "../../hooks/useFetchTrendingDestinations.hook";
import TrendingDestinationsCard from "./TrendingDestinationsCard";
import { TrendingDestinationsModel } from "../../models/TrendingDestinations";

const TrendingDestinations = () => {
  const { trendingDestinations, error } = useFetchTrendingDestinations();

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      {error ? (
        <div className="flex justify-center items-center text-red-600">
          <FiAlertTriangle />
          <span className="pl-2">Failed to fetch Trending Destinations</span>
        </div>
      ) : (
        <>
          <div className="hidden md:block">
            <Slider {...sliderSettings}>
              {trendingDestinations.map((city: TrendingDestinationsModel) => (
                <div key={city.cityId}>
                  <TrendingDestinationsCard {...city} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="md:hidden flex flex-col">
            {trendingDestinations.map((city: TrendingDestinationsModel) => (
              <TrendingDestinationsCard key={city.cityId} {...city} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default TrendingDestinations;
