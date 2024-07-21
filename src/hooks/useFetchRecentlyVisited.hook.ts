import { useEffect, useState } from "react";
import { getRecentlyVisited } from "../services/getRecentlyVisited";

export const useFetchRecentlyVisited = (userId: number) => {
  const [recentlyVisited, setRecentlyVisited] = useState([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRecentlyVisited = async () => {
      try {
        const data = await getRecentlyVisited(userId);
        setRecentlyVisited(data);
      } catch (error) {
        setError(true);
      }
    };

    fetchRecentlyVisited();
  }, [userId]);

  return { recentlyVisited, error };
}