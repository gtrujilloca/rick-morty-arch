import { Character } from "./character.model";

export interface CharacterRepository {

  getAll(): Promise<Character[]>;
  getOneById(id: string): Promise<Character | null>;

}