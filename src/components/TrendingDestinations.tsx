import { useState } from "react"
import { api } from "../services/api"
import TrendingDestinationsCard from "./TrendingDestinationsCard";

const TrendingDestinations = () => {
  const [trendingDestinations, setTrendingDestinations] = useState([]);

  api.get("/api/home/destinations/trending")
    .then(res => {
      setTrendingDestinations(res.data);
    })

  return (
    <div className="flex">
      {trendingDestinations.map((deal: any) => (
        <div key={deal.id}>
          <TrendingDestinationsCard {...deal} />
        </div>
      ))}
    </div>
  )
}

export default TrendingDestinations
