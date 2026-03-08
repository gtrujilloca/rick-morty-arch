import { inject, Injectable } from "@angular/core";
import { CharacterRepository } from "../../domain/character-repository";

@Injectable()
export class CharacterGetAll {
  // constructor(private characterRepository: CharacterRepository) {}

  private _characterRepository = inject(CharacterRepository);

  async execute() {
    return this._characterRepository.getAll();
  }
}