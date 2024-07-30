import { useEffect, useState } from "react";
import { RoomModel } from "../models/Room";
import { getRooms } from "../services/getRooms";

export const useFetchRooms = (id: number, checkInDate: string, checkOutDate: string) => {
  const [rooms, setRooms] = useState<RoomModel[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getRooms(id, checkInDate, checkOutDate);
        setRooms(data);
      } catch (error) {
        setError(true);
      }
    };

    fetchRooms();
  }, [id]);

  return { rooms, error };
}
