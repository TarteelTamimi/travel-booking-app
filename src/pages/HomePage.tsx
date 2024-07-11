import FeaturedDeals from "../components/FeaturedDeals"
import Navbar from "../components/Navbar"
import SearchBox from "../components/SearchBox"
import TrendingDestinations from "../components/TrendingDestinations"

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center p-10">
        <SearchBox />
        <div className="">
          <h2>Featured Deals</h2>
          <FeaturedDeals />
        </div>
        <div className="">
          <h2>Recently Visited Hotels</h2>
        </div>
        <div className="">
          <h2>Trending Destinations</h2>
          <TrendingDestinations />
        </div>
      </div>
    </div>
  )
}

export default HomePage
