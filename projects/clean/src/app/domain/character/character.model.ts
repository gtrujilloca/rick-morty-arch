export interface Character {
  id: string;
  name: string;
  status: Status;
  species: Species;
  gender: Gender;
  origin: CharacterOrigin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterOrigin {
  name: string;
  url: string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url:  string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

