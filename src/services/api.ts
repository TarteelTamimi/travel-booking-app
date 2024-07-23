import axios from "axios";

export const api = axios.create({
  baseURL: "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/",
});
