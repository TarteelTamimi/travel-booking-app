import { api } from "./api";

export const getCities = async () => {
  try {
    const response = await api.get("/cities");
    return response.data;
  } catch (error) {
    console.error("Error Fetching Cities");
    throw (error);
  }
};
