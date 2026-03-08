import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CharacterGateway } from './domain/models/character.gateway';
import { CharacterInMemory } from './infrastructure/driven-adapters/character-in-memory';
import { CharacterRest } from './infrastructure/driven-adapters/character-rest';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    {
      provide: CharacterGateway,
      useClass: CharacterRest
    }
  ]
};
