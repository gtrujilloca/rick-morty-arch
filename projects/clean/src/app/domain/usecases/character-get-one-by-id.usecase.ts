import { inject, Injectable } from '@angular/core';
import { CharacterGateway } from '../../domain/models/character.gateway';

@Injectable()
export class CharacterGetOneById {
  // constructor(private characterRepository: CharacterRepository) {}

  private readonly _characterGateway = inject(CharacterGateway);
  async execute(id: string) {
    return this._characterGateway.getOneById(id);
  }
}

