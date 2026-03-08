import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

import { CharacterInMemory } from './infrastructure/character-in-memory.repository';
import { CharacterRepository } from './domain/character-repository';
import { CharacterRest } from './infrastructure/character-rest.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: CharacterRepository,
      useClass: CharacterRest
    }
  ]
};
