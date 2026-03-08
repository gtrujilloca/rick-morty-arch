import { Injectable } from "@angular/core";
import { CharacterGateway } from "../../domain/character/character.gateway";
import { Character, Gender, Species, Status } from "../../domain/character/character.model";
import { CharacterDto, CharacterResponse } from "../models/character.model";

@Injectable()
export class CharacterRest implements CharacterGateway {
  private readonly BASE_URL = 'https://rickandmortyapi.com/api/character';
  async getAll(): Promise<Character[]> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching characters: ${response.status} ${response.statusText}`);
    }
    const data: CharacterResponse = await response.json();

    return data.results.map(dto => this.fromObject(dto));
  }

  async getOneById(id: string): Promise<Character | null> {
    const response = await fetch(`${this.BASE_URL}/${id}`);
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`Error fetching character ${id}: ${response.status} ${response.statusText}`);
    }
    const dto: CharacterDto = await response.json();
    return this.fromObject(dto);
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
