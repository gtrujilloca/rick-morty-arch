import { CharacterRepository } from "../../domain/character-repository";

export class CharacterGetOneById {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(id: string) {
    return this.characterRepository.getOneById(id);
  }
}