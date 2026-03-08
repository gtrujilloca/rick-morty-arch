import { inject } from "@angular/core";
import { CharacterRepository } from "../../domain/character-repository";

export class CharacterGetAll {
  // constructor(private characterRepository: CharacterRepository) {}

  private _characterRepository = inject(CharacterRepository);

  async execute() {
    return this._characterRepository.getAll();
  }
}