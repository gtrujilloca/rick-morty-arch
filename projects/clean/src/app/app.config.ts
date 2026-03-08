import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { CharacterGateway } from './domain/character/character.gateway';
import { CharacterRest } from './infrastructure/driven-adapters/character-rest';
import { CharacterGetAll } from './application/usecases/character-get-all.usecase';
import { CharacterGetOneById } from './application/usecases/character-get-one-by-id.usecase';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    { provide: CharacterGateway, useClass: CharacterRest },
    CharacterGetAll,
    CharacterGetOneById,
  ]
};
