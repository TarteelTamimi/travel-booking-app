import { AmenityModel } from "./Amenity";

export type HotelModel = {
  id: number;
  name: string;
  hotelName?: string;
  imageUrl?: string;
  availableRooms?: number;
  cityId?: number;
  location?: string;
  description: string;
  hotelType: number;
  starRating: number;
  latitude: number;
  longitude: number;
  amenities: AmenityModel[];
}