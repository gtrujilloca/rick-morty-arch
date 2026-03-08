import { inject } from "@angular/core";
import { CharacterGateway } from "../../domain/models/character.gateway";

export class CharacterGetAll {
  // constructor(private characterRepository: CharacterRepository) {}

  private _characterGateway = inject(CharacterGateway);

  async execute() {
    return this._characterGateway.getAll();
  }
}