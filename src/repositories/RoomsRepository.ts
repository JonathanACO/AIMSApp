import { Room } from "@/entities/Room";
import { api } from "@/services/api";

export class RoomsRepository {
  public static async fetchById(id: number): Promise<Room> {
    return await api("GET", `/rooms/${id}`);
  }
}
