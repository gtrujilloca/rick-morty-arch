import { Component, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterGetAll } from './application/character/character-get-all';
import { CharacterRepository } from './domain/character-repository';
import { CharacterInMemory } from './infrastructure/character-in-memory.repository';
import { JsonPipe } from '@angular/common';
import { CharacterRest } from './infrastructure/character-rest.repository';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    @if(allCharactersResource.isLoading()) {
      <p>Loading characters...</p>
    } @else if(allCharactersResource.error()) {
      <p>Error loading characters: {{ allCharactersResource.error() }}</p>
    } @else {
      @for(character of allCharactersResource.value(); track character.id) {
        <pre>{{ character | json }}</pre>
      }
    }

    <router-outlet />
  `,
  styles: [],
})
export class App {
  private readonly characterInMemoryRepository: CharacterRepository = new CharacterInMemory();
  private readonly characterRestRepository: CharacterRepository = new CharacterRest();
  private readonly getAllCharactesrUseCase: CharacterGetAll = new CharacterGetAll(this.characterRestRepository);
  protected readonly title = signal('hexagonal');


  protected readonly allCharactersResource = resource({
    loader: () => this.getAllCharactesrUseCase.execute(),
  });
}
