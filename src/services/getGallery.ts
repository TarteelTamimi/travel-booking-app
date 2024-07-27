import { api } from "./api";

export const getGallery = async (id: number) => {
  try {
    const response = await api.get(`/hotels/${id}/gallery`);
    return response.data;
  } catch (error) {
    console.error("Error Fetching Photos");
    throw (error);
  }
};
