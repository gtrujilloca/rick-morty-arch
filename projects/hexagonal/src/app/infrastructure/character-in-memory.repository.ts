import { CharacterRepository } from "../domain/character-repository";
import { Character, Gender, Species, Status } from "../domain/character.model";
import characterList from '../data/characters.json';
import { Injectable } from "@angular/core";
import { delay } from "../shared/helpers";
import { CharacterDto } from "./models/character.model";

@Injectable()
export class CharacterInMemory implements CharacterRepository {
  async getAll(): Promise<Character[]> {
    await delay(1000);
    return (characterList as CharacterDto[]).map(obj => this.fromObject(obj));
  }

  async getOneById(id: string): Promise<Character | null> {
    await delay(1000);
    const character = (characterList as CharacterDto[]).find(c => c.id.toString() === id);
    return character
      ? this.fromObject(character)
      : null;
  }


  private fromObject(obj: CharacterDto): Character {
    const {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
      episode,
      url,
      created,
    } = obj;
    return {
      id: id.toString(),
      name,
      status: status as unknown as Status,
      species: species as unknown as Species,
      gender: gender as unknown as Gender,
      origin,
      image,
      episode,
      url,
      created,
    }
  }
}