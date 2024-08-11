import { RoomModel } from "../Room";

export interface cartContextModel {
  cartItems: RoomModel[];
  addToCart: (item: RoomModel) => void;
  isInCart: (itemId: number) => boolean;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}