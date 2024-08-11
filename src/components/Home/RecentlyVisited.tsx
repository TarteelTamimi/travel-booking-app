import { FiAlertTriangle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useFetchRecentlyVisited } from "../../hooks/useFetchRecentlyVisited.hook";
import RecentlyVisitedCard from "./RecentlyVisitedCard";
import { RecentlyVisitedModel } from "../../models/RecentlyVisited";

const RecentlyVisited = () => {
  const userId = 1;
  const { recentlyVisited, error } = useFetchRecentlyVisited(userId);

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
        <div className='flex justify-center items-center text-red-600'>
          <FiAlertTriangle />
          <span className="pl-2">Failed to fetch Recently Visited</span>
        </div>
      ) : (
        <>
          <div className="hidden md:block">
            <Slider {...sliderSettings}>
              {recentlyVisited.map((hotel: RecentlyVisitedModel) => (
                <div key={hotel.hotelId}>
                  <RecentlyVisitedCard {...hotel} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="md:hidden flex flex-col">
            {recentlyVisited.map((hotel: RecentlyVisitedModel) => (
              <RecentlyVisitedCard key={hotel.hotelId} {...hotel} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default RecentlyVisited;
