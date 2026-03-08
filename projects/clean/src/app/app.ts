import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CharacterGetAll } from './application/usecases/character-get-all.usecase';

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
  // El use case se inyecta via DI — Angular resuelve la dependencia CharacterGateway
  // que fue registrada en app.config.ts: { provide: CharacterGateway, useClass: CharacterRest }
  private readonly getAllCharactersUseCase = inject(CharacterGetAll);
  protected readonly title = signal('Clean Architecture');

  protected readonly allCharactersResource = resource({
    loader: () => this.getAllCharactersUseCase.execute(),
  });
}
