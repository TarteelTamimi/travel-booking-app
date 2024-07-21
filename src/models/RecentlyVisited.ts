export type RecentlyVisitedModel = {
  hotelId: number;
  hotelName: string;
  starRating: number;
  visitDate: Date;
  cityName: string;
  thumbnailUrl: string;
  priceLowerBound: number;
  priceUpperBound: number;
}