export class CharacterNotFoundError extends Error {
  constructor(id: string) {
    super(`Character with id "${id}" was not found`);
    this.name = 'CharacterNotFoundError';
  }
}