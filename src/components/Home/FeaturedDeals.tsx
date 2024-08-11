import FeaturedDealsCard from "./FeaturedDealsCard";
import { useFetchFeaturedDeals } from "../../hooks/useFetchFeaturedDeals.hook";
import { FiAlertTriangle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FeaturedDealsModel } from "../../models/FeaturedDeals";

const FeaturedDeals = () => {
  const { featuredDeals, error } = useFetchFeaturedDeals();

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
          <span className="pl-2">Failed to fetch Features Deals</span>
        </div>
      ) : (
        <>
          <div className="hidden md:block">
            <Slider {...sliderSettings}>
              {featuredDeals.map((deal: FeaturedDealsModel) => (
                <div key={deal.hotelId}>
                  <FeaturedDealsCard {...deal} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="md:hidden flex flex-col">
            {featuredDeals.map((deal: FeaturedDealsModel) => (
              <div key={deal.hotelId}>
                <FeaturedDealsCard {...deal} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default FeaturedDeals;
