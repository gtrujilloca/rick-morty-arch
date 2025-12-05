import { CharacterRepository } from "../../domain/character-repository";

export class CharacterGetAll {
  constructor(private characterRepository: CharacterRepository) {}

  async execute() {
    return this.characterRepository.getAll();
  }
}