import { useEffect, useState } from "react";
import { getCities } from "../services/getCities";
import { CityModel } from "../models/City";

export const useFetchCities = () => {
  const [cities, setCities] = useState<CityModel[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await getCities();
        setCities(data);
      } catch (error) {
        setError(true);
      }
    };

    fetchCities();
  }, []);

  return { cities, error };
}