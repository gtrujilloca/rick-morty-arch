import { inject, Injectable } from "@angular/core";
import { CharacterGateway } from "../../domain/character/character.gateway";

@Injectable()
export class CharacterGetAll {
  // constructor(private characterGateway: CharacterGateway) {}

  private _characterGateway = inject(CharacterGateway);

  async execute() {
    return this._characterGateway.getAll();
  }
}
