import { api } from "@/helpers/apiBackend";

export class RoomsRespository {
  public async find(id: number) {
    return await api("GET", `/rooms/${id}`);
  }
}
