import { api } from "./api";

export const getRecentlyVisited = async (id: number) => {
  const token = localStorage.getItem("token");
  try {
    const response = await api.get(`/home/users/${id}/recent-hotels`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Recently Visited");
    throw (error);
  }
};