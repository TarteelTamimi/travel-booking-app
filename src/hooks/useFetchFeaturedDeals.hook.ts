import { useEffect, useState } from "react";
import { getFeaturedDeals } from "../services/getFeaturedDeals";

export const useFetchFeaturedDeals = () => {
  const [featuredDeals, setFeaturedDeals] = useState([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchFeaturedDeals = async () => {
      try {
        const data = await getFeaturedDeals();
        setFeaturedDeals(data);
      } catch (error) {
        setError(true);
      }
    };

    fetchFeaturedDeals();
  }, []);

  return { featuredDeals, error };
}
