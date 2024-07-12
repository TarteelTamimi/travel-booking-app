import FeaturedDeals from "../components/FeaturedDeals"
import Navbar from "../components/Navbar"
import SearchBox from "../components/SearchBox"
import TrendingDestinations from "../components/TrendingDestinations"

const HomePage = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="flex flex-col justify-center p-10 ">
        <SearchBox />
        <div className="mb-10">
          <h2 className="text-4xl pt-5 pb-5 font-bold">Featured Deals</h2>
          <FeaturedDeals />
        </div>
        <div className="mb-10">
          <h2 className="text-4xl pt-5 pb-5 font-bold">Recently Visited Hotels</h2>
        </div>
        <div className="mb-10">
          <h2 className="text-4xl pt-5 pb-5 font-bold">Trending Destinations</h2>
          <TrendingDestinations />
        </div>
      </div>
    </div>
  )
}

export default HomePage
