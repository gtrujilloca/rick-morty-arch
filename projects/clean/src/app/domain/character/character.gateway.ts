import { Character } from "./character.model";

export abstract class CharacterGateway {
  abstract getAll(): Promise<Character[]>;
  abstract getOneById(id: string): Promise<Character | null>;
}