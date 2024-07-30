import { api } from "./api";

export const getRooms = async (id: number, checkInDate: string, checkOutDate: string) => {
  try {
    const response = await api.get(`/hotels/${id}/rooms`, {
      params: {
        checkInDate,
        checkOutDate,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Rooms");
    throw (error);
  }
};