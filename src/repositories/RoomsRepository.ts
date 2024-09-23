import { Room } from "@/entities/Room";
import { api } from "@/services/api";

export class RoomsRespository {
  public async find(id: number): Promise<Room> {
    return await api("GET", `/rooms/${id}`);
  }
}
