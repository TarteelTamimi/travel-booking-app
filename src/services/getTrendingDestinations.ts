import { api } from "./api";

export const getTrendingDestinations = async () => {
  try {
    const response = await api.get("/api/home/destinations/trending");
    return response.data;
  } catch (error) {
    console.error("Error Fetching Trending Destinations");
    throw(error)
  }
};