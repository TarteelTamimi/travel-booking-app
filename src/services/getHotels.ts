import { api } from "./api";

export const getHotels = async () => {
  try {
    const response = await api.get("/api/hotels");
    return response.data;
  } catch (error) {
    console.error("Error Fetching Hotels");
    throw(error);
  }
};