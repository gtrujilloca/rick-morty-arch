import { ChangeDetectionStrategy, Component, resource, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CharacterGetAll } from './domain/usecases/character-get-all.usecase';
import { CharacterGateway } from './domain/models/character.gateway';
import { CharacterInMemory } from './infrastructure/driven-adapters/character-in-memory';
import { CharacterRest } from './infrastructure/driven-adapters/character-rest';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    @if (allCharactersResource.isLoading()) {
      <p>Loading characters...</p>
    } @else if (allCharactersResource.error()) {
      <p>Error loading characters: {{ allCharactersResource.error() }}</p>
    } @else {
      @for (character of allCharactersResource.value(); track character.id) {
        <pre>{{ character | json }}</pre>
      }
    }

    <router-outlet />
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // private readonly characterInMemoryRepository: CharacterRepository = new CharacterInMemory();
  // private readonly characterRestRepository: CharacterRepository = new CharacterRest();
  // private readonly getAllCharactersUseCase: CharacterGetAll = new CharacterGetAll(this.characterRestRepository);
  private readonly getAllCharactersUseCase: CharacterGetAll = new CharacterGetAll();
  protected readonly title = signal('Clean Architecture');

  protected readonly allCharactersResource = resource({
    loader: () => this.getAllCharactersUseCase.execute(),
  });
}
