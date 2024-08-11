import { useEffect, useState } from "react";
import { HotelModel } from "../models/Hotel";
import { getHotels } from "../services/getHotels";

export const useFetchHotels = () => {
  const [hotels, setHotels] = useState<HotelModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await getHotels();
        setHotels(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return { hotels, loading, error };
}
