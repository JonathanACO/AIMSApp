import { api } from "@/services/api";
import { Room } from "@/entities/Room";

export class RoomsRepository {
  static async fetchById(id: number): Promise<Room> {
    return await api("GET", `/rooms/${id}`);
  }
}
