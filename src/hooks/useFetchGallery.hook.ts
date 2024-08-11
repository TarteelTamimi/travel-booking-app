import { useEffect, useState } from "react";
import { HotelPhotoModel } from "../models/HotelPhoto";
import { getGallery } from "../services/getGallery";

export const useFetchGallery = (id: number) => {
  const [photos, setPhotos] = useState<HotelPhotoModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getGallery(id);
        setPhotos(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [id]);

  return { photos, loading, error };
}
