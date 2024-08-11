import { AmenityModel } from "./Amenity";

export type RoomModel = {
  roomId: number;
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  price: number;
  availability: boolean;
  roomAmenities: AmenityModel[];
}