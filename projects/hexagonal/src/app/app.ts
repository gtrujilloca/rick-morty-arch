import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { CharacterGetAll } from './application/character/character-get-all';

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
  // El use case se inyecta via DI — Angular resuelve la dependencia CharacterRepository
  // que fue registrada en app.config.ts: { provide: CharacterRepository, useClass: CharacterRest }
  private readonly getAllCharactersUseCase = inject(CharacterGetAll);
  protected readonly title = signal('Hexagonal Architecture');

  protected readonly allCharactersResource = resource({
    loader: () => this.getAllCharactersUseCase.execute(),
  });
}
