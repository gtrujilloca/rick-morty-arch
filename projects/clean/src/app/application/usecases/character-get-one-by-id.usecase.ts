import { inject, Injectable } from '@angular/core';
import { CharacterGateway } from '../../domain/character/character.gateway';

@Injectable()
export class CharacterGetOneById {
  // constructor(private characterGateway: CharacterGateway) {}

  private readonly _characterGateway = inject(CharacterGateway);

  async execute(id: string) {
    return this._characterGateway.getOneById(id);
  }
}
