import { api } from "./api";

export const getFeaturedDeals = async () => {
  try {
    const response = await api.get("/api/home/featured-deals");
    return response.data;
  } catch (error) {
    console.error("Error Fetching Featured Deals");
    throw(error);
  }
};