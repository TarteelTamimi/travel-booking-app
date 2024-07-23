import { FiAlertTriangle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useFetchRecentlyVisited } from "../hooks/useFetchRecentlyVisited.hook";
import RecentlyVisitedCard from "./RecentlyVisitedCard";
import { RecentlyVisitedModel } from "../models/RecentlyVisited";

const RecentlyVisited = () => {
  const userId = 1;
  const { recentlyVisited, error } = useFetchRecentlyVisited(userId);

  const sliderSettings = {
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
            <span className="pl-2">Failed to fetch Recently Visited</span>
          </div>

          : (<Slider {...sliderSettings} >
            {recentlyVisited.map((hotel: RecentlyVisitedModel) => (
              <div key={hotel.hotelId}>
                <RecentlyVisitedCard {...hotel} />
              </div>
            ))}
          </Slider>)
      }
    </>
  )
}

export default RecentlyVisited;
