import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

import { CharacterRepository } from './domain/character-repository';
import { CharacterRest } from './infrastructure/character-rest.repository';
import { CharacterGetAll } from './application/character/character-get-all';
import { CharacterGetOneById } from './application/character/character-get-one-by-id';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    { provide: CharacterRepository, useClass: CharacterRest },
    CharacterGetAll,
    CharacterGetOneById,
  ]
};
