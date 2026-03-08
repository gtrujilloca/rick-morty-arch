import { Character } from "./character.model";

// export interface CharacterRepository {

//   getAll(): Promise<Character[]>;
//   getOneById(id: string): Promise<Character | null>;

// }

export abstract class CharacterRepository {
  abstract getAll(): Promise<Character[]>;
  abstract getOneById(id: string): Promise<Character | null>;
}