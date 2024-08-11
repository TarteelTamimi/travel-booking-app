import { useEffect, useState } from "react";
import { getTrendingDestinations } from "../services/getTrendingDestinations";

export const useFetchTrendingDestinations = () => {
  const [trendingDestinations, setTrendingDestinations] = useState([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchTrendingDestinations = async () => {
      try {
        const data = await getTrendingDestinations();
        setTrendingDestinations(data);
      } catch (error) {
        setError(true);
      }
    };

    fetchTrendingDestinations();
  }, []);

  return { trendingDestinations, error };
}
