export type AccessToken = {
  id: number;
  tokenableId: number;
  type: string;
  hash: string;
  abilities: Text;
  createdAt: Date;
  modifiedAt: Date;
};
