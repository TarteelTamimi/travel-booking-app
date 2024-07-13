import FeaturedDealsCard from "./FeaturedDealsCard";
import { useFetchFeaturedDeals } from "../hooks/useFetchFeaturedDeals.hook";
import { FiAlertTriangle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeaturedDeals = () => {
  const { featuredDeals, error } = useFetchFeaturedDeals();

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
            <span className="pl-2">Failed to fetch Features Deals</span>
          </div>

          : (<Slider {...settings} >
            {featuredDeals.map((deal: any) => (
              <div key={deal.id}>
                <FeaturedDealsCard {...deal} />
              </div>
            ))}
          </Slider>)
      }
    </>
  )
}

export default FeaturedDeals
