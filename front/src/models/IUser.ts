import { Ilike } from "./ILikes";

export interface IUser {
  login: string;
  id: number;
  likes: Ilike[];
}
