import { Injectable } from "@angular/core";
import { CharacterGateway} from "../../domain/character/character.gateway";
import { Character, Gender, Species, Status } from "../../domain/character/character.model";
import { CharacterDto } from "../models/character.model"
import characterList from '../../data/characters.json';
import { delay } from "../shared/helpers";

@Injectable()
export class CharacterInMemory implements CharacterGateway {
  async getAll(): Promise<Character[]> {
    await delay(1000);
    return (characterList as CharacterDto[]).map(obj => this.fromObject(obj));
  }

  async getOneById(id: string): Promise<Character | null> {
    await delay(1000);
    const character = (characterList).find(c => c.id.toString() === id);
    return character
      ? this.fromObject(character as CharacterDto)
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
