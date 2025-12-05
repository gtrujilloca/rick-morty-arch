import { CharacterRepository } from "../domain/character-repository";
import { Character, CharacterDto, CharacterResponse } from "../domain/character.model";

export class CharacterRest implements CharacterRepository {
  private readonly BASE_URL = 'https://rickandmortyapi.com/api/character';
  async getAll(): Promise<Character[]> {
    const response = await fetch(this.BASE_URL);
    const data: CharacterResponse = await response.json();

    return data.results.map(dto => this.fromObject(dto));
  }

  async getOneById(id: string): Promise<Character | null> {
    const response = await fetch(`${this.BASE_URL}/${id}`);
    if (response.status === 404) {
      return null;
    }
    const dto: CharacterDto = await response.json();
    return this.fromObject(dto);
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
