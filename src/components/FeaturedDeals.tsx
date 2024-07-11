import { useState } from "react"
import { api } from "../services/api"
import FeaturedDealsCard from "./FeaturedDealsCard";

const FeaturedDeals = () => {
  const [featuredDeals, setFeaturedDeals] = useState([]);

  api.get("/api/home/featured-deals")
    .then(res => {
      setFeaturedDeals(res.data);
    })

  return (
    <div className="flex">
      {featuredDeals.map((deal: any) => (
        <div key={deal.id}>
          <FeaturedDealsCard {...deal} />
        </div>
      ))}
    </div>
  )
}

export default FeaturedDeals
