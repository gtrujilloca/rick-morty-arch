import { CharacterRepository } from "../domain/character-repository";
import { Character } from "../domain/character.model";
import characterList from '../data/characters.json';
import { Injectable } from "@angular/core";
import { delay } from "../shared/helpers";

@Injectable()
export class CharacterInMemory implements CharacterRepository {
  async getAll(): Promise<Character[]> {
    await delay(1000);
    return characterList.map(obj => this.fromObject(obj));
  }

  async getOneById(id: string): Promise<Character | null> {
    await delay(1000);
    const character = (characterList).find(c => c.id.toString() === id);
    return character
      ? this.fromObject(character)
      : null;
  }


  private fromObject(obj: any): Character {
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
      status,
      species,
      gender,
      origin,
      image,
      episode,
      url,
      created,
    }
  }
}