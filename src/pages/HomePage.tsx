import FeaturedDeals from "../components/Home/FeaturedDeals";
import RecentlyVisited from "../components/Home/RecentlyVisited";
import SearchBox from "../components/Home/SearchBox";
import TrendingDestinations from "../components/Home/TrendingDestinations";

const HomePage = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col justify-center p-10">
        <SearchBox />
        <div className="mb-10 mt-28">
          <h3 className="text-4xl pt-5 pb-5 font-bold">Featured Deals</h3>
          <FeaturedDeals />
        </div>
        <div className="mb-10">
          <h3 className="text-4xl pt-5 pb-5 font-bold">Recently Visited Hotels</h3>
          <RecentlyVisited />
        </div>
        <div className="mb-10">
          <h3 className="text-4xl pt-5 pb-5 font-bold">Trending Destinations</h3>
          <TrendingDestinations />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
