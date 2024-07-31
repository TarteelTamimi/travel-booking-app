import { RoomModel } from "../Room";

export interface cartContextModel {
  cartItems: RoomModel[];
  addToCart: (item: RoomModel) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}